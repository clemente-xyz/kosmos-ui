import React, { createContext } from 'react';

import { useTabs } from './hooks';
import {
  TTabsContext,
  TTabs,
  TTabsProps,
  TTabProps,
  TTabsPanelProps,
} from './types';
import { TabsSliderContainer, TabContainer } from './styles';

export const TabsContext = createContext({} as TTabsContext);

export default function Tabs({ value, onClick, children }: TTabsProps) {
  return (
    <TabsContext.Provider value={{ value, onClick }}>
      <TabsSliderContainer>{children}</TabsSliderContainer>
    </TabsContext.Provider>
  ) as unknown as TTabs;
}

export function Tab({ value, children }: TTabProps) {
  const { value: selectedValue, onClick } = useTabs();

  const active = selectedValue === value;

  return (
    <TabContainer active={active} onClick={() => onClick(value)}>
      {children}
    </TabContainer>
  );
}

export function TabsPanel({ value, index, children }: TTabsPanelProps) {
  if (value !== index) return null;

  return <>{children}</>;
}

Tabs.Tab = Tab;
Tabs.Panel = TabsPanel;
