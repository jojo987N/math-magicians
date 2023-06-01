import { useEffect, useState } from 'react';
import './quote.css';
import URL_BASE, { API_KEY } from '../../global';

export default function Quote() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${URL_BASE}=happiness`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': API_KEY,
          },
        });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }

      setIsLoading(false);
    })();
  }, [setData]);

  return (hasError && <div>Error! Try again</div>) || (isLoading ? <div className="loading">Loading...</div> : <blockquote>{`${data[0].quote} –${data[0].author}`}</blockquote>);
}
