import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './ExcangeRateTable.styled';

export default function ExcangeRateTable({ exchangeRateData }) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell align="center">Currency</TableCell>
            <TableCell align="center">Buy</TableCell>
            <TableCell align="center">Sell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exchangeRateData.map(rate => {
            return (
              <TableRow key={rate.currency}>
                <TableCell align="center" component="th" scope="row">
                  {rate.currency}
                </TableCell>
                <TableCell align="center">
                  {rate.purchaseRate?.toFixed(2)}
                </TableCell>
                <TableCell align="center">
                  {rate.saleRate?.toFixed(2)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
