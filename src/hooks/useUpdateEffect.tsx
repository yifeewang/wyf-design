/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
/**
 *  执行异步更新effect
 *
 * @param {() => void} effect
 * @param {Array<unknown>} [deps=[]]
 */
const useUpdateEffect = (effect: () => void, deps: unknown[] = []): void => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};

export default useUpdateEffect;
