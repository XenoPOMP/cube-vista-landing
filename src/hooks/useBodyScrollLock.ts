'use client';

import { CSSProperties, useEffect } from 'react';

import useBoolean from '@/src/hooks/useBoolean';

const useBodyScrollLock = (): [
  isLocked: boolean,
  toggle: () => void,
  set: ReturnType<typeof useBoolean>[2]
] => {
  const doc: Document | undefined = document ?? undefined;

  const bodyStyle = doc?.body.style;

  const [isLocked, toggleLock, setIsLocked] = useBoolean(
    (bodyStyle.overflowY as CSSProperties['overflowY']) === 'hidden'
  );

  useEffect(() => {
    (bodyStyle.overflowY as CSSProperties['overflowY']) = isLocked
      ? 'hidden'
      : 'auto';
  }, [isLocked, bodyStyle]);

  const toggle = () => toggleLock();

  return [isLocked, toggle, setIsLocked];
};

export default useBodyScrollLock;
