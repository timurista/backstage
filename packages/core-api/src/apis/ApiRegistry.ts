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

import { ApiRef } from './ApiRef';
import { ApiHolder } from './types';

type ApiImpl<T = unknown> = readonly [ApiRef<T>, T];

class ApiRegistryBuilder {
  private apis: ApiImpl[] = [];

  add<T, I extends T>(api: ApiRef<T>, impl: I): I {
    this.apis.push([api, impl]);
    return impl;
  }

  build(): ApiRegistry {
    // eslint-disable-next-line no-use-before-define
    return new ApiRegistry(new Map(this.apis));
  }
}

export class ApiRegistry implements ApiHolder {
  static builder() {
    return new ApiRegistryBuilder();
  }

  static from(apis: ApiImpl[]) {
    return new ApiRegistry(new Map(apis));
  }

  /**
   * Creates a new ApiRegistry with a single API implementation.
   *
   * @param api ApiRef for the API to add
   * @param impl Implementation of the API to add
   */
  static with<T>(api: ApiRef<T>, impl: T): ApiRegistry {
    return new ApiRegistry(new Map([[api, impl]]));
  }

  constructor(private readonly apis: Map<ApiRef<unknown>, unknown>) {}

  /**
   * Returns a new ApiRegistry with the provided API added to the existing ones.
   *
   * @param api ApiRef for the API to add
   * @param impl Implementation of the API to add
   */
  with<T>(api: ApiRef<T>, impl: T): ApiRegistry {
    return new ApiRegistry(new Map([...this.apis, [api, impl]]));
  }

  get<T>(api: ApiRef<T>): T | undefined {
    return this.apis.get(api) as T | undefined;
  }
}
