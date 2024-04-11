import { useEffect, useRef, useState } from "react";

export function useDebounce<T>(value: T, delay: number = 500) {
  const ref = useRef<NodeJS.Timeout | null>(null);
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    if (ref.current) clearTimeout(ref.current);
    ref.current = setTimeout(() => setDebouncedValue(value), delay);
  }, [value, delay]);

  return debouncedValue;
}
