import { useState, useEffect, useCallback } from 'react';

// The callback must be paramless
export default function useAsync<AsyncReturnType>(
  callback: () => Promise<AsyncReturnType>,
  immediate = false,
) {
  const [data, setData] = useState<AsyncReturnType | null>(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState<unknown>(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const returnedData = await callback();
      setData(returnedData);
      setLoading(false);
      return returnedData;
    } catch (err: unknown) {
      setError(err);
      setLoading(false);
    }
  }, [setData, setLoading, setError, callback]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, []);

  return {
    data,
    loading,
    error,
    execute,
  };
}
