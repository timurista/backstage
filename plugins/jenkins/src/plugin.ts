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
  createPlugin,
  createRouteRef,
  createApiFactory,
  configApiRef,
} from '@backstage/core';
import { DetailedViewPage } from './pages/BuildWithStepsPage';
import { jenkinsApiRef, JenkinsApi } from './api';

export const buildRouteRef = createRouteRef({
  path: '/jenkins/job',
  title: 'Jenkins run',
});

export const plugin = createPlugin({
  id: 'jenkins',
  apis: [
    createApiFactory({
      api: jenkinsApiRef,
      deps: { configApi: configApiRef },
      factory: ({ configApi }) =>
        new JenkinsApi(
          `${configApi.getString('backend.baseUrl')}/proxy/jenkins/api`,
        ),
    }),
  ],
  register({ router }) {
    router.addRoute(buildRouteRef, DetailedViewPage);
  },
});

export { JenkinsBuildsWidget } from './components/JenkinsPluginWidget/JenkinsBuildsWidget';
export { JenkinsLastBuildWidget } from './components/JenkinsPluginWidget/JenkinsLastBuildWidget';
