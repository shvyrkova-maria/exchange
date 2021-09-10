import { useState, useEffect } from 'react';
import Container from '../Container/Contaiter';
import Title from '../Title/Title';
import ExcangeRateTable from '../ExcangeRateTable/ExcangeRateTable';
import Loader from '../Loader/Loader';
import { fetchExchage } from '../../services/exchangeApi';
import { Status } from '../../constants/requestStatus';

function App() {
  const [date, setDate] = useState('');
  const [exchangeRateData, setExchangeRateData] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const dateNow = new Date().toLocaleDateString();
    const dateNow = new Date().toLocaleDateString('UA');
    setDate(dateNow);
    setStatus(Status.PENDING);
    async function fetchTodayExchage() {
      try {
        const { exchangeRate } = await fetchExchage(dateNow);
        setExchangeRateData(exchangeRate);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error.message);
        setStatus(Status.REJECTED);
      }
    }
    fetchTodayExchage();
  }, []);

  return (
    <Container>
      {status === Status.IDLE && <></>}
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED && (
        <>
          <Title text={`Exchange rates ${date}`} />
          <ExcangeRateTable exchangeRateData={exchangeRateData} />
        </>
      )}
      {status === Status.REJECTED && <Title text={`Error: ${error}`} />}
    </Container>
  );
}

export default App;
