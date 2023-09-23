import cn from 'classnames';
import { FC } from 'react';

import SubFooter from '@/src/components/layout/SubFooter/SubFooter';
import SocialMediaLink from '@/src/components/ui/SocialMediaLink/SocialMediaLink';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import UiGrid from '@/src/components/ui/UiGrid/UiGrid';

import styles from './Footer.module.scss';
import type { FooterProps } from './Footer.props';

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className={cn(styles.appFooter)}>
      <UiContainer className={cn(styles.footerContainer)}>
        <article className={cn(styles.socialMediaLinks)}>
          <SocialMediaLink type={'telegram'} />

          <SocialMediaLink type={'vk'} />
        </article>
      </UiContainer>

      <SubFooter />
    </footer>
  );
};

export default Footer;
