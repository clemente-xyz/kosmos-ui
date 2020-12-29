import styled from "styled-components";

import theme from "../../../../theme";

import { TStepLabelProps } from "./types";

type IMainContainerProps = Pick<TStepLabelProps, "active" | "color">;

const MainContainer = styled.p<IMainContainerProps>`
  text-align: center;
  margin: 5px 10px;
  font-size: ${theme.fontSizes.small};
  color: ${({ active, color }) =>
    active
      ? color || theme.colorsPalette.blue.default
      : theme.colorsPalette.gray.default};
`;

export { MainContainer };
