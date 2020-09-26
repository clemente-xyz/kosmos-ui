import React from "react";

import { ICardProps } from "./types";
import { MainContainer, Header } from "./styles";

/**
 * Surface that display content and actions on a single topic.
 * @param children - React node containing the card main content.
 * @param style - Card custom styles (optional).
 * @param header - Card header (optional).
 * @param className - Styles classname (optional).
 */
function Card({ children, style, header, className }: ICardProps): JSX.Element {
  return (
    <MainContainer style={style} className={className}>
      {header &&
        (typeof header === "string" ? <Header>{header}</Header> : header)}

      {children}
    </MainContainer>
  );
}

export default Card;
