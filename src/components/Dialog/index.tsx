import React from "react";
import { createPortal } from "react-dom";
import { useTransition } from "react-spring";

import { TDialog, TDialogProps } from "./types";
import { DialogBackdrop, DialogContainer } from "./styles";
import {
  DialogHeader,
  DialogClose,
  DialogBody,
  DialogFooter,
  DialogTitle,
} from "./components";

export default function Dialog({
  show,
  children,
  className,
  style,
}: TDialogProps) {
  const transitions = useTransition(show, {
    delay: 2,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return createPortal(
    <>
      {transitions(
        (transitionStyle, item) =>
          item && (
            <DialogBackdrop
              style={transitionStyle}
              aria-modal="true"
              role="dialog"
            >
              <DialogContainer
                className={className}
                style={{ ...transitionStyle, ...style }}
              >
                {children}
              </DialogContainer>
            </DialogBackdrop>
          )
      )}
    </>,
    document.body
  ) as unknown as TDialog;
}

Dialog.Header = DialogHeader;
Dialog.Close = DialogClose;
Dialog.Title = DialogTitle;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
