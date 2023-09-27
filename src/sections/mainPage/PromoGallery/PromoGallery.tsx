import cn from 'classnames';
import { FC } from 'react';

import stevePlaceholderArt from '@/public/arts/steve-placeholder-art.jpg';
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
        </article>

        <article
          className={cn(styles.gifBlock)}
          style={{
            background: `url(${stevePlaceholderArt.src}) center`,
            backgroundSize: 'cover',
          }}
        />
      </UiContainer>
    </div>
  );
};

export default PromoGallery;
