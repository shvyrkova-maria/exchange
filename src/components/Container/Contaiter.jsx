import Container from '@material-ui/core/Container';
import { useStyles } from './Container.styles';

export default function Contaiter({ children }) {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      {children}
    </Container>
  );
}
