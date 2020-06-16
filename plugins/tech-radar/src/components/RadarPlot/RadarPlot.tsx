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
import { Quadrant, Ring, Entry } from '../../utils/types';

import RadarGrid from '../RadarGrid';
import RadarEntry from '../RadarEntry';
import RadarBubble from '../RadarBubble';
import RadarFooter from '../RadarFooter';
import RadarLegend from '../RadarLegend';

type Props = {
  width: number;
  height: number;
  radius: number;
  rings: Ring[];
  quadrants: Quadrant[];
  entries: Entry[];
  activeEntry?: Entry;
  onEntryMouseEnter?: (entry: Entry) => void;
  onEntryMouseLeave?: (entry: Entry) => void;
};

// A component that draws the radar circle.
const RadarPlot: FC<Props> = props => {
  const {
    width,
    height,
    radius,
    quadrants,
    rings,
    entries,
    activeEntry,
    onEntryMouseEnter,
    onEntryMouseLeave,
  } = props;

  return (
    <g>
      <RadarLegend
        quadrants={quadrants}
        rings={rings}
        entries={entries}
        onEntryMouseEnter={
          onEntryMouseEnter && (entry => onEntryMouseEnter(entry))
        }
        onEntryMouseLeave={
          onEntryMouseLeave && (entry => onEntryMouseLeave(entry))
        }
      />
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        <RadarGrid radius={radius} rings={rings} />
        <RadarFooter x={-0.5 * width} y={0.5 * height} />
        {entries.map(entry => (
          <RadarEntry
            key={entry.id}
            x={entry.x || 0}
            y={entry.y || 0}
            color={entry.color || ''}
            number={((entry && entry.idx) || 0) + 1}
            url={entry.url}
            moved={entry.moved}
            onMouseEnter={onEntryMouseEnter && (() => onEntryMouseEnter(entry))}
            onMouseLeave={onEntryMouseLeave && (() => onEntryMouseLeave(entry))}
          />
        ))}
        <RadarBubble
          visible={!!activeEntry}
          text={activeEntry ? activeEntry.title : ''}
          x={activeEntry ? activeEntry.x || 0 : 0}
          y={activeEntry ? activeEntry.y || 0 : 0}
        />
      </g>
    </g>
  );
};

export default RadarPlot;
