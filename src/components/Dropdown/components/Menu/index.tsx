import React, { useState, ReactNode, CSSProperties } from "react";
import { createPortal } from "react-dom";
import { useTransition } from "react-spring";
import { usePopper } from "react-popper";

import { useDropdown } from "../../index";

import { MainContainer } from "./styles";

function Menu({
  children,
  placement = "bottom-start",
  style,
}: {
  children: ReactNode;
  placement?:
    | "top-start"
    | "top"
    | "top-end"
    | "right-start"
    | "right"
    | "right-end"
    | "bottom-end"
    | "bottom"
    | "bottom-start"
    | "left-end"
    | "left"
    | "left-start";
  style?: CSSProperties;
}) {
  const { isMenuOpen, triggerButtonRef, menuContainerRef } = useDropdown();

  const [popperElement, setPopperElement] = useState<HTMLButtonElement | null>(
    null
  );

  const { styles, attributes } = usePopper(triggerButtonRef, popperElement, {
    placement,
  });

  const transitions = useTransition(isMenuOpen, {
    delay: 1,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  if (!isMenuOpen) return null;

  return createPortal(
    <article
      ref={setPopperElement as any}
      style={{ ...styles.popper, ...style }}
      {...attributes.popper}
    >
      {transitions(
        (transitionStyle, item) =>
          item && (
            <MainContainer style={transitionStyle} ref={menuContainerRef}>
              {children}
            </MainContainer>
          )
      )}
    </article>,
    document.body
  );
}

export default Menu;
