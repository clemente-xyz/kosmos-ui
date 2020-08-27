import React from "react";

import { IProps } from "./types";
import { getIllustrationToRender } from "./helpers";
import { MainContainer, Header, Paragraph } from "./styles";

function IllustratedMessage({
  illustration,
  illustrationConfigs,
  header,
  headerStyle,
  body,
  bodyStyle,
  mainContainerStyle,
}: IProps): JSX.Element {
  return (
    <MainContainer style={mainContainerStyle}>
      {illustration &&
        (React.isValidElement(illustration)
          ? illustration
          : getIllustrationToRender(illustration as any, illustrationConfigs))}

      {typeof header === "string" ? (
        <Header style={headerStyle}>{header}</Header>
      ) : (
        header
      )}

      {typeof body === "string" ? (
        <Paragraph style={bodyStyle}>{body}</Paragraph>
      ) : (
        body
      )}
    </MainContainer>
  );
}

export default IllustratedMessage;
