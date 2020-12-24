import React, { useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import { useTransition } from "react-spring";
import { usePopper } from "react-popper";

import { useDropdown } from "../../index";

import { MainContainer } from "./styles";

function Menu({
  children,
  placement = "bottom-start",
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
}) {
  const { isMenuOpen, triggerButtonRef, menuContainerRef } = useDropdown();

  const [popperElement, setPopperElement] = useState<HTMLButtonElement | null>(
    null
  );

  const { styles, attributes } = usePopper(triggerButtonRef, popperElement, {
    placement,
  });

  const spring = useTransition(isMenuOpen, null, {
    delay: 1,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  if (!isMenuOpen) return null;

  return createPortal(
    <article
      ref={setPopperElement as any}
      style={{ ...styles.popper }}
      {...attributes.popper}
    >
      {spring.map(({ item, key, props }) => {
        return item ? (
          <MainContainer key={key} style={props} ref={menuContainerRef}>
            {children}
          </MainContainer>
        ) : null;
      })}
    </article>,
    document.body
  );
}

export default Menu;
