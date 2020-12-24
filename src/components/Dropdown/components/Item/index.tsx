import React from "react";

import { useDropdown } from "../../index";

import { MainContainer } from "./styles";

function Item(
  props: React.HTMLAttributes<HTMLDivElement> & {
    separator?: boolean;
    default?: boolean;
  }
) {
  const { setIsMenuOpen } = useDropdown();

  const { onClick, children, ...restProps } = props;

  return (
    <MainContainer
      {...restProps}
      onClick={(event) => {
        event.stopPropagation();

        props.onClick && props.onClick(event);

        setIsMenuOpen(false);
      }}
    >
      {children}
    </MainContainer>
  );
}

export default Item;
