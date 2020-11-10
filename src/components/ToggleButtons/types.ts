import { CSSProperties, ReactNode } from 'react';

export type TProps = {
  options: { value: string; label: string | ReactNode }[];
  value?: string | string[];
  setValue: (
    selectedOption: string | string[],
    event: React.MouseEvent<HTMLElement>
  ) => void;
  exclusive?: boolean;
  style?: CSSProperties;
};
