import { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import ExcangeRateTable from './components/ExcangeRateTable/ExcangeRateTable';
import { useStyles } from './App.styled';
import { fetchExchage } from './services/exchangeApi';
import { Status } from './constants/requestStatus';

function App() {
  const classes = useStyles();
  const [date, setDate] = useState('');
  const [exchangeRateData, setExchangeRateData] = useState([]);
  const [status, setStatus] = useState(Status.RESOLVED);
  const [error, setError] = useState(null);

  useEffect(() => {
    const now = new Date().toLocaleDateString();
    setDate(now);
    setStatus(Status.PENDING);
    async function fetchTodayExchage() {
      try {
        const { exchangeRate } = await fetchExchage(now);
        setExchangeRateData(exchangeRate);
        setStatus(Status.RESOLVED);
      } catch (err) {
        setError(err.message);
        setStatus(Status.REJECTED);
      }
    }
    fetchTodayExchage();
  }, []);

  return (
    <Container maxWidth="lg" className={classes.container}>
      {status === Status.PENDING && <div>Loading...</div>}
      {status === Status.RESOLVED && (
        <>
          <h1 className={classes.title}>{`Exchange rates ${date}`}</h1>
          <ExcangeRateTable exchangeRateData={exchangeRateData} />
        </>
      )}
      {status === Status.REJECTED && <h1>{`Error: ${error}`}</h1>}
    </Container>
  );
}

export default App;
