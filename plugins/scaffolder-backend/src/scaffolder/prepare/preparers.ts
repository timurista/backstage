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

import { PreparerBase, RemoteProtocol, PreparerBuilder } from './types';
import { TemplateEntityV1alpha1 } from '@backstage/catalog-model';
import { parseLocationAnnotation } from './helpers';

export class Preparers implements PreparerBuilder {
  private preparerMap = new Map<RemoteProtocol, PreparerBase>();

  register(protocol: RemoteProtocol, preparer: PreparerBase) {
    this.preparerMap.set(protocol, preparer);
  }

  get(template: TemplateEntityV1alpha1): PreparerBase {
    const { protocol } = parseLocationAnnotation(template);
    const preparer = this.preparerMap.get(protocol);

    if (!preparer) {
      throw new Error(`No preparer registered for type: "${protocol}"`);
    }

    return preparer;
  }
}
