import styled from "styled-components";

import { TSliderInputProps } from "./types";

export const Input = styled.input<TSliderInputProps>`
  appearance: none;
  width: 100%;
  margin: 0;
  height: ${({ style }) => style.thumb.height};
  padding: 0;
  transition: 0.3s all;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: ${({ style }) => style.thumb.height};
    height: ${({ style }) => style.thumb.height};
    background-color: ${({ style }) => style.thumb.backgroundColor};
    border-radius: ${({ style }) => `calc(${style.thumb.height} / 2)`};
    border: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    margin-top: ${({ style }) =>
      `calc(((${style.thumb.height} - ${style.track.height}) / 2) * -1)`};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    -moz-appearance: none;
    appearance: none;
    width: ${({ style }) => style.thumb.height};
    height: ${({ style }) => style.thumb.height};
    background-color: ${({ style }) => style.thumb.backgroundColor};
    border-radius: ${({ style }) => `calc(${style.thumb.height} / 2)`};
    border: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    margin-top: ${({ style }) =>
      `calc(((${style.thumb.height} - ${style.track.height}) / 2) * -1)`};
    cursor: pointer;
  }

  &::-ms-thumb {
    -ms-appearance: none;
    appearance: none;
    width: ${({ style }) => style.thumb.height};
    height: ${({ style }) => style.thumb.height};
    background-color: ${({ style }) => style.thumb.backgroundColor};
    border-radius: ${({ style }) => `calc(${style.thumb.height} / 2)`};
    border: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    margin-top: ${({ style }) =>
      `calc(((${style.thumb.height} - ${style.track.height}) / 2) * -1)`};
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    height: ${({ style }) => style.track.height};
    background-image: ${({ style, percent }) =>
      `linear-gradient(90deg, ${style.track.backgroundColor} ${percent}, ${style.rail.backgroundColor} ${percent})`};
    border-radius: ${({ style }) => `calc(${style.track.height} / 2)`};
  }

  &::-moz-range-track {
    height: ${({ style }) => style.track.height};
    background-color: ${({ style }) => style.rail.backgroundColor};
    border-radius: ${({ style }) => `calc(${style.track.height} / 2)`};
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

  &::-ms-fill-lower {
    height: ${({ style }) => style.track.height};
    background-color: ${({ style }) => style.track.backgroundColor};
    border-radius: ${({ style }) =>
      `calc(${style.track.height} / 2) 0 0 calc(${style.track.height} / 2)`};
  }
`;
