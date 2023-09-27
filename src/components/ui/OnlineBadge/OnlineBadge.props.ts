import { PropsWith } from '@xenopomp/advanced-types';

import { CSSProperties } from 'react';

type PartStyling = Pick<CSSProperties, 'color' | 'fontWeight'> &
  PropsWith<'className', {}> & {};

export interface OnlineBadgeProps {
  digitStyling?: PartStyling;
  textStyling?: PartStyling;
  isReversed?: boolean;
}
