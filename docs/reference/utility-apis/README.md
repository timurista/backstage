# Backstage Core Utility APIs

The following is a list of all Utility APIs defined by `@backstage/core`. They
are available to use by plugins and components, and can be accessed using the
`useApi` hook, also provided by `@backstage/core`. For more information, see
https://github.com/spotify/backstage/blob/master/docs/api/utility-apis.md.

### alert

Used to report alerts and forward them to the app

Implemented type: [AlertApi](./AlertApi.md)

ApiRef:
[alertApiRef](https://github.com/spotify/backstage/blob/82d329555c16af46db9b4e5cd2f44a3cc006a52e/packages/core-api/src/apis/definitions/AlertApi.ts#L41)

### appTheme

API Used to configure the app theme, and enumerate options

Implemented type: [AppThemeApi](./AppThemeApi.md)

ApiRef:
[appThemeApiRef](https://github.com/spotify/backstage/blob/82d329555c16af46db9b4e5cd2f44a3cc006a52e/packages/core-api/src/apis/definitions/AppThemeApi.ts#L74)

### auth0Auth

Provides authentication towards Auth0 APIs

Implemented types: [OpenIdConnectApi](./OpenIdConnectApi.md),
[ProfileInfoApi](./ProfileInfoApi.md),
[BackstageIdentityApi](./BackstageIdentityApi.md),
[SessionStateApi](./SessionStateApi.md)

ApiRef:
[auth0AuthApiRef](https://github.com/spotify/backstage/blob/82d329555c16af46db9b4e5cd2f44a3cc006a52e/packages/core-api/src/apis/definitions/auth.ts#L273)

### config

Used to access runtime configuration

Implemented type: [Config](./Config.md)

ApiRef:
[configApiRef](https://github.com/spotify/backstage/blob/82d329555c16af46db9b4e5cd2f44a3cc006a52e/packages/core-api/src/apis/definitions/ConfigApi.ts#L22)

### discovery

Provides service discovery of backend plugins

Implemented type: [DiscoveryApi](./DiscoveryApi.md)

ApiRef:
[discoveryApiRef](https://github.com/spotify/backstage/blob/82d329555c16af46db9b4e5cd2f44a3cc006a52e/packages/core-api/src/apis/definitions/DiscoveryApi.ts#L44)

### error

Used to report errors and forward them to the app

Implemented type: [ErrorApi](./ErrorApi.md)

ApiRef:
[errorApiRef](https://github.com/spotify/backstage/blob/82d329555c16af46db9b4e5cd2f44a3cc006a52e/packages/core-api/src/apis/definitions/ErrorApi.ts#L65)

### featureFlags

Used to toggle functionality in features across Backstage

Implemented type: [FeatureFlagsApi](./FeatureFlagsApi.md)

ApiRef:
[featureFlagsApiRef](https://github.com/spotify/backstage/blob/82d329555c16af46db9b4e5cd2f44a3cc006a52e/packages/core-api/src/apis/definitions/FeatureFlagsApi.ts#L58)

### githubAuth

Provides authentication towards GitHub APIs

Implemented types: [OAuthApi](./OAuthApi.md),
[ProfileInfoApi](./ProfileInfoApi.md),
[BackstageIdentityApi](./BackstageIdentityApi.md),
[SessionStateApi](./SessionStateApi.md)

ApiRef:
[githubAuthApiRef](https://github.com/spotify/backstage/blob/82d329555c16af46db9b4e5cd2f44a3cc006a52e/packages/core-api/src/apis/definitions/auth.ts#L230)

### gitlabAuth

Provides authentication towards GitLab APIs

Implemented types: [OAuthApi](./OAuthApi.md),
[ProfileInfoApi](./ProfileInfoApi.md),
[BackstageIdentityApi](./BackstageIdentityApi.md),
[SessionStateApi](./SessionStateApi.md)

ApiRef:
[gitlabAuthApiRef](https://github.com/spotify/backstage/blob/82d329555c16af46db9b4e5cd2f44a3cc006a52e/packages/core-api/src/apis/definitions/auth.ts#L260)

### googleAuth

Provides authentication towards Google APIs and identities

Implemented types: [OAuthApi](./OAuthApi.md),
[OpenIdConnectApi](./OpenIdConnectApi.md),
[ProfileInfoApi](./ProfileInfoApi.md),
[BackstageIdentityApi](./BackstageIdentityApi.md),
[SessionStateApi](./SessionStateApi.md)

ApiRef:
[googleAuthApiRef](https://github.com/spotify/backstage/blob/82d329555c16af46db9b4e5cd2f44a3cc006a52e/packages/core-api/src/apis/definitions/auth.ts#L213)

### identity

Provides access to the identity of the signed in user

Implemented type: [IdentityApi](./IdentityApi.md)

ApiRef:
[identityApiRef](https://github.com/spotify/backstage/blob/82d329555c16af46db9b4e5cd2f44a3cc006a52e/packages/core-api/src/apis/definitions/IdentityApi.ts#L54)

### microsoftAuth

Provides authentication towards Microsoft APIs and identities

Implemented types: [OAuthApi](./OAuthApi.md),
[OpenIdConnectApi](./OpenIdConnectApi.md),
[ProfileInfoApi](./ProfileInfoApi.md),
[BackstageIdentityApi](./BackstageIdentityApi.md),
[SessionStateApi](./SessionStateApi.md)

ApiRef:
[microsoftAuthApiRef](https://github.com/spotify/backstage/blob/82d329555c16af46db9b4e5cd2f44a3cc006a52e/packages/core-api/src/apis/definitions/auth.ts#L287)

### oauth2

Example of how to use oauth2 custom provider

Implemented types: [OAuthApi](./OAuthApi.md),
[OpenIdConnectApi](./OpenIdConnectApi.md),
[ProfileInfoApi](./ProfileInfoApi.md), [SessionStateApi](./SessionStateApi.md)

ApiRef:
[oauth2ApiRef](https://github.com/spotify/backstage/blob/82d329555c16af46db9b4e5cd2f44a3cc006a52e/packages/core-api/src/apis/definitions/auth.ts#L301)

### oauthRequest

An API for implementing unified OAuth flows in Backstage

Implemented type: [OAuthRequestApi](./OAuthRequestApi.md)

ApiRef:
[oauthRequestApiRef](https://github.com/spotify/backstage/blob/82d329555c16af46db9b4e5cd2f44a3cc006a52e/packages/core-api/src/apis/definitions/OAuthRequestApi.ts#L130)

### oktaAuth

Provides authentication towards Okta APIs

Implemented types: [OAuthApi](./OAuthApi.md),
[OpenIdConnectApi](./OpenIdConnectApi.md),
[ProfileInfoApi](./ProfileInfoApi.md),
[BackstageIdentityApi](./BackstageIdentityApi.md),
[SessionStateApi](./SessionStateApi.md)

ApiRef:
[oktaAuthApiRef](https://github.com/spotify/backstage/blob/82d329555c16af46db9b4e5cd2f44a3cc006a52e/packages/core-api/src/apis/definitions/auth.ts#L243)

### storage

Provides the ability to store data which is unique to the user

Implemented type: [StorageApi](./StorageApi.md)

ApiRef:
[storageApiRef](https://github.com/spotify/backstage/blob/82d329555c16af46db9b4e5cd2f44a3cc006a52e/packages/core-api/src/apis/definitions/StorageApi.ts#L68)
