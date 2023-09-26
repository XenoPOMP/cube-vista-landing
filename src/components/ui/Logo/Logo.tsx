import { PropsWith } from '@xenopomp/advanced-types';

import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import { AppConstants } from '@/app/app.constants';

import styles from './Logo.module.scss';
import type { LogoProps } from './Logo.props';

const Logo: FC<PropsWith<'className', LogoProps>> = ({ className }) => {
  return (
    <Link href={'/'} className={cn(styles.logo, className)}>
      {AppConstants.appName}
    </Link>
  );
};

export default Logo;
