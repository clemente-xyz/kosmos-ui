import React from "react";

import theme from "../../theme";
import { MainContainer, Dot } from "./styles";

const NUM_OF_DOTS = 3;

/**
 * Renders an animated three dots loader.
 * @param color Optional string param that gives the fill color of the loader.
 */
function Loader({
  color = theme.colorsPalette.white.default,
}: {
  color?: string;
}) {
  return (
    <>
      <MainContainer>
        {[...Array(NUM_OF_DOTS)].map((_, i) => (
          <Dot key={i} delay={`0.${i}s`} backgroundColor={color} />
        ))}
      </MainContainer>
    </>
  );
}

export default Loader;
