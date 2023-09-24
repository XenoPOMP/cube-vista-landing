'use client';

import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import { AppConstants } from '@/app/app.constants';
import SubFooter from '@/src/components/layout/SubFooter/SubFooter';
import Button from '@/src/components/ui/Button/Button';
import Navbar from '@/src/components/ui/Navbar/Navbar';
import SocialMediaLink from '@/src/components/ui/SocialMediaLink/SocialMediaLink';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import UiGrid from '@/src/components/ui/UiGrid/UiGrid';

import styles from './Footer.module.scss';
import type { FooterProps } from './Footer.props';

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className={cn(styles.appFooter)}>
      <UiContainer className={cn(styles.footerContainer)}>
        <article className={cn(styles.main)}>
          <section className={cn(styles.branding)}>
            <Link href={'/#'}>
              <h2>{AppConstants.appName}</h2>
            </Link>

            <Button
              onClick={() => {
                console.log('Clicked on button');
              }}
              className={cn(
                styles.playNowButton,
                'flex gap-[.75em] items-center'
              )}
              variant={'footer'}
            >
              <span>Играть сейчас!</span>

              <svg
                width='1em'
                viewBox='0 0 20 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12.5 15L10.75 13.1875L15.1875 8.75H0V6.25H15.1875L10.75 1.8125L12.5 0L20 7.5L12.5 15Z' />
              </svg>
            </Button>
          </section>

          <section className={cn(styles.navBlock)}>
            <div className={cn(styles.navGroup)}>
              <h3>Навигация</h3>

              <Navbar variant={'footer'} />
            </div>

            <div className={cn(styles.navGroup)}>
              <h3>Юр. информация</h3>

              <Navbar variant={'footer'} linkArray={'legalInfo'} />
            </div>
          </section>
        </article>

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
