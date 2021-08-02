import React from 'react';
import { createPortal } from 'react-dom';
import { useTransition } from 'react-spring';

import { TDialog, TDialogProps } from './types';
import { Backdrop, Container } from './styles';
import {
  DialogHeader,
  DialogClose,
  DialogBody,
  DialogFooter,
  DialogTitle,
} from './components';

export default function Dialog({
  show,
  children,
  className,
  style,
}: TDialogProps) {
  const spring = useTransition(show, null, {
    delay: 2,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return createPortal(
    <>
      {spring.map(({ item, key, props }) => {
        return item ? (
          <Backdrop key={key} style={props} aria-modal="true" role="dialog">
            <Container
              key={key}
              className={className}
              style={{ ...props, ...style }}
            >
              {children}
            </Container>
          </Backdrop>
        ) : null;
      })}
    </>,
    document.body
  ) as unknown as TDialog;
}

Dialog.Header = DialogHeader;
Dialog.Close = DialogClose;
Dialog.Title = DialogTitle;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
