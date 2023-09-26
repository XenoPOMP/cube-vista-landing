import { PropsWith } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { FC } from 'react';

import styles from './LoginButton.module.scss';
import type { LoginButtonProps } from './LoginButton.props';

const LoginButton: FC<PropsWith<'className', LoginButtonProps>> = ({
  className,
}) => {
  return (
    <a className={cn(styles.login, className)}>
      <span>Войти</span>

      <svg
        width='1.5em'
        height='1.55em'
        viewBox='0 0 30 31'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <mask
          id='mask0_2_69'
          style={{
            mask: 'alpha',
          }}
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='1.5em'
          height='1.55em'
        >
          <rect y='0.5' width='1.5em' height='1.5em' fill='#D9D9D9' />
        </mask>
        <g mask='url(#mask0_2_69)'>
          <path d='M15 26.75V24.25H23.75V6.75H15V4.25H23.75C24.4375 4.25 25.026 4.49479 25.5156 4.98438C26.0052 5.47396 26.25 6.0625 26.25 6.75V24.25C26.25 24.9375 26.0052 25.526 25.5156 26.0156C25.026 26.5052 24.4375 26.75 23.75 26.75H15ZM12.5 21.75L10.7812 19.9375L13.9688 16.75H3.75V14.25H13.9688L10.7812 11.0625L12.5 9.25L18.75 15.5L12.5 21.75Z' />
        </g>
      </svg>
    </a>
  );
};

export default LoginButton;
