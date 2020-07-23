import React, { useState } from "react";

import CarretIcon from "../../icons/Carret";

import { IProps } from "./types";
import { MainContainer, Slide, Button } from "./styles";

function Slider({ slides, style, className }: IProps) {
  const [xCoordinate, setXCoordinate] = useState(0);

  return (
    <MainContainer style={style} className={className}>
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

      {slides.length > 1 && (
        <>
          <Button
            onClick={() =>
              setXCoordinate(
                xCoordinate >= 0
                  ? (slides.length - 1) * -100
                  : xCoordinate + 100
              )
            }
            direction="left"
          >
            <CarretIcon direction="left" height="16px" />
          </Button>

          <Button
            onClick={() =>
              setXCoordinate(
                xCoordinate <= (slides.length - 1) * -100
                  ? 0
                  : xCoordinate - 100
              )
            }
            direction="right"
          >
            <CarretIcon height="16px" />
          </Button>
        </>
      )}
    </MainContainer>
  );
}

export default Slider;
