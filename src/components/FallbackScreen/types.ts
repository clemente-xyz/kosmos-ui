import { ReactNode } from 'react';

export type TFallbackScreenProps = {
  type: 'loading' | 'error';
  color?: string;
  message?: string | ReactNode;
};
