import { useRef } from "react";

export function useFirstRender() {
  const ref = useRef<boolean>(true);
  const firstRender = ref.current;
  ref.current = false;

  return firstRender;
}
