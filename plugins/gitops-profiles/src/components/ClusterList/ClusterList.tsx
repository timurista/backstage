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

import React, { FC } from 'react';
import {
  Content,
  ContentHeader,
  Header,
  SupportButton,
  Page,
  pageTheme,
  Progress,
  HeaderLabel,
  useApi,
} from '@backstage/core';

import ClusterTable from '../ClusterTable/ClusterTable';
import { Button } from '@material-ui/core';
import { useAsync, useLocalStorage } from 'react-use';
import { gitOpsApiRef, ListClusterStatusesResponse } from '../../api';
import { Alert } from '@material-ui/lab';

const ClusterList: FC<{}> = () => {
  const [loginInfo] = useLocalStorage<{
    token: string;
    username: string;
    name: string;
  }>('githubLoginDetails', {
    token: '',
    username: '',
    name: 'Guest',
  });

  const api = useApi(gitOpsApiRef);

  const { loading, error, value } = useAsync<ListClusterStatusesResponse>(
    () => {
      return api.listClusters({
        gitHubToken: loginInfo.token,
        gitHubUser: loginInfo.username,
      });
    },
  );
  let content: JSX.Element;
  if (loading) {
    content = (
      <Content>
        <Progress />
      </Content>
    );
  } else if (error) {
    content = (
      <Content>
        <div>
          <Alert severity="error">
            Error encountered while fetching list of GitOps-managed cluster.{' '}
            {error.toString()}
          </Alert>
          <Alert severity="info">
            Please make sure that you start GitOps-API backend on localhost port
            3008 before using this plugin.
          </Alert>
          <Alert severity="info">
            If you're Guest, please login via GitHub first.
          </Alert>
        </div>
      </Content>
    );
  } else {
    content = (
      <Content>
        <ContentHeader title="Clusters">
          <Button
            variant="contained"
            color="primary"
            href="/gitops-cluster-create"
          >
            Create GitOps-managed Cluster
          </Button>
          <SupportButton>All clusters</SupportButton>
        </ContentHeader>
        <ClusterTable components={value!.result} />
      </Content>
    );
  }

  return (
    <Page theme={pageTheme.home}>
      <Header title="GitOps-managed Clusters">
        <HeaderLabel label="Welcome" value={loginInfo.name} />
      </Header>
      {content}
    </Page>
  );
};

export default ClusterList;
