import { useCallback, useEffect, useRef, useState } from 'react';
import useToast from '@/hooks/useToast.js';

// setter 함수를 넘기는게 맞는걸까?
function useInfiniteScroll({ fetchFn, message }) {
  const createToast = useToast();
  const endElement = useRef(null);
  const [cursor, setCursor] = useState(null);
  const [hasNext, setHasNext] = useState(true);
  const [dataList, setDataList] = useState([]);

  const fetchDataList = useCallback(async () => {
    const { hasNext, nextCursor, data } = await fetchFn(cursor);
    if (!hasNext && cursor !== null) createToast({ message });

    setHasNext(hasNext);
    setCursor(nextCursor);
    setDataList((prev) => prev.concat(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursor, fetchFn]);

  const onIntersection = useCallback(
    async (entries) => {
      const firstEntry = entries[0];

      if (firstEntry.isIntersecting && hasNext) {
        await fetchDataList();
      }
    },
    [hasNext, fetchDataList],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);

    const currentElement = endElement.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [onIntersection]);

  return {
    dataList,
    setDataList,
    hasNext,
    endElement,
  };
}

export default useInfiniteScroll;
