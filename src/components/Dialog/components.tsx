import React, { Children } from "react";
import styled from "styled-components";

import theme from "../../theme";
import CloseIcon from "../../icons/Close";

import { TDialogCloseProps, TDialogHeaderProps } from "./types";
import { DialogBaseHeader, DialogBaseCloseButton } from "./styles";

export function DialogHeader({
  children,
  style,
  className,
}: TDialogHeaderProps) {
  const childrenCount = Children.count(children);

  return (
    <DialogBaseHeader
      childrenCount={childrenCount}
      className={className}
      style={style}
    >
      {children}
    </DialogBaseHeader>
  );
}

export function DialogClose({ className, style, ...props }: TDialogCloseProps) {
  return (
    <DialogBaseCloseButton {...props} className={className} style={style}>
      <CloseIcon color={theme.colorsPalette.gray.light} height="12px" />
    </DialogBaseCloseButton>
  );
}

export const DialogTitle = styled.h1`
  margin: 0;
  color: ${theme.colorsPalette.gray.darker};
  font-size: ${theme.fontSizes.regularLarge};
  font-weight: 700;
`;

export const DialogBody = styled.div`
  width: 100%;
  overflow-y: scroll;

  p {
    color: ${theme.colorsPalette.gray.default};
  }
`;

export const DialogFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  width: 100%;
`;
