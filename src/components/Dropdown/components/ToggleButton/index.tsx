import React, { ReactNode } from "react";
import { useDropdown } from "../../index";

import { Button, Dot } from "./styles";

function ToggleButton(props: { children?: ReactNode; default?: boolean }) {
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
      onClick={() => setIsMenuOpen(true)}
    >
      {children}
    </Button>
  );
}

export default ToggleButton;
