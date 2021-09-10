import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './ExcangeRateTable.styles';

export default function ExcangeRateTable({ exchangeRateData }) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow className={classes.head}>
            <TableCell align="center">Currency</TableCell>
            <TableCell align="center">Buy</TableCell>
            <TableCell align="center">Sell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exchangeRateData.map(({ currency, purchaseRate, saleRate }) => {
            const isRatePB = purchaseRate || saleRate;
            return (
              isRatePB && (
                <TableRow key={currency}>
                  <TableCell align="center">{currency}</TableCell>
                  <TableCell align="center">
                    {purchaseRate?.toFixed(2)}
                  </TableCell>
                  <TableCell align="center">{saleRate?.toFixed(2)}</TableCell>
                </TableRow>
              )
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
