// Basic Table is as per its name a very basic table.
// Do not use this table to implement user interactive elements such as filter and sorting
// It will not work as currently the key for each cell is generated in party by index of the cell in the array and
// not a true unique ID. Once we start to dynamically change the array. This will fail.

import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TableContent from './TableSerializer';

import Illustration from './Illustration';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  table: {
    tableLayout: 'fixed',
    minWidth: 700,
  },
  row: {
    verticalAlign: 'top',
  },
}));

function SmartTable({ smartTable }) {
  const classes = useStyles();
  const { colHeading, rowHeading, title, colgroup } = smartTable;

  let thead = [];
  let tbody = smartTable.table.rows;

  if (colHeading) {
    thead = smartTable.table.rows[0]; // eslint-disable-line
    tbody = smartTable.table.rows.slice(1);
  }

  return (
    <Box mx="40px" my={2}>
      <TableContainer component={Paper} className={classes.root}>
        <Table className={classes.table} size="small" aria-label={title}>
          {colgroup && (
            <colgroup>
              {colgroup.map((col) =>
                col.width !== 0 ? <col span="1" width={col.width} /> : <col />,
              )}
            </colgroup>
          )}

          {colHeading && (
            <TableHead>
              <TableRow key={thead._key}>
                {thead.cells.map((cell, index) => {
                  if (cell._type === 'tableBlock') {
                    return (
                      // eslint-disable-next-line
                  <TableCell key={`${thead._key}-${index}`}>
                        <TableContent blocks={cell.copy} />
                      </TableCell>
                    );
                  }
                  if (cell._type === 'illustration') {
                    return (
                      // eslint-disable-next-line
                  <TableCell key={`${thead._key}-${index}`} style={{ verticalAlign: 'top' }}>
                        <Illustration illustration={cell} table />
                      </TableCell>
                    );
                  }
                  return <TableCell>Uh oh something went wrong.</TableCell>;
                })}
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {tbody.map((row) => (
              <TableRow key={row._key} className={classes.row}>
                {row.cells.map((cell, index) => {
                  if (rowHeading && index === 0) {
                    if (cell._type === 'tableBlock') {
                      return (
                        // eslint-disable-next-line
                      <TableCell className="MuiTableCell-head" component="th" key={`${row._key}-${index}`} style={{ verticalAlign: 'top' }}>
                          <TableContent blocks={cell.copy} />
                        </TableCell>
                      );
                    }
                    if (cell._type === 'illustration') {
                      return (
                        // eslint-disable-next-line
                      <TableCell component="th" key={`${row._key}-${index}`} style={{ verticalAlign: 'top' }}>
                          <Illustration illustration={cell} />
                        </TableCell>
                      );
                    }
                    return <TableCell component="th">oh oh something is wrong</TableCell>;
                  }
                  if (cell._type === 'tableBlock') {
                    return (
                      // eslint-disable-next-line
                    <TableCell key={`${row._key}-${index}`} style={{ verticalAlign: 'top' }}>
                        <TableContent blocks={cell.copy} />
                      </TableCell>
                    );
                  }
                  if (cell._type === 'illustration') {
                    return (
                      // eslint-disable-next-line
                    <TableCell key={`${row._key}-${index}`} style={{ verticalAlign: 'top' }}>
                        <Illustration illustration={cell} table />
                      </TableCell>
                    );
                  }
                  return <TableCell>oh oh something is wrong</TableCell>;
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default SmartTable;
