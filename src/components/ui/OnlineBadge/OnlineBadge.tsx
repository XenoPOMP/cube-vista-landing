import { AsyncFC, PropsWith } from '@xenopomp/advanced-types';

import axios from 'axios';
import cn from 'classnames';
import { FC } from 'react';

import { useServerQuery } from '@/src/hooks/useServerQuery';
import formatQuantity from '@/src/utils/formatQuantity';

import styles from './OnlineBadge.module.scss';
import { OnlineBadgeProps } from './OnlineBadge.props';

const OnlineBadge: AsyncFC<PropsWith<'className', OnlineBadgeProps>> = async ({
  digitStyling,
  textStyling,
  isReversed,
  className,
}) => {
  const { data } = await useServerQuery(
    async () =>
      await axios.get<{ isOnline: boolean; onlineCount: number }>(
        `${process.env.API_URL}/online`
      )
  );

  return (
    <div
      className={cn(
        styles.onlineBadge,
        !isReversed && 'flex-row-reverse',
        !(data?.data.isOnline ?? false) && styles.isOffline,
        'uppercase',
        className
      )}
    >
      <svg viewBox='0 0 10 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='5' cy='5.5' r='5' fill='#FC8B94' />
      </svg>

      <span
        className={cn(styles.text, textStyling?.className ?? '')}
        style={{
          fontWeight: textStyling?.fontWeight ?? 'normal',
          color: textStyling?.color ?? '',
        }}
      >
        {data?.data.isOnline ? (
          <>
            <strong
              className={cn(styles.digit, digitStyling?.className ?? '')}
              style={{
                fontWeight: digitStyling?.fontWeight ?? 'normal',
                color: digitStyling?.color ?? '',
              }}
            >
              {formatQuantity(data?.data.onlineCount)}
            </strong>{' '}
            человек онлайн
          </>
        ) : (
          <>сервер сейчас оффлайн</>
        )}
      </span>
    </div>
  );
};

export default OnlineBadge;
