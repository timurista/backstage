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

import React, { ReactNode } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardHeaderProps,
  Divider,
  withStyles,
  makeStyles,
} from '@material-ui/core';
import classNames from 'classnames';
import { ErrorBoundary } from '../ErrorBoundary';
import { BottomLink, BottomLinkProps } from '../BottomLink';

const useStyles = makeStyles(theme => ({
  noPadding: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  header: {
    padding: theme.spacing(2, 2, 2, 2.5),
  },
  headerTitle: {
    fontWeight: 700,
  },
  headerSubheader: {
    paddingTop: theme.spacing(1),
  },
  headerAvatar: {},
  headerAction: {},
  headerContent: {},
}));

const CardActionsTopRight = withStyles(theme => ({
  root: {
    display: 'inline-block',
    padding: theme.spacing(8, 8, 0, 0),
    float: 'right',
  },
}))(CardActions);

const VARIANT_STYLES = {
  card: {
    flex: {
      display: 'flex',
      flexDirection: 'column',
    },
    fullHeight: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    height100: {
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100% - 10px)', // for pages without content header
      marginBottom: '10px',
    },
    contentheader: {
      height: 'calc(100% - 40px)', // for pages with content header
    },
    contentheadertabs: {
      height: 'calc(100% - 97px)', // for pages with content header and tabs (Tingle)
    },
    noShrink: {
      flexShrink: 0,
    },
    minheight300: {
      minHeight: 300,
      overflow: 'initial',
    },
  },
  cardContent: {
    fullHeight: {
      flex: 1,
    },
    height100: {
      flex: 1,
    },
    contentRow: {
      display: 'flex',
      flexDirection: 'row',
    },
  },
};

/**
 * InfoCard is used to display a paper-styled block on the screen, similar to a panel.
 *
 * You can custom style an InfoCard with the 'style' (outer container) and 'cardStyle' (inner container)
 * styles.
 *
 * The InfoCard serves as an error boundary. As a result, if you provide a 'slackChannel' property this
 * specifies the channel to display in the error component that is displayed if an error occurs
 * in any descendent components.
 *
 * By default the InfoCard has no custom layout of its children, but is treated as a block element. A
 * couple common variants are provided and can be specified via the variant property:
 *
 * Display the card full height suitable for DataGrid:
 *
 *   <InfoCard variant="height100">...</InfoCard>
 *
 * Variants can be combined in a whitespace delimited list like so:
 *
 *   <InfoCard variant="noShrink">...</InfoCard>
 */
type Props = {
  title?: ReactNode;
  subheader?: ReactNode;
  divider?: boolean;
  deepLink?: BottomLinkProps;
  slackChannel?: string;
  variant?: string;
  style?: object;
  cardStyle?: object;
  children?: ReactNode;
  headerStyle?: object;
  headerProps?: CardHeaderProps;
  actionsClassName?: string;
  actions?: ReactNode;
  cardClassName?: string;
  actionsTopRight?: ReactNode;
  className?: string;
  noPadding?: boolean;
};

export const InfoCard = ({
  title,
  subheader,
  divider,
  deepLink,
  slackChannel = '#backstage',
  variant,
  children,
  headerStyle,
  headerProps,
  actionsClassName,
  actions,
  cardClassName,
  actionsTopRight,
  className,
  noPadding,
}: Props): JSX.Element => {
  const classes = useStyles();

  /**
   * If variant is specified, we build up styles for that particular variant for both
   * the Card and the CardContent (since these need to be synced)
   */
  let calculatedStyle = {};
  let calculatedCardStyle = {};

  if (variant) {
    const variants = variant.split(/[\s]+/g);
    variants.forEach(name => {
      calculatedStyle = {
        ...calculatedStyle,
        ...VARIANT_STYLES.card[name as keyof typeof VARIANT_STYLES['card']],
      };
      calculatedCardStyle = {
        ...calculatedCardStyle,
        ...VARIANT_STYLES.cardContent[
          name as keyof typeof VARIANT_STYLES['cardContent']
        ],
      };
    });
  }

  return (
    <Card style={calculatedStyle} className={className}>
      <ErrorBoundary slackChannel={slackChannel}>
        {title && (
          <>
            <CardHeader
              classes={{
                root: classes.header,
                title: classes.headerTitle,
                subheader: classes.headerSubheader,
                avatar: classes.headerAvatar,
                action: classes.headerAction,
                content: classes.headerContent,
              }}
              title={title}
              subheader={subheader}
              style={{ display: 'inline-block', ...headerStyle }}
              {...headerProps}
            />
            <Divider />
          </>
        )}
        {actionsTopRight && (
          <CardActionsTopRight>{actionsTopRight}</CardActionsTopRight>
        )}
        {divider && <Divider />}
        <CardContent
          className={classNames(cardClassName, {
            [classes.noPadding]: noPadding,
          })}
          style={calculatedCardStyle}
        >
          {children}
        </CardContent>
        {actions && (
          <CardActions className={actionsClassName}>{actions}</CardActions>
        )}
        {deepLink && <BottomLink {...deepLink} />}
      </ErrorBoundary>
    </Card>
  );
};
