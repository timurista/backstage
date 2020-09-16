# FeatureFlagsApi

The FeatureFlagsApi type is defined at
[packages/core-api/src/apis/definitions/FeatureFlagsApi.ts:41](https://github.com/spotify/backstage/blob/82d329555c16af46db9b4e5cd2f44a3cc006a52e/packages/core-api/src/apis/definitions/FeatureFlagsApi.ts#L41).

The following Utility API implements this type:
[featureFlagsApiRef](./README.md#featureflags)

## Members

### registeredFeatureFlags

Store a list of registered feature flags.

<pre>
registeredFeatureFlags: FeatureFlagsRegistryItem[]
</pre>

### getFlags()

Get a list of all feature flags from the current user.

<pre>
getFlags(): UserFlags
</pre>

### getRegisteredFlags()

Get a list of all registered flags.

<pre>
getRegisteredFlags(): FeatureFlagsRegistry
</pre>
