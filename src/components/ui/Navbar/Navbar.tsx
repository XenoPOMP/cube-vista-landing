import { Defined } from '@xenopomp/advanced-types';
import { isUndefined } from '@xenopomp/advanced-utils';

import cn from 'classnames';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

import styles from './Navbar.module.scss';
import type { NavbarProps } from './Navbar.props';

const Navbar: FC<NavbarProps> = ({
  variant = 'header',
  linkArray = 'main',
}) => {
  const styleVariants: Record<Extract<typeof variant, PropertyKey>, string> = {
    header: styles.headerStyle,
    footer: styles.footerStyle,
  };

  const links: Record<
    Extract<typeof linkArray, PropertyKey>,
    Array<{
      href: string;
      content: ReactNode;
    }>
  > = {
    main: [
      {
        href: '/stats',
        content: 'Статистика',
      },
      {
        href: '/forum',
        content: 'Форум',
      },
      {
        href: '/support',
        content: 'Поддержать разработчиков',
      },
    ],
    legalInfo: [
      {
        href: '/legal/terms-of-service',
        content: 'Условия обслуживания',
      },
      {
        href: '/legal/privacy-policy',
        content: 'Политика конфиденциальности',
      },
      {
        href: '/legal/cookies-policy',
        content: 'Политика использования файлов cookie',
      },
      {
        href: '/legal/data-processing',
        content: 'Обработка данных',
      },
    ],
  };

  return (
    <nav
      className={cn(
        styles.appNav,
        !isUndefined(variant) ? styleVariants[variant] : ''
      )}
    >
      <ul>
        {links[linkArray].map((linkItem, index) => (
          <li key={`nav-item-${index}`}>
            <Link href={linkItem.href}>{linkItem.content}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
