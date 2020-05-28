import React from "react";

import { MainContainer, Meteors, Meteor, Stars, Star } from "./styles";

function GalaxyBackground({
  noOfMeteors = 5,
  noOfStars = 26,
}: {
  noOfMeteors?: number;
  noOfStars?: number;
}) {
  return (
    <MainContainer>
      <Meteors>
        {[...new Array(noOfMeteors)].map((_, index) => (
          <Meteor key={index} />
        ))}
      </Meteors>

      <Stars>
        {[...new Array(noOfStars)].map((_, index) => (
          <Star key={index} />
        ))}
      </Stars>
    </MainContainer>
  );
}

export default GalaxyBackground;
