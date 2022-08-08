import React from "react";

import { TCardProps } from "./types";
import { CardContainer, CardHeader } from "./styles";

/**
 * Surface that display content and actions on a single topic.
 * @param children - React node containing the card main content.
 * @param style - Card custom styles (optional).
 * @param header - Card header (optional).
 * @param className - Styles classname (optional).
 * @param as - React element type with the card want to by defined as (optional).
 * Default: aside.
 */
export default function Card({ children, header, ...props }: TCardProps) {
  return (
    <CardContainer {...props}>
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
