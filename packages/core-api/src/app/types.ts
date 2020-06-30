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

import { ComponentType } from 'react';
import { IconComponent, SystemIconKey, SystemIcons } from '../icons';
import { BackstagePlugin } from '../plugin';
import { ApiHolder } from '../apis';
import { AppTheme, ConfigApi, ProfileInfo } from '../apis/definitions';
import { AppConfig } from '@backstage/config';

export type BootErrorPageProps = {
  step: 'load-config';
  error: Error;
};

export type SignInResult = {
  /**
   * User ID that will be returned by the IdentityApi
   */
  userId: string;

  profile: ProfileInfo;

  /**
   * Function used to retrieve an ID token for the signed in user.
   */
  getIdToken?: () => Promise<string>;
  /**
   * Logout handler that will be called if the user requests a logout.
   */
  logout?: () => Promise<void>;
};

export type SignInPageProps = {
  /**
   * Set the sign-in result for the app. This should only be called once.
   */
  onResult(result: SignInResult): void;
};

export type AppComponents = {
  NotFoundErrorPage: ComponentType<{}>;
  BootErrorPage: ComponentType<BootErrorPageProps>;
  Progress: ComponentType<{}>;
  Router: ComponentType<{}>;

  /**
   * An optional sign-in page that will be rendered instead of the AppRouter at startup.
   *
   * If a sign-in page is set, it will always be shown before the app, and it is up
   * to the sign-in page to handle e.g. saving of login methods for subsequent visits.
   *
   * The sign-in page will be displayed until it has passed up a result to the parent,
   * and which point the AppRouter and all of its children will be rendered instead.
   */
  SignInPage?: ComponentType<SignInPageProps>;
};

/**
 * A function that loads in the App config that will be accessible via the ConfigApi.
 *
 * If multiple config objects are returned in the array, values in the earlier configs
 * will override later ones.
 */
export type AppConfigLoader = () => Promise<AppConfig[]>;

// TODO(Rugvip): Temporary workaround for accessing config when instantiating APIs, we might want to do this differently
export type Apis = ApiHolder | ((config: ConfigApi) => ApiHolder);

export type AppOptions = {
  /**
   * A holder of all APIs available in the app.
   *
   * Use for example ApiRegistry or ApiTestRegistry.
   */
  apis?: Apis;

  /**
   * Supply icons to override the default ones.
   */
  icons?: Partial<SystemIcons>;

  /**
   * A list of all plugins to include in the app.
   */
  plugins?: BackstagePlugin[];

  /**
   * Supply components to the app to override the default ones.
   */
  components?: Partial<AppComponents>;

  /**
   * Themes provided as a part of the app. By default two themes are included, one
   * light variant of the default backstage theme, and one dark.
   *
   * This is the default config:
   *
   * ```
   * [{
   *   id: 'light',
   *   title: 'Light Theme',
   *   variant: 'light',
   *   theme: lightTheme,
   * }, {
   *   id: 'dark',
   *   title: 'Dark Theme',
   *   variant: 'dark',
   *   theme: darkTheme,
   * }]
   * ```
   */
  themes?: AppTheme[];

  /**
   * A function that loads in App configuration that will be accessible via
   * the ConfigApi.
   *
   * Defaults to an empty config.
   *
   * TODO(Rugvip): Omitting this should instead default to loading in configuration
   *  that was packaged by the backstage-cli and default docker container boot script.
   */
  configLoader?: AppConfigLoader;
};

export type BackstageApp = {
  /**
   * Get the holder for all APIs available in the app.
   */
  getApis(): ApiHolder;

  /**
   * Returns all plugins registered for the app.
   */
  getPlugins(): BackstagePlugin[];

  /**
   * Get a common icon for this app.
   */
  getSystemIcon(key: SystemIconKey): IconComponent;

  /**
   * Provider component that should wrap the Router created with getRouter()
   * and any other components that need to be within the app context.
   */
  getProvider(): ComponentType<{}>;

  /**
   * Router component that should wrap the App Routes create with getRoutes()
   * and any other components that should only be available while signed in.
   */
  getRouter(): ComponentType<{}>;

  /**
   * Routes component that contains all routes for plugin pages in the app.
   */
  getRoutes(): ComponentType<{}>;
};
