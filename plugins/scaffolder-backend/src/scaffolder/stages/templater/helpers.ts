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
import { Writable, PassThrough } from 'stream';
import Docker from 'dockerode';
import fs from 'fs';

export type RunDockerContainerOptions = {
  imageName: string;
  args: string[];
  logStream?: Writable;
  resultDir: string;
  templateDir: string;
  dockerClient: Docker;
};

/**
 *
 * @param options the options object
 * @param options.imageName the image to run
 * @param options.args the arguments to pass the container
 * @param options.logStream the log streamer to capture log messages
 * @param options.resultDir the /result path inside the container
 * @param options.templateDir the /template path inside the container
 * @param options.dockerClient the dockerClient to use
 */
export const runDockerContainer = async ({
  imageName,
  args,
  logStream = new PassThrough(),
  resultDir,
  templateDir,
  dockerClient,
}: RunDockerContainerOptions) => {
  const [{ Error: error, StatusCode: statusCode }] = await dockerClient.run(
    imageName,
    args,
    logStream,
    {
      Volumes: { '/result': {}, '/template': {} },
      HostConfig: {
        Binds: [
          // Need to use realpath here as Docker mounting does not like
          // symlinks for binding volumes
          `${await fs.promises.realpath(resultDir)}:/result`,
          `${await fs.promises.realpath(templateDir)}:/template`,
        ],
      },
    },
  );

  if (error) {
    throw new Error(
      `Docker failed to run with the following error message: ${error}`,
    );
  }

  if (statusCode !== 0) {
    throw new Error(
      `Docker container returned a non-zero exit code (${statusCode})`,
    );
  }

  return { error, statusCode };
};
