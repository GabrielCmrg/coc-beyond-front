import { useState, useEffect } from 'react';

export default function useAsync<
  AsyncReturnType,
  ParamsTypes extends unknown[],
>(
  handler: (...params: ParamsTypes) => Promise<AsyncReturnType>,
  params?: ParamsTypes,
  immediate = false,
) {
  const [data, setData] = useState<AsyncReturnType | null>(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState<unknown>(null);

  const act = async (...args: ParamsTypes) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const data = await handler(...args);
      setData(data);
      setLoading(false);
      return data;
    } catch (err: unknown) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    // params cant ever be undefined if immediate is true
    // also params cant ever be falsy if its not undefined
    // so this condition really only relies on immediate
    if (immediate && params) {
      act(...params);
    }
  }, []);

  return {
    data,
    loading,
    error,
    act,
  };
}
