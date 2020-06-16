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

import React, { FC, useContext, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { Link, Typography, makeStyles, Collapse } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { BackstageTheme } from '@backstage/theme';
import {
  SIDEBAR_INTRO_LOCAL_STORAGE,
  SidebarContext,
  sidebarConfig,
} from './config';
import { SidebarDivider } from './Items';

const useStyles = makeStyles<BackstageTheme>(theme => ({
  introCard: {
    color: '#b5b5b5',
    // XXX (@koroeskohr): should I be using a Mui theme variable?
    fontSize: 12,
    width: sidebarConfig.drawerWidthOpen,
    marginTop: 18,
    marginBottom: 12,
    paddingLeft: sidebarConfig.iconPadding,
    paddingRight: sidebarConfig.iconPadding,
  },
  introDismiss: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 12,
  },
  introDismissLink: {
    color: '#dddddd',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 4,
    '&:hover': {
      color: theme.palette.linkHover,
      transition: theme.transitions.create('color', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.shortest,
      }),
    },
  },
  introDismissText: {
    fontSize: '0.7rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  introDismissIcon: {
    width: 18,
    height: 18,
    marginRight: 12,
  },
}));

type IntroCardProps = {
  text: string;
  onClose: () => void;
};

export const IntroCard: FC<IntroCardProps> = props => {
  const classes = useStyles();
  const { text, onClose } = props;
  const handleClose = () => onClose();

  return (
    <div className={classes.introCard}>
      <Typography variant="subtitle2">{text}</Typography>
      <div className={classes.introDismiss}>
        <Link
          component="button"
          onClick={handleClose}
          underline="none"
          className={classes.introDismissLink}
        >
          <CloseIcon className={classes.introDismissIcon} />
          <Typography component="span" className={classes.introDismissText}>
            Dismiss
          </Typography>
        </Link>
      </div>
    </div>
  );
};

type SidebarIntroLocalStorage = {
  starredItemsDismissed: boolean;
  recentlyViewedItemsDismissed: boolean;
};

type SidebarIntroCardProps = {
  text: string;
  onDismiss: () => void;
};

const SidebarIntroCard: FC<SidebarIntroCardProps> = props => {
  const { text, onDismiss } = props;
  const [collapsing, setCollapsing] = useState(false);
  const startDismissing = () => {
    setCollapsing(true);
  };
  return (
    <Collapse in={!collapsing} onExited={onDismiss}>
      <IntroCard text={text} onClose={startDismissing} />
    </Collapse>
  );
};

const starredIntroText = `Fun fact! As you explore all the awesome plugins in Backstage, you can actually pin them to this side nav.
Keep an eye out for the little star icon (⭐) next to the plugin name and give it a click!`;
const recentlyViewedIntroText =
  'And your recently viewed plugins will pop up here!';

export const SidebarIntro: FC = () => {
  const { isOpen } = useContext(SidebarContext);
  const [
    { starredItemsDismissed, recentlyViewedItemsDismissed },
    setDismissedIntro,
  ] = useLocalStorage<SidebarIntroLocalStorage>(SIDEBAR_INTRO_LOCAL_STORAGE, {
    starredItemsDismissed: false,
    recentlyViewedItemsDismissed: false,
  });

  const dismissStarred = () => {
    setDismissedIntro(state => ({ ...state, starredItemsDismissed: true }));
  };
  const dismissRecentlyViewed = () => {
    setDismissedIntro(state => ({
      ...state,
      recentlyViewedItemsDismissed: true,
    }));
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {!starredItemsDismissed && (
        <>
          <SidebarIntroCard
            text={starredIntroText}
            onDismiss={dismissStarred}
          />
          <SidebarDivider />
        </>
      )}
      {!recentlyViewedItemsDismissed && (
        <SidebarIntroCard
          text={recentlyViewedIntroText}
          onDismiss={dismissRecentlyViewed}
        />
      )}
    </>
  );
};
