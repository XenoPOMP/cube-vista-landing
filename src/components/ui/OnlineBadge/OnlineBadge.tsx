import cn from 'classnames';
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
      <svg viewBox='0 0 10 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='5' cy='5.5' r='5' fill='#FC8B94' />
      </svg>

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
