import React, { memo, useCallback, useState, useEffect, useMemo } from "react";

import { TSliderProps, TSliderControllerProps } from "./types";
import { Input } from "./styles";
import theme from "../../theme";

const SliderController = memo<TSliderControllerProps>(
  ({ onChange, value, showLabels, ...inputProps }) => {
    const [sliderVal, setSliderVal] = useState<any>(0);
    const [mouseState, setMouseState] = useState<any>(null);

    useEffect(() => {
      setSliderVal(value);
    }, [value]);

    useEffect(() => {
      if (mouseState === "up") {
        onChange(sliderVal);
      }
    }, [mouseState]);

    return (
      <Input
        id="sliderInput"
        type="range"
        percent={`${sliderVal}%`}
        value={sliderVal}
        {...inputProps}
        onChange={(event) => setSliderVal(event.target.value)}
        onMouseDown={() => setMouseState("down")}
        onMouseUp={() => setMouseState("up")}
      />
    );
  }
);

export default function Slider(props: TSliderProps) {
  const [parentVal, setParentVal] = useState(props.value);

  const sliderValueChanged = useCallback((value) => {
    setParentVal(value);

    props.setValue(value);
  }, []);

  const controllerProps: TSliderControllerProps = useMemo(
    () => ({
      min: props.min || 0,
      max: props.max || 100,
      value: parentVal,
      step: 2,
      onChange(event: React.ChangeEvent<HTMLInputElement>) {
        sliderValueChanged(event);
      },
      style: {
        track: {
          backgroundColor:
            props.style?.track?.backgroundColor ||
            theme.colorsPalette.blue.default,
          height: props.style?.track?.height || "3px",
        },
        thumb: {
          backgroundColor:
            props.style?.thumb?.backgroundColor ||
            theme.colorsPalette.blue.default,
          height: props.style?.track?.height || "14px",
        },
        rail: {
          backgroundColor:
            props.style?.track?.backgroundColor ||
            theme.colorsPalette.gray.lighter,
          height: props.style?.track?.height || "3px",
        },
      },
      showLabels: !!props.showLabels,
    }),
    [parentVal]
  );

  return <SliderController {...controllerProps} />;
}
