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
import { render, fireEvent } from '@testing-library/react';
import { wrapInTestApp } from '@backstage/test-utils';
import { CatalogFilter, CatalogFilterGroup } from './CatalogFilter';
import { EntityFilterType } from '../../data/filters';

describe('Catalog Filter', () => {
  it('should render the different groups', async () => {
    const mockGroups: CatalogFilterGroup[] = [
      { name: 'Test Group 1', items: [] },
      { name: 'Test Group 2', items: [] },
    ];
    const { findByText } = render(
      wrapInTestApp(<CatalogFilter groups={mockGroups} />),
    );

    for (const group of mockGroups) {
      expect(await findByText(group.name)).toBeInTheDocument();
    }
  });

  it('should render the different items and their names', async () => {
    const mockGroups: CatalogFilterGroup[] = [
      {
        name: 'Test Group 1',
        items: [
          {
            id: EntityFilterType.ALL,
            label: 'First Label',
          },
          {
            id: EntityFilterType.STARRED,
            label: 'Second Label',
          },
        ],
      },
    ];

    const { findByText } = render(
      wrapInTestApp(<CatalogFilter groups={mockGroups} />),
    );

    const [group] = mockGroups;
    for (const item of group.items) {
      expect(await findByText(item.label)).toBeInTheDocument();
    }
  });

  it('should render the count in each item', async () => {
    const mockGroups: CatalogFilterGroup[] = [
      {
        name: 'Test Group 1',
        items: [
          {
            id: EntityFilterType.ALL,
            label: 'First Label',
            count: 100,
          },
          {
            id: EntityFilterType.STARRED,
            label: 'Second Label',
            count: 400,
          },
        ],
      },
    ];

    const { findByText } = render(
      wrapInTestApp(<CatalogFilter groups={mockGroups} />),
    );

    const [group] = mockGroups;
    for (const item of group.items) {
      expect(await findByText(item.count!.toString())).toBeInTheDocument();
    }
  });

  it('should fire the callback when an item is clicked', async () => {
    const mockGroups: CatalogFilterGroup[] = [
      {
        name: 'Test Group 1',
        items: [
          {
            id: EntityFilterType.ALL,
            label: 'First Label',
            count: 100,
          },
          {
            id: EntityFilterType.STARRED,
            label: 'Second Label',
            count: 400,
          },
        ],
      },
    ];

    const onSelectedChangeHandler = jest.fn();

    const { findByText } = render(
      wrapInTestApp(
        <CatalogFilter
          groups={mockGroups}
          onSelectedChange={onSelectedChangeHandler}
        />,
      ),
    );

    const item = mockGroups[0].items[0];

    const element = await findByText(item.label);

    fireEvent.click(element);

    expect(onSelectedChangeHandler).toHaveBeenCalledWith(item);
  });

  it('should render a component when a function is passed to the count component', async () => {
    const mockGroups: CatalogFilterGroup[] = [
      {
        name: 'Test Group 1',
        items: [
          {
            id: EntityFilterType.ALL,
            label: 'First Label',
            count: () => <b>BACKSTAGE!</b>,
          },
          {
            id: EntityFilterType.STARRED,
            label: 'Second Label',
            count: 400,
          },
        ],
      },
    ];
    const { findByText } = render(
      wrapInTestApp(<CatalogFilter groups={mockGroups} />),
    );

    expect(await findByText('BACKSTAGE!')).toBeInTheDocument();
  });
});
