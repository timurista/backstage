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

import fs from 'fs-extra';
import { resolve as resolvePath } from 'path';
import { getVoidLogger } from '@backstage/backend-common';
import { injectEnvConfig } from './config';

jest.mock('fs-extra');

const fsMock = fs as jest.Mocked<typeof fs>;
const readFileMock = (fsMock.readFile as unknown) as jest.MockedFunction<
  (name: string) => Promise<string>
>;

const MOCK_DIR = 'mock-dir';

const baseOptions = {
  env: {},
  staticDir: MOCK_DIR,
  logger: getVoidLogger(),
};

describe('injectEnvConfig', () => {
  beforeEach(() => {
    fsMock.readdir.mockResolvedValue(['main.js']);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should not inject without config', async () => {
    await injectEnvConfig(baseOptions);
    expect(fsMock.readdir).toHaveBeenCalledTimes(0);
    expect(fsMock.readFile).toHaveBeenCalledTimes(0);
    expect(fsMock.writeFile).toHaveBeenCalledTimes(0);
  });

  it('should find the correct file to inject', async () => {
    fsMock.readdir.mockResolvedValue([
      'before.js',
      'not-js.txt',
      'main.js',
      'after.js',
    ]);
    readFileMock.mockImplementation(async (file: string) => {
      if (file.endsWith('main.js')) {
        return '"__APP_INJECTED_RUNTIME_CONFIG__"';
      }
      return 'NO_PLACEHOLDER_HERE';
    });

    await injectEnvConfig({ ...baseOptions, env: { APP_CONFIG_x: '0' } });
    expect(fsMock.readFile).toHaveBeenCalledTimes(2);
    expect(fsMock.readFile).toHaveBeenNthCalledWith(
      1,
      resolvePath(MOCK_DIR, 'before.js'),
      'utf8',
    );
    expect(fsMock.readFile).toHaveBeenNthCalledWith(
      2,
      resolvePath(MOCK_DIR, 'main.js'),
      'utf8',
    );

    expect(fsMock.writeFile).toHaveBeenCalledTimes(1);
    expect(fsMock.writeFile).toHaveBeenCalledWith(
      resolvePath(MOCK_DIR, 'main.js'),
      '/*__APP_INJECTED_CONFIG_MARKER__*/"{\\"x\\":0}"/*__INJECTED_END__*/',
      'utf8',
    );

    // eslint-disable-next-line no-eval
    expect(JSON.parse(eval(fsMock.writeFile.mock.calls[0][1]))).toEqual({
      x: 0,
    });
  });

  it('should re-inject config', async () => {
    fsMock.readdir.mockResolvedValue(['main.js']);
    readFileMock.mockResolvedValue(
      'JSON.parse("__APP_INJECTED_RUNTIME_CONFIG__")',
    );

    await injectEnvConfig({
      ...baseOptions,
      env: {
        APP_CONFIG_x: '0',
      },
    });

    expect(fsMock.writeFile).toHaveBeenCalledTimes(1);
    expect(fsMock.writeFile).toHaveBeenCalledWith(
      resolvePath(MOCK_DIR, 'main.js'),
      'JSON.parse(/*__APP_INJECTED_CONFIG_MARKER__*/"{\\"x\\":0}"/*__INJECTED_END__*/)',
      'utf8',
    );

    // eslint-disable-next-line no-eval
    expect(eval(fsMock.writeFile.mock.calls[0][1])).toEqual({ x: 0 });

    readFileMock.mockResolvedValue(fsMock.writeFile.mock.calls[0][1]);

    await injectEnvConfig({
      ...baseOptions,
      env: {
        APP_CONFIG_x: '1',
        APP_CONFIG_y: '2',
      },
    });

    expect(fsMock.writeFile).toHaveBeenCalledTimes(2);
    expect(fsMock.writeFile).toHaveBeenLastCalledWith(
      resolvePath(MOCK_DIR, 'main.js'),
      'JSON.parse(/*__APP_INJECTED_CONFIG_MARKER__*/"{\\"x\\":1,\\"y\\":2}"/*__INJECTED_END__*/)',
      'utf8',
    );

    // eslint-disable-next-line no-eval
    expect(eval(fsMock.writeFile.mock.calls[1][1])).toEqual({ x: 1, y: 2 });
  });
});
