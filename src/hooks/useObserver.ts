import { RefObject, useEffect, useRef } from "react";

interface IObserver {
  ref: RefObject<HTMLDivElement>;
  canLoad: boolean;
  isLoading: boolean;
  callback: () => void;
}

export const useObserver = (
  ref: RefObject<HTMLDivElement>,
  canLoad: boolean,
  isLoading: boolean,
  callback: () => void,
) => {
  const observer = useRef() as RefObject;
  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    var cb = function (entries) {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [isLoading]);
};
