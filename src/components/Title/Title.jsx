import { useStyles } from './Title.styles';
export default function Title({ text }) {
  const classes = useStyles();
  return <h1 className={classes.title}>{text}</h1>;
}
