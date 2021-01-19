import React, { CSSProperties, ReactNode } from "react";
import { useDropdown } from "../../index";

import { Button, Dot } from "./styles";

function ToggleButton(props: {
  children?: ReactNode;
  default?: boolean;
  style?: CSSProperties;
}) {
  const {
    setIsMenuOpen,
    setTriggerButtonElement,
    setTriggerButtonRef,
  } = useDropdown();

  const children = props.default
    ? [...new Array(3)].map((_, index) => <Dot key={index} />)
    : props.children;

  return (
    <Button
      default={props.default}
      ref={(reference) => {
        setTriggerButtonElement(reference);

        return setTriggerButtonRef(reference);
      }}
      onClick={(event) => {
        event.stopPropagation();

        event.preventDefault();

        setIsMenuOpen(true);
      }}
      style={props.style}
    >
      {children}
    </Button>
  );
}

export default ToggleButton;
