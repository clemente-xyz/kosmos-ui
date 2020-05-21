import React from "react";

import { IProps } from "./types";
import { MainContainer, Header } from "./styles";

/**
 * Card component, just a surface that display content and actions on a single topic.
 * @param children React node containing the card main content
 * @param style Card custom styles (optional)
 * @param title Card title
 */
function Card({ children, style, title }: IProps) {
  return (
    <MainContainer style={style}>
      {title && <Header>{title}</Header>}

      {children}
    </MainContainer>
  );
}

export default Card;
