import React from "react";

import { TFallbackScreenProps } from "./types";
import { MainContainer, ContentContainer, Loader, Header } from "./styles";
import ErrorIllustration from "illustrations/Error";

function FallbackScreen({ type, color, message }: TFallbackScreenProps) {
  return (
    <MainContainer>
      <ContentContainer>
        {type === "loading" ? (
          <Loader color={color} />
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
