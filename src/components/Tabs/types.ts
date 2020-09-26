import { ReactNode } from "react";

export interface ITabsProps {
  content: { component: ReactNode; label: string }[];
}

export interface ITabsItemsProps {
  _id: string;
  component: ReactNode;
  label: string;
  isActive: boolean;
}
