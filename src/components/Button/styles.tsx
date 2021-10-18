import styled from "styled-components";
import { TButtonVariantStyle } from "./types";

export const ButtonContainer = styled.button.attrs(
  (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => ({
    disabled: props.disabled,
  })
)<{ variantStyle: TButtonVariantStyle }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ variantStyle }) => variantStyle.padding};
  min-width: ${({ variantStyle }) => variantStyle.minWidth};
  font-size: ${({ variantStyle }) => variantStyle.fontSize};
  font-weight: 700;
  border: ${({ variantStyle }) => variantStyle.border};
  background-color: ${({ variantStyle }) => variantStyle.backgroundColor};
  color: ${({ variantStyle }) => variantStyle.color};
  border-radius: 5px;
  transition: all 0.3s;
  text-decoration: none;

  &:hover {
    background-color: ${({ variantStyle }) =>
      variantStyle.backgroundColorOnHover};
    color: ${({ variantStyle }) => variantStyle.colorOnHover};
    cursor: pointer;
  }

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
  }

  &:disabled,
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
