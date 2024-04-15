import { useState, useEffect } from "react";

type State = { width: number; height: number };

export function useWindowResize() {
  const [windowSize, setWindowSize] = useState<State>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handler = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return windowSize;
}
