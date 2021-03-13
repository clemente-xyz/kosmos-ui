import React from "react";

import { getButtonContainer } from "../Button/helpers";
import { getSplitButtonStyle } from "./helpers";
import { TSplitButtonProps } from "./types";

export default function SplitButton({
  side,
  as: Component = "button",
  style: baseStyle,
  ...props
}: TSplitButtonProps) {
  const style = getSplitButtonStyle({ side });

  const Container = getButtonContainer({
    as: Component as any,
    variant: props.variant,
    format: props.format,
    size: props.size,
  });

  return (
    <Container style={{ ...style, ...baseStyle }} {...props}>
      {props.children}
    </Container>
  );
}
