import React from "react";

import { TCardProps } from "./types";
import { CardContainer, CardHeader } from "./styles";

/**
 * Surface that display content and actions on a single topic.
 */
export default function Card({
  children,
  header,
  as,
  onClick,
  ...props
}: TCardProps) {
  return (
    <CardContainer {...props} as={onClick ? "div" : as} onClick={onClick}>
      {header &&
        (typeof header === "string" ? (
          <CardHeader>{header}</CardHeader>
        ) : (
          header
        ))}

      {children}
    </CardContainer>
  );
}
