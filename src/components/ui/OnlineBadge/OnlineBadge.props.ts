import { CSSProperties } from 'react';

type PartStyling = Pick<CSSProperties, 'color' | 'fontWeight'> & {};

export interface OnlineBadgeProps {
  digitStyling?: PartStyling;
  textStyling?: PartStyling;
  isReversed?: boolean;
}
