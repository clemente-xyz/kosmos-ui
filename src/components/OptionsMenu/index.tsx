import React, { useState, useRef, MouseEvent } from "react";
import { createPortal } from "react-dom";
import { useTransition } from "react-spring";
import { usePopper } from "react-popper";

import { useClickOutsideContainer } from "../../hooks";

import { IOptionsMenuProps } from "./types";
import {
  DefaultButton,
  Dot,
  TriggerPropButton,
  MenuContainer,
  Label,
} from "./styles";

function OptionsMenu({
  options,
  triggerButton,
  placement = "bottom-start",
  menuStyle,
}: IOptionsMenuProps): JSX.Element {
  const menuContainerRef = useRef(null);

  let triggerButtonElement: HTMLButtonElement | null;

  const [
    referenceElement,
    setReferenceElement,
  ] = useState<HTMLButtonElement | null>(null);

  const [popperElement, setPopperElement] = useState<HTMLButtonElement | null>(
    null
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
  });

  const spring = useTransition(isMenuOpen, null, {
    delay: 1,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  function handleClickOutsideMenu(
    event: MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const isOutsideMenu =
      menuContainerRef &&
      menuContainerRef.current &&
      !((menuContainerRef.current as unknown) as HTMLElement).contains(
        event.target as Node
      );

    const isOutsideTriggerButton =
      triggerButtonElement &&
      !triggerButtonElement.contains(event.target as Node);

    if (isOutsideMenu && isOutsideTriggerButton) setIsMenuOpen(false);
  }

  useClickOutsideContainer(menuContainerRef, (event) => {
    event && handleClickOutsideMenu(event);
  });

  return (
    <>
      {triggerButton ? (
        <TriggerPropButton
          onClick={(event) => {
            event.stopPropagation();

            setIsMenuOpen(!isMenuOpen);
          }}
          ref={(reference) => {
            triggerButtonElement = reference;

            return setReferenceElement(reference);
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
          ref={setReferenceElement}
        >
          {[...new Array(3)].map((_, index) => (
            <Dot key={index} />
          ))}
        </DefaultButton>
      )}

      {isMenuOpen &&
        createPortal(
          <article
            ref={setPopperElement as any}
            style={{ ...styles.popper, ...menuStyle }}
            {...attributes.popper}
          >
            {spring.map(({ item, key, props }) => {
              return item ? (
                <MenuContainer key={key} style={props} ref={menuContainerRef}>
                  {options.map((option, index) => {
                    return (
                      <Label
                        key={index}
                        styled={typeof option.label === "string"}
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
                      >
                        {option.label}
                      </Label>
                    );
                  })}
                </MenuContainer>
              ) : null;
            })}
          </article>,

          document.body
        )}
    </>
  );
}

export default OptionsMenu;
