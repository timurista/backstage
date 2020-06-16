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
import { Logger } from 'winston';

export type OAuthProviderOptions = {
  clientID: string;
  clientSecret: string;
  callbackURL: string;
};

export type SAMLProviderConfig = {
  entryPoint: string;
  issuer: string;
};

export type EnvironmentProviderConfig = {
  [key: string]: OAuthProviderConfig | SAMLProviderConfig;
};

export type AuthProviderConfig = {
  baseUrl: string;
};

export type OAuthProviderConfig = {
  secure: boolean;
  appOrigin: string; // http://localhost:3000
  clientId: string;
  clientSecret: string;
};

export interface OAuthProviderHandlers {
  start(req: express.Request, options: any): Promise<any>;
  handler(req: express.Request): Promise<any>;
  refresh?(refreshToken: string, scope: string): Promise<any>;
  logout?(): Promise<any>;
}

export interface AuthProviderRouteHandlers {
  start(req: express.Request, res: express.Response): Promise<any>;
  frameHandler(req: express.Request, res: express.Response): Promise<any>;
  refresh?(req: express.Request, res: express.Response): Promise<any>;
  logout(req: express.Request, res: express.Response): Promise<any>;
}

export type SAMLEnvironmentProviderConfig = {
  [key: string]: SAMLProviderConfig;
};

export type AuthProviderFactory = (
  globalConfig: AuthProviderConfig,
  providerConfig: EnvironmentProviderConfig,
  logger: Logger,
) => AuthProviderRouteHandlers;

export type AuthInfoBase = {
  accessToken: string;
  idToken?: string;
  expiresInSeconds?: number;
  scope: string;
};

export type AuthInfoWithProfile = AuthInfoBase & {
  profile:
    | {
        provider: string;
        email: string;
        name?: string;
        picture?: string;
      }
    | undefined;
};

export type AuthInfoPrivate = {
  refreshToken: string;
};

export type AuthResponse =
  | {
      type: 'auth-result';
      payload: AuthInfoBase | AuthInfoWithProfile;
    }
  | {
      type: 'auth-result';
      error: Error;
    };

export type RedirectInfo = {
  url: string;
  status?: number;
};

export type ProfileInfo = {
  provider: string;
  email: string;
  name: string;
  picture: string;
};

export type RefreshTokenResponse = {
  accessToken: string;
  params: any;
};
