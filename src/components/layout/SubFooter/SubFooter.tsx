import cn from 'classnames';
import { FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './SubFooter.module.scss';
import type { SubFooterProps } from './SubFooter.props';

const SubFooter: FC<SubFooterProps> = ({}) => {
  return (
    <div className={cn(styles.subFooterWrapper)}>
      <UiContainer>Made in 2023 by XenoPOMP</UiContainer>
    </div>
  );
};

export default SubFooter;
