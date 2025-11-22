import { useEffect, useState, useRef } from "react";

/**
 * useAsync - reusable async hook
 *
 * @param {Function} asyncFn - async function returning a promise
 * @param {Array} deps - dependency array
 * @param {Object} options - { immediate: boolean }
 */
export function useAsync(asyncFn, deps = [], options = { immediate: true }) {
  const { immediate } = options;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const cancelRef = useRef(false);

  const execute = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const result = await asyncFn(...args);
      if (!cancelRef.current) setData(result);
      return result;
    } catch (err) {
      if (!cancelRef.current) setError(err);
      throw err;
    } finally {
      if (!cancelRef.current) setLoading(false);
    }
  };

  useEffect(() => {
    cancelRef.current = false;

    if (immediate) execute();

    return () => {
      cancelRef.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, error, execute };
}
