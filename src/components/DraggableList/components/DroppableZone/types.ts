import { CSSProperties, ReactNode } from 'react';

export type TDroppableZoneProps = {
  children: ReactNode;
  as?: 'aside' | 'div' | 'section';
  style?: CSSProperties;
  className?: string;
};
