import cn from 'classnames';
import { FC } from 'react';

import LoginButton from '@/src/components/ui/LoginButton/LoginButton';
import Logo from '@/src/components/ui/Logo/Logo';
import Navbar from '@/src/components/ui/Navbar/Navbar';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './Header.module.scss';
import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={cn(styles.appHeader)}>
      <UiContainer
        margin={'0px'}
        maxWidth={'1920px'}
        className={cn('', styles.container)}
      >
        <Logo />

        <Navbar />

        <LoginButton />
      </UiContainer>
    </header>
  );
};

export default Header;
