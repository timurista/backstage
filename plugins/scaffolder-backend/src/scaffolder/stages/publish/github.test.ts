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

jest.mock('@octokit/rest');
jest.mock('nodegit');

import { Octokit } from '@octokit/rest';
import * as NodeGit from 'nodegit';
import {
  OctokitResponse,
  ReposCreateInOrgResponseData,
  UsersGetByUsernameResponseData,
} from '@octokit/types';
import { GithubPublisher } from './github';

const { mockGithubClient } = require('@octokit/rest') as {
  mockGithubClient: {
    repos: jest.Mocked<Octokit['repos']>;
    users: jest.Mocked<Octokit['users']>;
  };
};

const {
  Repository,
  mockRepo,
  mockIndex,
  Signature,
  Remote,
  mockRemote,
  Cred,
} = require('nodegit') as {
  Repository: jest.Mocked<{ init: any }>;
  Signature: jest.Mocked<{ now: any }>;
  Cred: jest.Mocked<{ userpassPlaintextNew: any }>;
  Remote: jest.Mocked<{ create: any }>;

  mockIndex: jest.Mocked<NodeGit.Index>;
  mockRepo: jest.Mocked<NodeGit.Repository>;
  mockRemote: jest.Mocked<NodeGit.Remote>;
};

describe('GitHub Publisher', () => {
  const publisher = new GithubPublisher({ client: new Octokit() });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('publish: createRemoteInGithub', () => {
    it('should use octokit to create a repo in an organisation if the organisation property is set', async () => {
      mockGithubClient.repos.createInOrg.mockResolvedValue({
        data: {
          clone_url: 'mockclone',
        },
      } as OctokitResponse<ReposCreateInOrgResponseData>);
      mockGithubClient.users.getByUsername.mockResolvedValue({
        data: {
          type: 'Organization',
        },
      } as OctokitResponse<UsersGetByUsernameResponseData>);

      await publisher.publish({
        values: {
          storePath: 'blam/test',
          owner: 'bob',
        },
        directory: '/tmp/test',
      });

      expect(mockGithubClient.repos.createInOrg).toHaveBeenCalledWith({
        org: 'blam',
        name: 'test',
      });
    });

    it('should use octokit to create a repo in the authed user if the organisation property is not set', async () => {
      mockGithubClient.repos.createForAuthenticatedUser.mockResolvedValue({
        data: {
          clone_url: 'mockclone',
        },
      } as OctokitResponse<ReposCreateInOrgResponseData>);
      mockGithubClient.users.getByUsername.mockResolvedValue({
        data: {
          type: 'User',
        },
      } as OctokitResponse<UsersGetByUsernameResponseData>);

      await publisher.publish({
        values: {
          storePath: 'blam/test',
          owner: 'bob',
        },
        directory: '/tmp/test',
      });

      expect(
        mockGithubClient.repos.createForAuthenticatedUser,
      ).toHaveBeenCalledWith({
        name: 'test',
      });
    });
  });

  describe('publish: createGitDirectory', () => {
    const values = {
      isOrg: true,
      storePath: 'blam/test',
      owner: 'lols',
    };

    const mockDir = '/tmp/test/dir';

    mockGithubClient.repos.createInOrg.mockResolvedValue({
      data: {
        clone_url: 'mockclone',
      },
    } as OctokitResponse<ReposCreateInOrgResponseData>);
    mockGithubClient.users.getByUsername.mockResolvedValue({
      data: {
        type: 'Organization',
      },
    } as OctokitResponse<UsersGetByUsernameResponseData>);

    it('should call init on the repo with the directory', async () => {
      await publisher.publish({
        values,
        directory: mockDir,
      });

      expect(Repository.init).toHaveBeenCalledWith(mockDir, 0);
    });

    it('should call refresh index on the index and write the new files', async () => {
      await publisher.publish({
        values,
        directory: mockDir,
      });

      expect(mockRepo.refreshIndex).toHaveBeenCalled();
    });

    it('should call add all files and write', async () => {
      await publisher.publish({
        values,
        directory: mockDir,
      });

      expect(mockIndex.addAll).toHaveBeenCalled();
      expect(mockIndex.write).toHaveBeenCalled();
      expect(mockIndex.writeTree).toHaveBeenCalled();
    });

    it('should create a commit with on head with the right name and commiter', async () => {
      const mockSignature = { mockSignature: 'bloblly' };
      Signature.now.mockReturnValue(mockSignature);

      await publisher.publish({
        values,
        directory: mockDir,
      });

      expect(Signature.now).toHaveBeenCalledTimes(2);
      expect(Signature.now).toHaveBeenCalledWith(
        'Scaffolder',
        'scaffolder@backstage.io',
      );

      expect(mockRepo.createCommit).toHaveBeenCalledWith(
        'HEAD',
        mockSignature,
        mockSignature,
        'initial commit',
        'mockoid',
        [],
      );
    });

    it('creates a remote with the repo and remote', async () => {
      await publisher.publish({
        values,
        directory: mockDir,
      });

      expect(Remote.create).toHaveBeenCalledWith(
        mockRepo,
        'origin',
        'mockclone',
      );
    });

    it('shoud push to the remote repo', async () => {
      await publisher.publish({
        values,
        directory: mockDir,
      });

      const [remotes, { callbacks }] = mockRemote.push.mock
        .calls[0] as NodeGit.PushOptions[];

      expect(remotes).toEqual(['refs/heads/master:refs/heads/master']);

      process.env.GITHUb_ACCESS_TOKEN = 'blob';

      callbacks?.credentials?.();

      expect(Cred.userpassPlaintextNew).toHaveBeenCalledWith(
        process.env.GITHUB_ACCESS_TOKEN,
        'x-oauth-basic',
      );
    });
  });
});
