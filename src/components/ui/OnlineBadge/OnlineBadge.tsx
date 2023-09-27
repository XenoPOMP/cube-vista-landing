'use client';

import cn from 'classnames';
import { motion } from 'framer-motion';
import { FC } from 'react';

import styles from './OnlineBadge.module.scss';
import { OnlineBadgeProps } from './OnlineBadge.props';

const OnlineBadge: FC<OnlineBadgeProps> = ({
  digitStyling,
  textStyling,
  isReversed,
}) => {
  return (
    <div className={cn(styles.onlineBadge, !isReversed && 'flex-row-reverse')}>
      <motion.svg
        viewBox='0 0 10 11'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.25,
        }}
      >
        <circle cx='5' cy='5.5' r='5' fill='#FC8B94' />
      </motion.svg>

      <span
        className={cn(styles.text)}
        style={{
          fontWeight: textStyling?.fontWeight ?? 'normal',
          color: textStyling?.color ?? '',
        }}
      >
        <strong
          className={cn(styles.digit)}
          style={{
            fontWeight: digitStyling?.fontWeight ?? 'normal',
            color: digitStyling?.color ?? '',
          }}
        >
          100
        </strong>{' '}
        человек онлайн
      </span>
    </div>
  );
};

export default OnlineBadge;
