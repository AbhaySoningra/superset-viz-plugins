/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { FC } from 'react';
import { t } from '@superset-ui/core';
import { Grid, GridItem } from './Layout';
import { ROW_HEIGHT } from '../plugin/utils';

export type TotalColumnProps = {
  columns: string[];
  rowsTotal: string[];
  rowsFillData: boolean[];
  total: string;
  showTotalAll: boolean;
};

const TotalColumn: FC<TotalColumnProps> = ({ columns, rowsFillData, rowsTotal, total, showTotalAll }) => (
  <Grid
    gridTemplateColumns="max-content"
    gridTemplateRows={`repeat(${columns.length + 2}, ${ROW_HEIGHT}) ${rowsFillData
      .map(fillData => `${fillData ? ROW_HEIGHT : 0}`)
      .join(' ')}`}
  >
    <GridItem header bordered bgLevel={2} gridRow={`span ${columns.length + 2}`}>
      {t('Total')}
    </GridItem>
    {rowsTotal.map((rowTotal, index) => (
      // eslint-disable-next-line react/jsx-key
      <GridItem bordered bgLevel={2} hidden={!rowsFillData[index]}>
        {rowTotal}
      </GridItem>
    ))}
    {showTotalAll && (
      <GridItem bordered bgLevel={2}>
        {total}
      </GridItem>
    )}
  </Grid>
);

export default TotalColumn;
