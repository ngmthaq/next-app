import { useEffect, useRef, useState } from "react";

export function useVisible(element: HTMLElement, root: HTMLElement) {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const observer = useRef<IntersectionObserver | null>(null);

  const checkVisibility = () => {
    observer.current?.observe(element);
  };

  useEffect(() => {
    if (element && root) {
      observer.current = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(element);
            }
          });
        },
        {
          root: root,
          rootMargin: "0px 0px 0px 0px",
          threshold: 0,
        }
      );

      observer.current.observe(element);
    }
  }, [element, root]);

  return { checkVisibility, isVisible };
}
