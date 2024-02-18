import { useRef, useEffect, RefObject } from 'react';

interface IUseIntersectionObserverOptions {
  root?: Element | null;
  threshold?: number | number[];
  rootMargin?: string;
}

export const useIntersectionObserver = (
  onIntersect: () => void,
  options: IUseIntersectionObserverOptions = {},
  shouldObserve: boolean,
): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement | null>(null);
  const currentElement = ref.current;
  const { root = null, threshold = 1.0, rootMargin = '0px' } = options;

  useEffect(() => {
    if (!shouldObserve) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      { root, threshold, rootMargin },
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, [onIntersect, root, threshold, currentElement, rootMargin, shouldObserve]);

  return ref;
};
