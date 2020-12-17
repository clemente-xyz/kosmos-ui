import React from "react";

import { TFallbackScreenProps } from "./types";
import { MainContainer, Loader } from "./styles";

function FallbackScreen({ type, style, className }: TFallbackScreenProps) {
  return (
    <MainContainer className={className}>
      {type === "loading" ? (
        <Loader />
      ) : type === "error" ? (
        <div>Error</div>
      ) : null}
    </MainContainer>
  );
}

export default FallbackScreen;
