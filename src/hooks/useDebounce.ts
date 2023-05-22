import { useState, useEffect } from 'react';

export const useDebounce = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timeoutHandler);
    };
  }, [value, delay]);
  return debouncedValue;
};
