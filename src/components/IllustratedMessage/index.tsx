import React from "react";

import { getIllustrationToRender } from "./helpers";
import { TIllustratedMessageProps } from "./types";
import { MainContainer, Header, Paragraph } from "./styles";

function IllustratedMessage({
  illustration,
  illustrationConfigs,
  header,
  headerStyle,
  body,
  bodyStyle,
  mainContainerStyle,
}: TIllustratedMessageProps): JSX.Element {
  return (
    <MainContainer style={mainContainerStyle}>
      {illustration &&
        (React.isValidElement(illustration)
          ? illustration
          : getIllustrationToRender(illustration as any, illustrationConfigs))}

      {header &&
        (typeof header === "string" ? (
          <Header style={headerStyle}>{header}</Header>
        ) : (
          header
        ))}

      {body &&
        (typeof body === "string" ? (
          <Paragraph style={bodyStyle}>{body}</Paragraph>
        ) : (
          body
        ))}
    </MainContainer>
  );
}

export default IllustratedMessage;
