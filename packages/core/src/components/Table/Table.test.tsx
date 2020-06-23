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

import React from 'react';
import { render } from '@testing-library/react';
import { wrapInTestApp } from '@backstage/test-utils';
import { Table } from './Table';

const minProps = {
  columns: [
    {
      title: 'Column 1',
      field: 'col1',
    },
    {
      title: 'Column 2',
      field: 'col2',
    },
  ],
  data: [
    {
      col1: 'first value, first row',
      col2: 'second value, first row',
    },
    {
      col1: 'first value, second row',
      col2: 'second value, second row',
    },
  ],
};

describe('<Table />', () => {
  it('renders without exploding', () => {
    const rendered = render(wrapInTestApp(<Table {...minProps} />));
    expect(rendered.getByText('second value, second row')).toBeInTheDocument();
  });

  it('renders with subtitle', () => {
    const rendered = render(
      wrapInTestApp(<Table subtitle="subtitle" {...minProps} />),
    );
    expect(rendered.getByText('subtitle')).toBeInTheDocument();
  });
});
