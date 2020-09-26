import React from "react";

import { ICardProps } from "./types";
import { MainContainer, Header } from "./styles";

/**
 * Card component, just a surface that display content and actions on a single topic.
 * @param children React node containing the card main content.
 * @param style Card custom styles (optional).
 * @param title Card title (optional).
 * @param className Styles classname (optional).
 */
function Card({ children, style, title, className }: ICardProps): JSX.Element {
  return (
    <MainContainer style={style} className={className}>
      {title && <Header>{title}</Header>}

      {children}
    </MainContainer>
  );
}

export default Card;
