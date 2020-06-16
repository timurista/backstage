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
import lodash from 'lodash';
import type { EntitiesCatalog } from './types';

export class StaticEntitiesCatalog implements EntitiesCatalog {
  private _entities: Entity[];

  constructor(entities: Entity[]) {
    this._entities = entities;
  }

  async entities(): Promise<Entity[]> {
    return lodash.cloneDeep(this._entities);
  }

  async entityByUid(uid: string): Promise<Entity | undefined> {
    const item = this._entities.find(e => uid === e.metadata.uid);
    return item ? lodash.cloneDeep(item) : undefined;
  }

  async entityByName(
    kind: string,
    name: string,
    namespace: string | undefined,
  ): Promise<Entity | undefined> {
    const item = this._entities.find(
      e =>
        kind === e.kind &&
        name === e.metadata.name &&
        namespace === e.metadata.namespace,
    );
    return item ? lodash.cloneDeep(item) : undefined;
  }

  async addOrUpdateEntity(): Promise<Entity> {
    throw new Error('Not supported');
  }

  async removeEntityByUid(): Promise<void> {
    throw new Error('Not supported');
  }
}
