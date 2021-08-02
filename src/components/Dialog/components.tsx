import React, { Children } from "react";
import styled from "styled-components";

import theme from "../../theme";
import CloseIcon from "../../icons/Close";

import { TDialogCloseProps, TDialogHeaderProps } from "./types";

import { Header, CloseButton } from "./styles";

export function DialogHeader({
  children,
  style,
  className,
}: TDialogHeaderProps) {
  const childrenCount = Children.count(children);

  return (
    <Header childrenCount={childrenCount} className={className} style={style}>
      {children}
    </Header>
  );
}

export function DialogClose({ className, style, ...props }: TDialogCloseProps) {
  return (
    <CloseButton {...props} className={className} style={style}>
      <CloseIcon color={theme.colorsPalette.gray.light} height="12px" />
    </CloseButton>
  );
}

export const DialogTitle = styled.h1`
  margin: 0;
  color: ${theme.colorsPalette.gray.darker};
  font-size: ${theme.fontSizes.regularLarge};
  font-weight: ${theme.fontWeights.bold};
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
