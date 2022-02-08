import React, { memo, useCallback, useState, useMemo, Fragment } from "react";

import theme from "../../theme";

import { TSliderProps, TSliderControllerProps } from "./types";
import { SliderInputsContainer, SliderInput, SliderRail } from "./styles";

const SliderController = memo<TSliderControllerProps>(
  ({ values, handleValuesChange, showLabels, min, max, ...inputProps }) => {
    const x0 = values[1] ? (values[0] < values[1] ? values[0] : values[1]) : 0;
    const x1 = values[1]
      ? values[1] > values[0]
        ? values[1]
        : values[0]
      : values[0];

    return (
      <SliderInputsContainer>
        <SliderRail
          x0={x0}
          x1={x1}
          min={min}
          max={max}
          railStyle={inputProps.style.rail}
          trackStyle={inputProps.style.track}
        />

        {values.map((value, index) => (
          <Fragment key={`slider-${index}`}>
            <SliderInput
              id={`slider-${index}`}
              index={index}
              type="range"
              percent={`${values[index]}%`}
              value={value}
              min={min}
              max={max}
              {...inputProps}
              onChange={(event) => handleValuesChange(event, index)}
            />
          </Fragment>
        ))}
      </SliderInputsContainer>
    );
  }
);

export default function Slider({
  value: baseValue,
  setValue: setBaseValue,
  min,
  max,
  style,
  showLabels,
}: TSliderProps) {
  const [values, setValues] = useState<number[]>(
    typeof baseValue === "number" ? [baseValue] : baseValue
  );

  const handleValuesChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const newValue = parseInt(event.target.value);

      setValues((prevValues) =>
        prevValues.map((prevValue, prevIndex) =>
          prevIndex === index ? newValue : prevValue
        )
      );

      setBaseValue(
        typeof baseValue === "number"
          ? newValue
          : values.map((prevValue, prevIndex) =>
              prevIndex === index ? newValue : prevValue
            )
      );
    },
    [values, baseValue, setBaseValue]
  );

  const controllerProps: TSliderControllerProps = useMemo(
    () => ({
      min: min || 0,
      max: max || 100,
      values,
      handleValuesChange,
      style: {
        root: style?.root || {},
        track: {
          backgroundColor:
            style?.track?.backgroundColor || theme.colorsPalette.blue.default,
          height: style?.track?.height || 3,
        },
        thumb: {
          backgroundColor:
            style?.thumb?.backgroundColor || theme.colorsPalette.blue.default,
          height: style?.track?.height || "14px",
        },
        rail: {
          backgroundColor:
            style?.rail?.backgroundColor || theme.colorsPalette.gray.lighter,
          height: style?.rail?.height || 3,
        },
      },
      showLabels: !!showLabels,
    }),
    [values, handleValuesChange, min, max, style, showLabels]
  );

  return <SliderController {...controllerProps} />;
}
