import cn from 'classnames';
import { steps } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

import stevePlaceholderArt from '@/public/arts/steve-placeholder-art.jpg';
import Button from '@/src/components/ui/Button/Button';
import OnlineBadge from '@/src/components/ui/OnlineBadge/OnlineBadge';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './PromoGallery.module.scss';
import { PromoGalleryProps } from './PromoGallery.props';

const PromoGallery: FC<PromoGalleryProps> = ({}) => {
  return (
    <div className={cn(styles.galleryWrapper)}>
      <UiContainer
        className={cn(styles.container)}
        horizontalAlignment={'right'}
        margin={'1.5rem'}
        maxWidth={'1860px'}
      >
        <article className={cn(styles.textBlock)}>
          <OnlineBadge />

          <div className={cn(styles.heading)}>
            <h1>Майнкрафт Сервер для друзей</h1>

            <p>
              We have a propspering community and it`s growing faster than ever.
              Suggest new features, discuss what`s new, and or share your
              content
            </p>
          </div>

          <Button
            className={cn('text-[1.5em]', styles.button)}
            variant={'secondary'}
          >
            <b>Начните играть</b> - это бесплатно!
          </Button>
        </article>

        <article
          className={cn(styles.gifBlock)}
          style={{
            background: `url(${stevePlaceholderArt.src}) center`,
            backgroundSize: 'cover',
          }}
        ></article>
      </UiContainer>
    </div>
  );
};

export default PromoGallery;
