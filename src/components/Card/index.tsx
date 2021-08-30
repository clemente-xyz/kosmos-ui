import React from "react";

import { ICardProps } from "./types";
import { Container, Header } from "./styles";

/**
 * Surface that display content and actions on a single topic.
 * @param children - React node containing the card main content.
 * @param style - Card custom styles (optional).
 * @param header - Card header (optional).
 * @param className - Styles classname (optional).
 */
function Card({ children, style, header, className }: ICardProps): JSX.Element {
  return (
    <Container style={style} className={className}>
      {header &&
        (typeof header === "string" ? <Header>{header}</Header> : header)}

      {children}
    </Container>
  );
}

export default Card;
