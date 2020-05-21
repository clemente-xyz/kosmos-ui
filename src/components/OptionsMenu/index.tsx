import React, { useState, useRef } from "react";
import { useTransition, animated } from "react-spring";

import { useOutsideContainer } from "../../hooks";

import { IProps } from "./types";
import {
  DefaultButton,
  Dot,
  TriggerPropButton,
  MenuContainer,
  Label,
} from "./styles";

function OptionsMenu({ options, triggerButton, position = "left" }: IProps) {
  const menuContainerRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const spring = useTransition(isMenuOpen, null, {
    delay: 1,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useOutsideContainer(menuContainerRef, () => {
    setIsMenuOpen(false);
  });

  return (
    <>
      {triggerButton ? (
        <TriggerPropButton
          onClick={(event) => {
            event.stopPropagation();

            setIsMenuOpen(!isMenuOpen);
          }}
        >
          {triggerButton}
        </TriggerPropButton>
      ) : (
        <DefaultButton
          onClick={(event) => {
            event.stopPropagation();

            setIsMenuOpen(!isMenuOpen);
          }}
        >
          {[...new Array(3)].map((_, index) => (
            <Dot key={index} />
          ))}
        </DefaultButton>
      )}

      {spring.map(({ item, key, props }) => {
        return item ? (
          <animated.article
            key={key}
            style={{ position: "relative", ...props }}
            ref={menuContainerRef}
          >
            <MenuContainer position={position}>
              {options.map((option, index) => {
                return (
                  <Label
                    hasSeparator={option.hasSeparator}
                    onClick={
                      option.callback
                        ? (event) => {
                            event.stopPropagation();

                            option.callback && option.callback();

                            setIsMenuOpen(false);
                          }
                        : undefined
                    }
                    key={index}
                  >
                    {option.label}
                  </Label>
                );
              })}
            </MenuContainer>
          </animated.article>
        ) : null;
      })}
    </>
  );
}

export default OptionsMenu;
