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
import { Grid } from '@material-ui/core';
import {
  Content,
  ContentHeader,
  Page,
  Header,
  HeaderLabel,
  SupportButton,
  pageTheme,
  useApi,
} from '@backstage/core';
import RadarComponent from '../components/RadarComponent';
import { techRadarApiRef, TechRadarApi } from '../api';

const RadarPage: FC<{}> = () => {
  const techRadarApi = useApi<TechRadarApi>(techRadarApiRef);

  return (
    <Page theme={pageTheme.tool}>
      <Header title={techRadarApi.title} subtitle={techRadarApi.subtitle}>
        <HeaderLabel label="Owner" value="Spotify" />
        <HeaderLabel label="Lifecycle" value="Beta" />
      </Header>
      <Content>
        <ContentHeader title={techRadarApi.pageTitle}>
          <SupportButton>
            This is used for visualizing the official guidelines of different
            areas of software development such as languages, frameworks,
            infrastructure and processes.
          </SupportButton>
        </ContentHeader>
        <Grid container spacing={3} direction="row">
          <Grid item xs={12} sm={6} md={4}>
            <RadarComponent {...techRadarApi} />
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};

export default RadarPage;
