import React, { useState, useRef } from "react";
import { useTransition } from "react-spring";
import { CustomPicker } from "react-color";
import { Saturation, Hue } from "react-color/lib/components/common";

import { useOutsideContainer } from "../../hooks";
import CloseIcon from "../../icons/Close";
import PenIcon from "../../icons/Pen";
import theme from "../../theme";

import {
  CurrentColorContainer,
  MainContainer,
  PickerButton,
  PickerButtonContainer,
  PickerDialog,
  PickerDialogBackdrop,
  PickerDialogTitle,
  PickerSaturationContainer,
  PickerHueContainer,
  CloseIconContainer,
} from "./styles";

/**
 * Renders a color picker UI.
 * @param color Current selected color.
 * @param onChange Function that sets, based on users picked color, the selected color to pass it up to parent.
 */
function ColorPicker(
  props: {
    color: string;
    onChange: () => void;
  } & any
) {
  const [showPicker, setShowPicker] = useState<boolean>(false);

  const spring = useTransition(showPicker, null, {
    delay: 2,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const pickerDialogRef = useRef(null);

  useOutsideContainer(pickerDialogRef, () => {
    setShowPicker(false);
  });

  return (
    <MainContainer>
      <CurrentColorContainer color={props.color} />

      <p style={{ marginLeft: 10 }}>{props.color}</p>

      <PickerButtonContainer>
        <PickerButton
          onClick={(event) => {
            event.preventDefault();

            setShowPicker(!showPicker);
          }}
        >
          <PenIcon height="22px" />
        </PickerButton>
      </PickerButtonContainer>

      {spring.map(({ item, key, props: _props }) => {
        return item ? (
          <PickerDialogBackdrop
            key={key}
            style={_props}
            aria-modal="true"
            role="dialog"
          >
            <PickerDialog ref={pickerDialogRef}>
              <CloseIconContainer onClick={() => setShowPicker(false)}>
                <CloseIcon
                  color={theme.colorsPalette.gray.light}
                  height="13px"
                />
              </CloseIconContainer>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <PickerDialogTitle>Selecciona un color</PickerDialogTitle>

                <PickerSaturationContainer>
                  <Saturation {...props} />
                </PickerSaturationContainer>

                <PickerHueContainer>
                  <Hue {...props} direction="horizontal" />
                </PickerHueContainer>
              </div>
            </PickerDialog>
          </PickerDialogBackdrop>
        ) : null;
      })}
    </MainContainer>
  );
}

export default CustomPicker(ColorPicker);
