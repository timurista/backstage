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

import {
  alertApiRef,
  errorApiRef,
  AlertApiForwarder,
  ErrorApiForwarder,
  ErrorAlerter,
  featureFlagsApiRef,
  FeatureFlags,
  discoveryApiRef,
  GoogleAuth,
  GithubAuth,
  OAuth2,
  OktaAuth,
  GitlabAuth,
  Auth0Auth,
  MicrosoftAuth,
  oauthRequestApiRef,
  OAuthRequestManager,
  googleAuthApiRef,
  githubAuthApiRef,
  oauth2ApiRef,
  oktaAuthApiRef,
  gitlabAuthApiRef,
  auth0AuthApiRef,
  microsoftAuthApiRef,
  storageApiRef,
  WebStorage,
  createApiFactory,
  configApiRef,
  UrlPatternDiscovery,
} from '@backstage/core-api';

export const defaultApis = [
  createApiFactory({
    api: discoveryApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) =>
      UrlPatternDiscovery.compile(
        `${configApi.getString('backend.baseUrl')}/api/{{ pluginId }}`,
      ),
  }),
  createApiFactory(alertApiRef, new AlertApiForwarder()),
  createApiFactory({
    api: errorApiRef,
    deps: { alertApi: alertApiRef },
    factory: ({ alertApi }) =>
      new ErrorAlerter(alertApi, new ErrorApiForwarder()),
  }),
  createApiFactory({
    api: storageApiRef,
    deps: { errorApi: errorApiRef },
    factory: ({ errorApi }) => WebStorage.create({ errorApi }),
  }),
  createApiFactory(featureFlagsApiRef, new FeatureFlags()),
  createApiFactory(oauthRequestApiRef, new OAuthRequestManager()),
  createApiFactory({
    api: googleAuthApiRef,
    deps: {
      discoveryApi: discoveryApiRef,
      oauthRequestApi: oauthRequestApiRef,
    },
    factory: ({ discoveryApi, oauthRequestApi }) =>
      GoogleAuth.create({ discoveryApi, oauthRequestApi }),
  }),
  createApiFactory({
    api: microsoftAuthApiRef,
    deps: {
      discoveryApi: discoveryApiRef,
      oauthRequestApi: oauthRequestApiRef,
    },
    factory: ({ discoveryApi, oauthRequestApi }) =>
      MicrosoftAuth.create({ discoveryApi, oauthRequestApi }),
  }),
  createApiFactory({
    api: githubAuthApiRef,
    deps: {
      discoveryApi: discoveryApiRef,
      oauthRequestApi: oauthRequestApiRef,
    },
    factory: ({ discoveryApi, oauthRequestApi }) =>
      GithubAuth.create({ discoveryApi, oauthRequestApi }),
  }),
  createApiFactory({
    api: oktaAuthApiRef,
    deps: {
      discoveryApi: discoveryApiRef,
      oauthRequestApi: oauthRequestApiRef,
    },
    factory: ({ discoveryApi, oauthRequestApi }) =>
      OktaAuth.create({ discoveryApi, oauthRequestApi }),
  }),
  createApiFactory({
    api: gitlabAuthApiRef,
    deps: {
      discoveryApi: discoveryApiRef,
      oauthRequestApi: oauthRequestApiRef,
    },
    factory: ({ discoveryApi, oauthRequestApi }) =>
      GitlabAuth.create({ discoveryApi, oauthRequestApi }),
  }),
  createApiFactory({
    api: auth0AuthApiRef,
    deps: {
      discoveryApi: discoveryApiRef,
      oauthRequestApi: oauthRequestApiRef,
    },
    factory: ({ discoveryApi, oauthRequestApi }) =>
      Auth0Auth.create({ discoveryApi, oauthRequestApi }),
  }),
  createApiFactory({
    api: oauth2ApiRef,
    deps: {
      discoveryApi: discoveryApiRef,
      oauthRequestApi: oauthRequestApiRef,
    },
    factory: ({ discoveryApi, oauthRequestApi }) =>
      OAuth2.create({ discoveryApi, oauthRequestApi }),
  }),
];
