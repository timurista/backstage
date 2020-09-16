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

import knex from 'knex';
import { Config } from '@backstage/config';
import { mergeDatabaseConfig } from './config';
import { createPgDatabaseClient } from './postgres';
import { createSqliteDatabaseClient } from './sqlite3';

type DatabaseClient = 'pg' | 'sqlite3' | string;

/**
 * Creates a knex database connection
 *
 * @param dbConfig The database config
 * @param overrides Additional options to merge with the config
 */
export function createDatabaseClient(
  dbConfig: Config,
  overrides?: Partial<knex.Config>,
) {
  const client: DatabaseClient = dbConfig.getString('client');

  if (client === 'pg') {
    return createPgDatabaseClient(dbConfig, overrides);
  } else if (client === 'sqlite3') {
    return createSqliteDatabaseClient(dbConfig);
  }

  return knex(mergeDatabaseConfig(dbConfig.get(), overrides));
}

/**
 * Alias for createDatabaseClient
 * @deprecated Use createDatabaseClient instead
 */
export const createDatabase = createDatabaseClient;
