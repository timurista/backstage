# Backstage Changelog

This is a best-effort changelog where we manually collect breaking changes. It is not an exhaustive list of all changes or even features added.

If you encounter issues while upgrading to a newer version, don't hesitate to reach out on [Discord](https://discord.gg/EBHEGzX) or [open an issue](https://github.com/spotify/backstage/issues/new/choose)!

## Next Release

### @backstage/core

- Introduced initial version of an inverted app/plugin relationship, where plugins export components for apps to use, instead registering themselves directly into the app. This enables more fine-grained control of plugin features, and also composition of plugins such as catalog pages with additional cards and tabs. This breaks the use of `RouteRef`s, and there will be more changes related to this in the future, but this change lays the initial foundation. See `packages/app` and followup PRs for how to update plugins for this change. [#2076](https://github.com/spotify/backstage/pull/2076)
- Switch to an automatic dependency injection mechanism for all Utility APIs, allowing plugins to ship default implementations of their APIs. See [https://backstage.io/docs/api/utility-apis](https://backstage.io/docs/api/utility-apis). [#2285](https://github.com/spotify/backstage/pull/2285)

> Collect changes for the next release below

### @backstage/cli

- Change `backstage-cli backend:build-image` to forward all args to `docker image build`, instead of just tag. Also add `--build` flag for building all dependent packages before packaging the workspace for the docker build. [#2299](https://github.com/spotify/backstage/pull/2299)

### @backstage/create-app

- Change root `tsc` output dir to `dist-types`, in order to allow for standalone plugin repos. [#2278](https://github.com/spotify/backstage/pull/2278)

## v0.1.1-alpha.21

- Added many more frontend plugins to the template along with the sidebar. [#1942](https://github.com/spotify/backstage/pull/1942), [#2084](https://github.com/spotify/backstage/pull/2084)

### @backstage/core

- Material-UI: Bumped to 4.11.0, which is the version that create-app will
  resolve to, because we wanted to get the renaming of ExpansionPanel to
  Accordion into place. This gets rid of a lot of console deprecation warnings
  in newly scaffolded apps.

### @backstage/cli

- Set `NODE_ENV` to `test` when running test. [#2214](https://github.com/spotify/backstage/pull/2214)

- Fix for backend plugins names requiring to be prefixed with `@backstage` to build. [#2224](https://github.com/spotify/backstage/pull/2224)

### @backstage/backend-common

- The backend plugin
  [service builder](https://github.com/spotify/backstage/blob/master/packages/backend-common/src/service/lib/ServiceBuilderImpl.ts)
  no longer adds `express.json()` automatically to all routes. While convenient
  in a lot of cases, it also led to problems where for example the proxy
  middleware could hang because the body had already been altered and could not
  be streamed. Also, plugins that rather wanted to handle e.g. form encoded data
  still had to cater to that manually. We therefore decided to let plugins add
  `express.json()` themselves if they happen to deal with JSON data.

### @backstage/catalog-backend

- Add rules configuration for catalog location and entity kinds. The default rules should cover most use-cases, but you may need to allow specific entity kinds when using things like Template or Group entities. [#2118](https://github.com/spotify/backstage/pull/2118)

## v0.1.1-alpha.20

### @backstage/cli

- Use config files according to `NODE_ENV` when serving and building frontend packages. [#2077](https://github.com/spotify/backstage/pull/2077)

- Pin `rollup-plugin-dts` to avoid a later broken version. [#2097](https://github.com/spotify/backstage/pull/2097)

## v0.1.1-alpha.19

### @backstage/backend-common

- Allow listen host and port to be configured separately, in order to support PORT environment variables. [#1950](https://github.com/spotify/backstage/pull/1950)

### @backstage/core

- Added new `DiscoveryApi` for discovering backend endpoint in the frontend, and use in most plugins. See [packages/app/src/apis.ts](https://github.com/spotify/backstage/blob/master/packages/app/src/apis.ts) for how to register in your app. [#2074](https://github.com/spotify/backstage/pull/2074)

### @backstage/create-app

- Added catalog and scaffolder frontend plugins to the template along with the sidebar. [#1942](https://github.com/spotify/backstage/pull/1942), [#2084](https://github.com/spotify/backstage/pull/2084)
- Many plugins have been added to the catalog and will for now be required to be added to separate apps as well. This will be solved as [#1536](https://github.com/spotify/backstage/issues/1536) gets sorted out, but for now you may need to install some plugins just to get pages to work.

### @backstage/catalog-backend

- Added the possibility to add static locations via `app-config.yaml`. This changed the signature of `new LocationReaders(logger)` inside `packages/backend/src/plugins/catalog.ts` to `new LocationReaders({config, logger})`. [#1890](https://github.com/spotify/backstage/pull/1890)

### @backstage/theme

- Changed the type signature of the palette, removing `sidebar: string` and adding `navigation: { background: string; indicator: string}`. [#1880](https://github.com/spotify/backstage/pull/1880)

## v0.1.1-alpha.18

### @backstage/catalog-backend

- Fixed an issue with duplicated location logs. Applying the database migrations from this fix will clear the existing migration logs. [#1836](https://github.com/spotify/backstage/pull/1836)

### @backstage/auth-backend

This version fixes a breakage in CSP policies set by the auth backend. If you're facing trouble with auth in alpha.17, upgrade to alpha.18.

- OAuth redirect URLs no longer receive the `env` parameter, as it is now passed through state instead. This will likely require a reconfiguration of the OAuth app, where a redirect URL like `http://localhost:7000/auth/google/handler/frame?env=development` should now be configured as `http://localhost:7000/auth/google/handler/frame`. [#1812](https://github.com/spotify/backstage/pull/1812)

### @backstage/core

- `SignInPage` props have been changed to receive a list of provider objects instead of simple string identifiers for all but the `'guest'` and `'custom'` providers. This opens up for configuration of custom providers, but may break existing configurations. See [packages/app/src/App.tsx](https://github.com/spotify/backstage/blob/032ba401af36a760efdac41668d7000ccf09bc57/packages/app/src/App.tsx#L36) and [packages/app/src/identityProviders.ts](https://github.com/spotify/backstage/blob/032ba401af36a760efdac41668d7000ccf09bc57/packages/app/src/identityProviders.ts#L24) for how to bring back the existing providers. [#1816](https://github.com/spotify/backstage/pull/1816)

## v0.1.1-alpha.17

### @backstage/techdocs-backend

- The techdocs backend now requires more configuration to be supplied when creating the router. See [packages/backend/src/plugins/techdocs.ts](https://github.com/spotify/backstage/blob/0201fd9b4a52429519dd59e9184106ba69456deb/packages/backend/src/plugins/techdocs.ts#L42) for an example. [#1736](https://github.com/spotify/backstage/pull/1736)

### @backstage/cli

- The `create-app` command was moved out from the CLI to a standalone package. It's now invoked with `npx @backstage/create-app` instead. [#1745](https://github.com/spotify/backstage/pull/1745)
