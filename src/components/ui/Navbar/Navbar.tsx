import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import styles from './Navbar.module.scss';
import type { NavbarProps } from './Navbar.props';

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className={cn(styles.appNav)}>
      <ul>
        <li>
          <Link href={'/stats'}>Статистика</Link>
        </li>

        <li>
          <Link href={'/forum'}>Форум</Link>
        </li>

        <li>
          <Link href={'/support'}>Поддержать разработчиков</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
