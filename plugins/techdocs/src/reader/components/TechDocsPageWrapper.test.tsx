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
import { TechDocsPageWrapper } from './TechDocsPageWrapper';
import React from 'react';
import { render } from '@testing-library/react';
import { wrapInTestApp } from '@backstage/test-utils';

describe('TechDocs Page Wrapper', () => {
  it('should render a TechDocs Page Wrapper', async () => {
    const { queryByText } = render(
      wrapInTestApp(
        <TechDocsPageWrapper title="test-title" subtitle="test-subtitle">
          Test
        </TechDocsPageWrapper>,
      ),
    );
    expect(queryByText(/test-title/i)).toBeInTheDocument();
    expect(queryByText(/test-subtitle/i)).toBeInTheDocument();
  });
});
