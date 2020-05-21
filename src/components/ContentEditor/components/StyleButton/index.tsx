import React from "react";

import { MainContainer } from "./styles";

function StyleButton(props: any) {
  return (
    <MainContainer
      isActive={props.active}
      onMouseDown={(event) => {
        event.preventDefault();

        props.onToggle(props.style);
      }}
    >
      {props.label}
    </MainContainer>
  );
}

export default StyleButton;
