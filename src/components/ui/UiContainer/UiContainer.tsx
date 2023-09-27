import { PropsWith } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { CSSProperties, FC } from 'react';

import { AppConstants } from '@/app/app.constants';

import styles from './UiContainer.module.scss';
import type { UiContainerProps } from './UiContainer.props';

interface UiContainerNestedProps
  extends PropsWith<
    'children' | 'className' | 'id' | 'style',
    UiContainerProps
  > {}

const UiContainer: FC<UiContainerNestedProps> = ({
  children,
  className,
  id,
  style,
  margin,
  maxWidth,
  horizontalAlignment = 'default',
}) => {
  const alignmentClass: Record<typeof horizontalAlignment, string> = {
    default: '',
    left: cn(styles.align, styles.left),
    right: cn(styles.align, styles.right),
  };

  return (
    <section
      style={
        {
          '--max-container-width': maxWidth ?? AppConstants.maxContainerWidth,
          '--margin': margin,
          ...style,
        } as CSSProperties
      }
      className={cn(
        styles.uiContainer,
        alignmentClass[horizontalAlignment],
        className
      )}
      id={id}
    >
      {children}
    </section>
  );
};

export default UiContainer;
