import { CSSProperties, ReactElement } from 'react';

export type TDataRendererProps<D, E> = {
  data: D | undefined;
  loading: boolean;
  error?: E;
  renderData: (data: D) => ReactElement;
  renderLoading?: () => ReactElement;
  renderError?: (error: E) => ReactElement;
  renderEmpty?: () => ReactElement;
  hideOnEmpty?: boolean;
  style?: {
    loading?: CSSProperties;
    error?: CSSProperties;
    empty?: CSSProperties;
  };
};
