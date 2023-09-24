import cn from 'classnames';
import { FC } from 'react';

import forestArt from '@/public/arts/forest-wide-art.webp';
import Button from '@/src/components/ui/Button/Button';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './CallToPlaySection.module.scss';
import type { CallToPlaySectionProps } from './CallToPlaySection.props';

const CallToPlaySection: FC<CallToPlaySectionProps> = ({}) => {
  return (
    <div
      className={cn(styles.sectionWrapper)}
      style={{
        background: `url(${forestArt.src}) center`,
        backgroundSize: 'cover',
      }}
    >
      <UiContainer className={cn(styles.content)}>
        <h2>Присоединяйтесь к серверу сейчас!</h2>

        <Button className={cn('font-medium')}>Исследовать</Button>
      </UiContainer>
    </div>
  );
};

export default CallToPlaySection;
