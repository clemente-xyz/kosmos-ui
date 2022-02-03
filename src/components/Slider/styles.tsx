import styled from "styled-components";

import theme from "../../theme";

import { TSliderInputProps, TSliderRailProps } from "./types";

// https://codepen.io/rendykstan/pen/VLqZGO

export const SliderInputsContainer = styled.div`
  position: relative;
  width: 100%;
  float: left;
  text-align: center;
  height: 18px;
`;

export const SliderRail = styled.span<TSliderRailProps>`
  width: 100%;
  height: ${({ railStyle }) => railStyle?.height}px;
  position: absolute;
  left: 0;
  background-color: ${({ railStyle }) =>
    railStyle?.backgroundColor || theme.colorsPalette.gray.lighter};
  border-radius: 16px;
  top: 50%;
  transform: translate(0%, -50%);

  &:before {
    content: "";
    position: absolute;
    left: ${({ min }) => min || 0}%;
    width: ${({ min, max }) => (min ? max - min : max)}%;
    height: ${({ trackStyle }) => trackStyle?.height}px;
    background: ${({ trackStyle }) =>
      trackStyle?.backgroundColor || theme.colorsPalette.blue.default};
  }
`;

export const SliderInput = styled.input<TSliderInputProps>`
  pointer-events: none;
  position: absolute;
  -webkit-appearance: none;
  border: none;
  border-radius: 14px;
  background: transparent
  box-shadow: none;
  overflow: hidden;
  left: 0;
  width: 100%;
  outline: none;
  margin: 0;
  padding: 0;

  &::-webkit-slider-thumb {
    pointer-events: all;
    position: relative;
    z-index: 1;
    outline: 0;
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border: none;
    border-radius: 14px;
    background-color: ${({ style }) => style.thumb.backgroundColor};
    cursor: grab;
  }

  &::-ms-track {
    height: ${({ style }) => style.track.height};
    background-color: ${({ style }) => style.rail.backgroundColor};
    border-radius: ${({ style }) => `calc(${style.track.height} / 2)`};
  }

  &::-moz-range-progress {
    height: ${({ style }) => style.track.height};
    background-color: ${({ style }) => style.track.backgroundColor};
    border-radius: ${({ style }) =>
      `calc(${style.track.height} / 2) 0 0 calc(${style.track.height} / 2)`};
  }

  &::-moz-range-thumb {
    pointer-events: all;
    position: relative;
    z-index: 10;
    -moz-appearance: none;
    width: 18px;
    height: 18px;
    border: none;
    border-radius: 14px;
    background-image: linear-gradient(to bottom, #dad8da 0, #413f41 100%);
    /* W3C */
  }

  &::-ms-thumb {
    pointer-events: all;
    position: relative;
    z-index: 10;
    -ms-appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 14px;
    border: 0;
    background-image: linear-gradient(to bottom, #dad8da 0, #413f41 100%);
    /* W3C */
  }

  &::-moz-range-track {
    position: relative;
    z-index: -1;
    background-color: black;
    border: 0;

    height: ${({ style }) => style.track.height};
    background-color: ${({ style }) => style.rail.backgroundColor};
    border-radius: ${({ style }) => `calc(${style.track.height} / 2)`};
  }

  &:last-of-type::-moz-range-track {
    -moz-appearance: none;
    background: none transparent;
    border: 0;
  }

  &::-moz-focus-outer {
    border: 0;
  }
`;
