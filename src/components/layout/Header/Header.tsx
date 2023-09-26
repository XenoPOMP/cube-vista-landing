import cn from 'classnames';
import { FC } from 'react';

import LoginButton from '@/src/components/ui/LoginButton/LoginButton';
import Logo from '@/src/components/ui/Logo/Logo';
import MobileMenu from '@/src/components/ui/MobileMenu/MobileMenu';
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
        <Logo className={cn(styles.headerLogoButton)} />

        <Navbar className={cn(styles.sideBlocks)} />

        <LoginButton className={cn(styles.sideBlocks)} />

        <MobileMenu className={cn(styles.mobileMenuWrapper)} />
      </UiContainer>
    </header>
  );
};

export default Header;
