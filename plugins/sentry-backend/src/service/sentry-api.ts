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
import express from 'express';
import axios from 'axios';
import { Logger } from 'winston';

export function getRequestHeaders(token: string) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export function getSentryApiForwarder(token: string, logger: Logger) {
  return function fowardRequest(
    request: express.Request,
    response: express.Response,
  ) {
    const sentryUrl = request.path;
    const effectiveUrl = `https://sentry.io/${sentryUrl}`;
    logger.info(`Calling Sentry REST API, ${effectiveUrl}`);
    axios
      .get(effectiveUrl, getRequestHeaders(token))
      .then(res => {
        response.send(res.data);
      })
      .catch(err => {
        return response.status(err.response.status).json({
          detail: err.response.statusText,
        });
      });
  };
}
