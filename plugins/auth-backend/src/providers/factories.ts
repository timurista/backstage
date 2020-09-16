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

import Router from 'express-promise-router';
import { Logger } from 'winston';
import { TokenIssuer } from '../identity';
import { createGithubProvider } from './github';
import { createGitlabProvider } from './gitlab';
import { createGoogleProvider } from './google';
import { createOAuth2Provider } from './oauth2';
import { createOktaProvider } from './okta';
import { createSamlProvider } from './saml';
import { createAuth0Provider } from './auth0';
import { createMicrosoftProvider } from './microsoft';
import { AuthProviderConfig, AuthProviderFactory } from './types';
import { Config } from '@backstage/config';

const factories: { [providerId: string]: AuthProviderFactory } = {
  google: createGoogleProvider,
  github: createGithubProvider,
  gitlab: createGitlabProvider,
  saml: createSamlProvider,
  okta: createOktaProvider,
  auth0: createAuth0Provider,
  microsoft: createMicrosoftProvider,
  oauth2: createOAuth2Provider,
};

export const createAuthProviderRouter = (
  providerId: string,
  globalConfig: AuthProviderConfig,
  config: Config,
  logger: Logger,
  tokenIssuer: TokenIssuer,
) => {
  const factory = factories[providerId];
  if (!factory) {
    throw Error(`No auth provider available for '${providerId}'`);
  }

  const router = Router();

  const handler = factory({ globalConfig, config, logger, tokenIssuer });

  router.get('/start', handler.start.bind(handler));
  router.get('/handler/frame', handler.frameHandler.bind(handler));
  router.post('/handler/frame', handler.frameHandler.bind(handler));
  if (handler.logout) {
    router.post('/logout', handler.logout.bind(handler));
  }
  if (handler.refresh) {
    router.get('/refresh', handler.refresh.bind(handler));
  }

  return router;
};
