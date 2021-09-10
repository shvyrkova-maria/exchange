import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles({
  container: {
    maxWidth: 700,
  },
  table: {
    minWidth: 500,
  },
  head: {
    textTransform: 'uppercase',
    backgroundColor: '#26a69a',

    '& th': {
      fontWeight: 700,
      color: 'white',
    },
  },
});
