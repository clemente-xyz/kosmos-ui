import { CSSProperties, ReactNode } from 'react';

import { Tab, TabsPanel } from './index';

export type TTabsContext = { onClick(_: any): void; value: any };

export type TTabs = JSX.Element & {
  Tab: typeof Tab;
  Panel: typeof TabsPanel;
};

export type TTabsProps = Pick<TTabsContext, 'value' | 'onClick'> & {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export type TTabProps = Pick<TTabsContext, 'value'> & {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export type TTabsPanelProps = Pick<TTabsContext, 'value'> & {
  index: any;
  children?: ReactNode;
};
