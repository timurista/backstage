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

import { createApiRef } from '../ApiRef';
import {
  UserFlags,
  FeatureFlagsRegistry,
  FeatureFlagsRegistryItem,
} from '../../app/FeatureFlags';

/**
 * The feature flags API is used to toggle functionality to users across plugins and Backstage.
 *
 * Plugins can use this API to register feature flags that they have available
 * for users to enable/disable, and this API will centralize the current user's
 * state of which feature flags they would like to enable.
 *
 * This is ideal for Backstage plugins, as well as your own App, to trial incomplete
 * or unstable upcoming features. Although there will be a common interface for users
 * to enable and disable feature flags, this API acts as another way to enable/disable.
 */

export enum FeatureFlagState {
  Off = 0,
  On = 1,
}

export interface FeatureFlagsApi {
  /**
   * Store a list of registered feature flags.
   */
  registeredFeatureFlags: FeatureFlagsRegistryItem[];

  /**
   * Get a list of all feature flags from the current user.
   */
  getFlags(): UserFlags;

  /**
   * Get a list of all registered flags.
   */
  getRegisteredFlags(): FeatureFlagsRegistry;
}

export const featureFlagsApiRef = createApiRef<FeatureFlagsApi>({
  id: 'core.featureflags',
  description: 'Used to toggle functionality in features across Backstage',
});
