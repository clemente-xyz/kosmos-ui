import React from "react";

import LoadingAnimation from "../../animations/Loading";
import ErrorIllustration from "../../illustrations/Error";

import { TFallbackScreenProps } from "./types";
import { MainContainer, ContentContainer, Header } from "./styles";

function FallbackScreen({ type, color, message }: TFallbackScreenProps) {
  return (
    <MainContainer>
      <ContentContainer>
        {type === "loading" ? (
          <LoadingAnimation color={color} />
        ) : type === "error" ? (
          <ErrorIllustration color={color} />
        ) : null}

        {message &&
          (typeof message === "string" ? <Header>{message}</Header> : message)}
      </ContentContainer>
    </MainContainer>
  );
}

export default FallbackScreen;
