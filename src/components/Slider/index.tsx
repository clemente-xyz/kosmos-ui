import React, { useState } from "react";

import CarretIcon from "../../icons/Carret";

import { MainContainer, Slide, Button } from "./styles";

function Slider({ slides }: { slides: string[] }) {
  const [xCoordinate, setXCoordinate] = useState(0);

  return (
    <MainContainer>
      {slides.map((slide, index) => {
        return (
          <Slide
            key={index}
            src={slide}
            style={{
              transform: `translateX(${xCoordinate}%)`,
            }}
          />
        );
      })}

      <Button
        onClick={() =>
          setXCoordinate(
            xCoordinate >= 0 ? (slides.length - 1) * -100 : xCoordinate + 100
          )
        }
        direction="left"
      >
        <CarretIcon direction="left" />
      </Button>

      <Button
        onClick={() =>
          setXCoordinate(
            xCoordinate <= (slides.length - 1) * -100 ? 0 : xCoordinate - 100
          )
        }
        direction="right"
      >
        <CarretIcon />
      </Button>
    </MainContainer>
  );
}

export default Slider;
