import { ComponentProps } from 'react';

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'footer' | 'secondary';
}
