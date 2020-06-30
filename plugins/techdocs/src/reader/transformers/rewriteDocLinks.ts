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

import URLParser from '../urlParser';
import type { Transformer } from './index';

export const rewriteDocLinks = (): Transformer => {
  return dom => {
    const updateDom = <T extends Element>(
      list: Array<T>,
      attributeName: string,
    ): void => {
      Array.from(list)
        .filter(elem => elem.hasAttribute(attributeName))
        .forEach((elem: T) => {
          elem.setAttribute(
            attributeName,
            new URLParser(
              window.location.href,
              elem.getAttribute(attributeName)!,
            ).parse(),
          );
        });
    };

    updateDom(Array.from(dom.getElementsByTagName('a')), 'href');

    return dom;
  };
};
