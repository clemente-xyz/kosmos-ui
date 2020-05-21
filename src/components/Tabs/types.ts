import { ReactNode } from "react";

export type IProps = {
  content: { component: ReactNode; label: string }[];
};

export type ITabsProps = {
  _id: string;
  component: ReactNode;
  label: string;
  isActive: boolean;
};
