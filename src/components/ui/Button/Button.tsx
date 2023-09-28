import { PropsWith } from '@xenopomp/advanced-types';

import cn from 'classnames';
import { FC } from 'react';

import styles from './Button.module.scss';
import type { ButtonProps } from './Button.props';

const Button: FC<PropsWith<'children', ButtonProps>> = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  const variantStyles: Record<
    typeof variant,
    {
      className: string;
    }
  > = {
    primary: {
      className: '',
    },
    footer: {
      className: styles.footerLike,
    },
    secondary: {
      className: styles.secondary,
    },
  };

  return (
    <button
      {...props}
      className={cn(
        styles.uiButton,
        variantStyles[variant].className,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
