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
  Entity,
  Location,
  LOCATION_ANNOTATION,
} from '@backstage/catalog-model';
import { CatalogApi, EntityCompoundName } from './types';

export class CatalogClient implements CatalogApi {
  private apiOrigin: string;
  private basePath: string;

  constructor({
    apiOrigin,
    basePath,
  }: {
    apiOrigin: string;
    basePath: string;
  }) {
    this.apiOrigin = apiOrigin;
    this.basePath = basePath;
  }

  private async getRequired(path: string): Promise<any> {
    const url = `${this.apiOrigin}${this.basePath}${path}`;
    const response = await fetch(url);

    if (!response.ok) {
      const payload = await response.text();
      const message = `Request failed with ${response.status} ${response.statusText}, ${payload}`;
      throw new Error(message);
    }

    return await response.json();
  }

  private async getOptional(path: string): Promise<any | undefined> {
    const url = `${this.apiOrigin}${this.basePath}${path}`;
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        return undefined;
      }

      const payload = await response.text();
      const message = `Request failed with ${response.status} ${response.statusText}, ${payload}`;
      throw new Error(message);
    }

    return await response.json();
  }

  async getLocationById(id: String): Promise<Location | undefined> {
    return await this.getOptional(`/locations/${id}`);
  }

  async getEntities(
    filter?: Record<string, string | string[]>,
  ): Promise<Entity[]> {
    let path = `/entities`;
    if (filter) {
      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(filter)) {
        if (Array.isArray(value)) {
          for (const v of value) {
            params.append(key, v);
          }
        } else {
          params.append(key, value);
        }
      }
      path += `?${params.toString()}`;
    }

    return await this.getRequired(path);
  }

  async getEntityByName(
    compoundName: EntityCompoundName,
  ): Promise<Entity | undefined> {
    const { kind, namespace = 'default', name } = compoundName;
    return this.getOptional(`/entities/by-name/${kind}/${namespace}/${name}`);
  }

  async addLocation(type: string, target: string) {
    const response = await fetch(
      `${this.apiOrigin}${this.basePath}/locations`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ type, target }),
      },
    );

    if (response.status !== 201) {
      throw new Error(await response.text());
    }

    const { location, entities } = await response.json();

    if (!location || entities.length === 0)
      throw new Error(`Location wasn't added: ${target}`);

    return {
      location,
      entities,
    };
  }

  async getLocationByEntity(entity: Entity): Promise<Location | undefined> {
    const locationCompound = entity.metadata.annotations?.[LOCATION_ANNOTATION];
    const all: { data: Location }[] = await this.getRequired('/locations');
    return all
      .map(r => r.data)
      .find(l => locationCompound === `${l.type}:${l.target}`);
  }

  async removeEntityByUid(uid: string): Promise<void> {
    const response = await fetch(
      `${this.apiOrigin}${this.basePath}/entities/by-uid/${uid}`,
      {
        method: 'DELETE',
      },
    );
    if (!response.ok) {
      const payload = await response.text();
      throw new Error(
        `Request failed with ${response.status} ${response.statusText}, ${payload}`,
      );
    }
    return undefined;
  }
}
