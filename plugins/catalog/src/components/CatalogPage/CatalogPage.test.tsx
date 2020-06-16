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
  ApiProvider,
  ApiRegistry,
  errorApiRef,
  storageApiRef,
  WebStorage,
} from '@backstage/core';
import { MockErrorApi, wrapInTestApp } from '@backstage/test-utils';
import { render } from '@testing-library/react';
import React from 'react';
import { catalogApiRef } from '../..';
import { CatalogApi } from '../../api/types';
import { CatalogPage } from './CatalogPage';
import { Entity } from '@backstage/catalog-model';

describe('CatalogPage', () => {
  const mockErrorApi = new MockErrorApi();
  const catalogApi: Partial<CatalogApi> = {
    getEntities: () =>
      Promise.resolve([
        {
          metadata: {
            name: 'Entity1',
          },
          apiVersion: 'backstage.io/v1alpha1',
          kind: 'Component',
        },
      ] as Entity[]),
    getLocationByEntity: () =>
      Promise.resolve({ id: 'id', type: 'github', target: 'url' }),
  };

  // this test right now causes some red lines in the log output when running tests
  // related to some theme issues in mui-table
  // https://github.com/mbrn/material-table/issues/1293
  it('should render', async () => {
    const rendered = render(
      wrapInTestApp(
        <ApiProvider
          apis={ApiRegistry.from([
            [errorApiRef, mockErrorApi],
            [catalogApiRef, catalogApi],
            [storageApiRef, new WebStorage('@mock', mockErrorApi)],
          ])}
        >
          <CatalogPage />
        </ApiProvider>,
      ),
    );
    expect(
      await rendered.findByText('Keep track of your software'),
    ).toBeInTheDocument();
  });
});
