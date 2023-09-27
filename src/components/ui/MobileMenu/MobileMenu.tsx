'use client';

import { PropsWith } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { motion } from 'framer-motion';
import { FC, ReactNode, useEffect } from 'react';

import LoginButton from '@/src/components/ui/LoginButton/LoginButton';
import Navbar from '@/src/components/ui/Navbar/Navbar';
import useBodyScrollLock from '@/src/hooks/useBodyScrollLock';
import useBoolean from '@/src/hooks/useBoolean';

import styles from './MobileMenu.module.scss';
import type { MobileMenuProps } from './MobileMenu.props';

const MobileMenu: FC<PropsWith<'className', MobileMenuProps>> = ({
  className,
}) => {
  const [isMenuOpened, toggleMenuOpened, setIsMenuOpened] = useBoolean(false);
  // const [isBodyScrollLocked, toggleBodyScrollLock, setIsBodyLocked] =
  //   useBodyScrollLock();

  const icons: Record<'opened' | 'closed', ReactNode> = {
    opened: (
      <>
        <svg
          className={cn(styles.closed)}
          viewBox='0 0 13 13'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M6.5 7.88403L1.65589 12.7281C1.47465 12.9094 1.24398 13 0.963878 13C0.683777 13 0.453105 12.9094 0.271863 12.7281C0.090621 12.5469 0 12.3162 0 12.0361C0 11.756 0.090621 11.5253 0.271863 11.3441L5.11597 6.5L0.271863 1.65589C0.090621 1.47465 0 1.24398 0 0.963878C0 0.683777 0.090621 0.453105 0.271863 0.271863C0.453105 0.090621 0.683777 0 0.963878 0C1.24398 0 1.47465 0.090621 1.65589 0.271863L6.5 5.11597L11.3441 0.271863C11.5253 0.090621 11.756 0 12.0361 0C12.3162 0 12.5469 0.090621 12.7281 0.271863C12.9094 0.453105 13 0.683777 13 0.963878C13 1.24398 12.9094 1.47465 12.7281 1.65589L7.88403 6.5L12.7281 11.3441C12.9094 11.5253 13 11.756 13 12.0361C13 12.3162 12.9094 12.5469 12.7281 12.7281C12.5469 12.9094 12.3162 13 12.0361 13C11.756 13 11.5253 12.9094 11.3441 12.7281L6.5 7.88403Z' />
        </svg>
      </>
    ),
    closed: (
      <>
        <svg
          className={cn(styles.opened)}
          viewBox='0 0 20 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M0 14.1667V11.9445H20V14.1667H0ZM0 8.61112V6.3889H20V8.61112H0ZM0 3.05557V0.833344H20V3.05557H0Z' />
        </svg>
      </>
    ),
  };

  useEffect(() => {
    // setIsBodyLocked(isMenuOpened);
  }, [isMenuOpened]);

  return (
    <article className={cn(styles.mobileMenuWrapper, className)}>
      <div
        className={cn(styles.iconWrapper)}
        onClick={() => {
          toggleMenuOpened();
        }}
      >
        {isMenuOpened ? icons.opened : icons.closed}
      </div>

      <motion.div
        initial={{
          opacity: isMenuOpened ? 1 : 0,
          pointerEvents: isMenuOpened ? 'all' : 'none',
        }}
        animate={{
          opacity: isMenuOpened ? 1 : 0,
          pointerEvents: isMenuOpened ? 'all' : 'none',
        }}
        className={cn(styles.overlay)}
      >
        <Navbar variant={'mobileMenu'} className={cn(styles.menuNav)} />

        <LoginButton className={cn('justify-center', styles.loginButton)} />
      </motion.div>
    </article>
  );
};

export default MobileMenu;
