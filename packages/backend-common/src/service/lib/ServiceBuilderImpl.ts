/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ConfigReader } from '@backstage/config';
import compression from 'compression';
import cors from 'cors';
import express, { Router } from 'express';
import helmet from 'helmet';
import * as http from 'http';
import stoppable from 'stoppable';
import { Logger } from 'winston';
import { useHotCleanup } from '../../hot';
import { getRootLogger } from '../../logging';
import {
  errorHandler,
  notFoundHandler,
  requestLoggingHandler,
} from '../../middleware';
import { ServiceBuilder } from '../types';
import {
  readBaseOptions,
  readCorsOptions,
  readHttpsSettings,
  HttpsSettings,
} from './config';
import { createHttpServer, createHttpsServer } from './hostFactory';
import { metricsHandler } from './metrics';

const DEFAULT_PORT = 7000;
// '' is express default, which listens to all interfaces
const DEFAULT_HOST = '';

export class ServiceBuilderImpl implements ServiceBuilder {
  private port: number | undefined;
  private host: string | undefined;
  private logger: Logger | undefined;
  private corsOptions: cors.CorsOptions | undefined;
  private httpsSettings: HttpsSettings | undefined;
  private enableMetrics: boolean = true;
  private routers: [string, Router][];
  // Reference to the module where builder is created - needed for hot module
  // reloading
  private module: NodeModule;

  constructor(moduleRef: NodeModule) {
    this.routers = [];
    this.module = moduleRef;
  }

  loadConfig(config: ConfigReader): ServiceBuilder {
    const backendConfig = config.getOptionalConfig('backend');
    if (!backendConfig) {
      return this;
    }

    const baseOptions = readBaseOptions(backendConfig);
    if (baseOptions.listenPort) {
      this.port = baseOptions.listenPort;
    }
    if (baseOptions.listenHost) {
      this.host = baseOptions.listenHost;
    }

    const corsOptions = readCorsOptions(backendConfig);
    if (corsOptions) {
      this.corsOptions = corsOptions;
    }

    const httpsSettings = readHttpsSettings(backendConfig);
    if (httpsSettings) {
      this.httpsSettings = httpsSettings;
    }

    // For now, configuration of metrics is a simple boolean and active by default
    this.enableMetrics = backendConfig.getOptionalBoolean('metrics') !== false;

    return this;
  }

  setPort(port: number): ServiceBuilder {
    this.port = port;
    return this;
  }

  setHost(host: string): ServiceBuilder {
    this.host = host;
    return this;
  }

  setLogger(logger: Logger): ServiceBuilder {
    this.logger = logger;
    return this;
  }

  setHttpsSettings(settings: HttpsSettings): ServiceBuilder {
    this.httpsSettings = settings;
    return this;
  }

  enableCors(options: cors.CorsOptions): ServiceBuilder {
    this.corsOptions = options;
    return this;
  }

  addRouter(root: string, router: Router): ServiceBuilder {
    this.routers.push([root, router]);
    return this;
  }

  start(): Promise<http.Server> {
    const app = express();
    const {
      port,
      host,
      logger,
      corsOptions,
      httpsSettings,
    } = this.getOptions();

    app.use(helmet());
    if (corsOptions) {
      app.use(cors(corsOptions));
    }
    app.use(compression());
    if (this.enableMetrics) {
      app.use(metricsHandler());
    }
    app.use(requestLoggingHandler());
    for (const [root, route] of this.routers) {
      app.use(root, route);
    }
    app.use(notFoundHandler());
    app.use(errorHandler());

    return new Promise((resolve, reject) => {
      app.on('error', e => {
        logger.error(`Failed to start up on port ${port}, ${e}`);
        reject(e);
      });

      const server: http.Server = httpsSettings
        ? createHttpsServer(app, httpsSettings, logger)
        : createHttpServer(app, logger);

      const stoppableServer = stoppable(
        server.listen(port, host, () => {
          logger.info(`Listening on ${host}:${port}`);
        }),
        0,
      );

      useHotCleanup(this.module, () =>
        stoppableServer.stop((e: any) => {
          if (e) console.error(e);
        }),
      );

      resolve(stoppableServer);
    });
  }

  private getOptions(): {
    port: number;
    host: string;
    logger: Logger;
    corsOptions?: cors.CorsOptions;
    httpsSettings?: HttpsSettings;
  } {
    return {
      port: this.port ?? DEFAULT_PORT,
      host: this.host ?? DEFAULT_HOST,
      logger: this.logger ?? getRootLogger(),
      corsOptions: this.corsOptions,
      httpsSettings: this.httpsSettings,
    };
  }
}
