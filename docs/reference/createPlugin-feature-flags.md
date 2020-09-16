---
id: createPlugin-feature-flags
title: createPlugin - feature flags
---

The `featureFlags` object passed to the `register` function makes it possible
for plugins to register Feature Flags in Backstage for users to opt into. You
can use this to split out logic in your code for manual A/B testing, etc.

```typescript
export type FeatureFlagsHooks = {
  register(name: FeatureFlagName): void;
};
```

Here's a code sample:

```typescript
import { createPlugin } from '@backstage/core';

export default createPlugin({
  id: 'welcome',
  register({ router, featureFlags }) {
    // router.registerRoute('/', Component);
    featureFlags.register('enable-example-feature');
  },
});
```

## Using with useApi

To use it, you'll first need to register the `FeatureFlags` API via
`ApiRegistry` in your `apis.ts` in your App:

```tsx
import {
  ApiHolder,
  ApiRegistry,
  featureFlagsApiRef,
  FeatureFlags,
} from '@backstage/core';

const builder = ApiRegistry.builder();
builder.add(featureFlagsApiRef, new FeatureFlags());

export default builder.build() as ApiHolder;
```

Then, later, you can directly use it via `useApi`:

```tsx
import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { FeatureFlagState, featureFlagsApiRef, useApi } from '@backstage/core';

const ExampleButton: FC<{}> = () => {
  const flags = useApi(featureFlagsApiRef).getFlags();

  const handleClick = () => {
    flags.set('enable-example-feature', FeatureFlagState.On);
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      Enable the 'enable-example-feature' feature flag
    </Button>
  );
};
```
