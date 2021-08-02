import React, { ReactNode } from "react";

import { WithStyle } from "../../types/general";

import {
  DialogHeader,
  DialogClose,
  DialogBody,
  DialogFooter,
  DialogTitle,
} from "./components";

export type TDialog = JSX.Element & {
  Header: typeof DialogHeader;
  Close: typeof DialogClose;
  Title: typeof DialogTitle;
  Body: typeof DialogBody;
  Footer: typeof DialogFooter;
};

export type TDialogProps = WithStyle<{
  show: boolean;
  children: ReactNode;
}>;

export type TDialogHeaderProps = WithStyle<{ children: ReactNode }>;

export type TDialogCloseProps = WithStyle<
  Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "ref"
  >
>;
