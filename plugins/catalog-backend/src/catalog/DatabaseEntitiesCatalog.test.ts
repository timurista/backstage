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

import type { Entity } from '@backstage/catalog-model';
import type { Database } from '../database';
import { DatabaseEntitiesCatalog } from './DatabaseEntitiesCatalog';

describe('DatabaseEntitiesCatalog', () => {
  let db: jest.Mocked<Database>;

  beforeAll(() => {
    db = {
      transaction: jest.fn(),
      addEntity: jest.fn(),
      updateEntity: jest.fn(),
      entities: jest.fn(),
      entity: jest.fn(),
      entityByUid: jest.fn(),
      removeEntity: jest.fn(),
      addLocation: jest.fn(),
      removeLocation: jest.fn(),
      location: jest.fn(),
      locations: jest.fn(),
      locationHistory: jest.fn(),
      addLocationUpdateLogEvent: jest.fn(),
    };
  });

  beforeEach(() => {
    jest.resetAllMocks();
    db.transaction.mockImplementation(async f => f('tx'));
  });

  describe('addOrUpdateEntity', () => {
    it('adds when no given uid and no matching by name', async () => {
      const entity: Entity = {
        apiVersion: 'a',
        kind: 'b',
        metadata: {
          name: 'c',
          namespace: 'd',
        },
      };

      db.entities.mockResolvedValue([]);
      db.addEntity.mockResolvedValue({ entity });

      const catalog = new DatabaseEntitiesCatalog(db);
      const result = await catalog.addOrUpdateEntity(entity);

      expect(db.entities).toHaveBeenCalledTimes(1);
      expect(db.entities).toHaveBeenCalledWith(expect.anything(), [
        { key: 'kind', values: ['b'] },
        { key: 'name', values: ['c'] },
        { key: 'namespace', values: ['d'] },
      ]);
      expect(db.addEntity).toHaveBeenCalledTimes(1);
      expect(result).toBe(entity);
    });

    it('updates when given uid', async () => {
      const entity: Entity = {
        apiVersion: 'a',
        kind: 'b',
        metadata: {
          uid: 'u',
          name: 'c',
          namespace: 'd',
        },
      };

      db.entityByUid.mockResolvedValue({
        entity: {
          apiVersion: 'a',
          kind: 'b',
          metadata: {
            uid: 'u',
            etag: 'e',
            generation: 1,
            name: 'c',
            namespace: 'd',
          },
        },
      });
      db.updateEntity.mockResolvedValue({ entity });

      const catalog = new DatabaseEntitiesCatalog(db);
      const result = await catalog.addOrUpdateEntity(entity);

      expect(db.entities).toHaveBeenCalledTimes(0);
      expect(db.entityByUid).toHaveBeenCalledTimes(1);
      expect(db.entityByUid).toHaveBeenCalledWith(expect.anything(), 'u');
      expect(db.updateEntity).toHaveBeenCalledTimes(1);
      expect(db.updateEntity).toHaveBeenCalledWith(
        expect.anything(),
        {
          entity: {
            apiVersion: 'a',
            kind: 'b',
            metadata: {
              uid: 'u',
              etag: 'e',
              generation: 1,
              name: 'c',
              namespace: 'd',
            },
          },
        },
        'e',
        1,
      );
      expect(result).toBe(entity);
    });

    it('update when no given uid and matching by name', async () => {
      const added: Entity = {
        apiVersion: 'a',
        kind: 'b',
        metadata: {
          name: 'c',
          namespace: 'd',
        },
      };
      const existing: Entity = {
        apiVersion: 'a',
        kind: 'b',
        metadata: {
          uid: 'u',
          etag: 'e',
          generation: 1,
          name: 'c',
          namespace: 'd',
        },
      };

      db.entities.mockResolvedValue([{ entity: existing }]);
      db.updateEntity.mockResolvedValue({ entity: existing });

      const catalog = new DatabaseEntitiesCatalog(db);
      const result = await catalog.addOrUpdateEntity(added);

      expect(db.entities).toHaveBeenCalledTimes(1);
      expect(db.entities).toHaveBeenCalledWith(expect.anything(), [
        { key: 'kind', values: ['b'] },
        { key: 'name', values: ['c'] },
        { key: 'namespace', values: ['d'] },
      ]);
      expect(db.updateEntity).toHaveBeenCalledTimes(1);
      expect(db.updateEntity).toHaveBeenCalledWith(
        expect.anything(),
        {
          entity: {
            apiVersion: 'a',
            kind: 'b',
            metadata: {
              uid: 'u',
              etag: 'e',
              generation: 1,
              name: 'c',
              namespace: 'd',
            },
          },
        },
        'e',
        1,
      );
      expect(result).toEqual(existing);
    });
  });
});
