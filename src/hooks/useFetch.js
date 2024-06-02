import { useEffect, useState } from 'react';

function useFetch({ initialValue, fetchFn }) {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      await fetchFn()
        .then((response) => setData(response))
        .catch((response) => setError(response));
      setIsLoading(false);
    })();
  }, [fetchFn]);

  return {
    data,
    setData,
    isLoading,
    error,
  };
}

export default useFetch;
