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

import React, { useContext, useEffect } from 'react';
import Collapse from '@material-ui/core/Collapse';
import Star from '@material-ui/icons/Star';
import SignOutIcon from '@material-ui/icons/MeetingRoom';
import { SidebarContext } from './config';
import {
  googleAuthApiRef,
  githubAuthApiRef,
  identityApiRef,
  useApi,
} from '@backstage/core-api';
import {
  OAuthProviderSettings,
  OIDCProviderSettings,
  UserProfile as SidebarUserProfile,
} from './Settings';
import { SidebarItem } from './Items';

export function SidebarUserSettings() {
  const { isOpen: sidebarOpen } = useContext(SidebarContext);
  const [open, setOpen] = React.useState(false);
  const identityApi = useApi(identityApiRef);

  // Close the provider list when sidebar collapse
  useEffect(() => {
    if (!sidebarOpen && open) setOpen(false);
  }, [open, sidebarOpen]);

  return (
    <>
      <SidebarUserProfile open={open} setOpen={setOpen} />
      <Collapse in={open} timeout="auto">
        <OIDCProviderSettings
          title="Google"
          apiRef={googleAuthApiRef}
          icon={Star}
        />
        <OAuthProviderSettings
          title="Github"
          apiRef={githubAuthApiRef}
          icon={Star}
        />
        <SidebarItem
          icon={SignOutIcon}
          text="Sign Out"
          onClick={() => identityApi.logout()}
        />
      </Collapse>
    </>
  );
}
