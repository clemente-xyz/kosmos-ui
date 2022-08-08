import styled from "styled-components";

import theme from "../../theme";

import { TTypographyProps } from "./types";

export const StyledTypography = styled.div<Pick<TTypographyProps, "variant">>`
  font-family: "SFPro";
  /* font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
    Helvetica, Arial, sans-serif; */

  ${({ variant }) => {
    switch (variant) {
      case "title1":
        return `
          font-size: 80px;
          font-weight: ${theme.fontWeights.bolder};
          margin: 0 0 24px 0;
          max-width: 760px;
          line-height: 1;
          letter-spacing: -0.015em;
        `;

      case "title2":
        return `
          font-size: 48px;
          font-weight: ${theme.fontWeights.bold};
          margin: 0 0 24px 0;
          max-width: 760px;
          line-height: 1;
          letter-spacing: -.003em;
        `;

      case "title3":
        return `
          font-size: 24px;
          font-weight: ${theme.fontWeights.bold};
          margin: 0 0 16px 0;
          max-width: 380px;
          line-height: 1.1;
          letter-spacing: 0em;
        `;

      case "title4":
        return `
          font-size: 18px;
          font-weight: ${theme.fontWeights.bold};
          margin: 0 0 8px 0;
          max-width: 380px;
          line-height: 1.1;
          letter-spacing: 0em;
        `;

      case "subtitle1":
        return `
          color: ${theme.colorsPalette.gray.light};
          font-weight: ${theme.fontWeights.bold};
          font-size: ${theme.fontSizes.small};
          letter-spacing: 1px;
          text-transform: uppercase;
          margin: 0 0 12px 0;
        `;

      case "paragraph1":
        return `
          color: ${theme.colorsPalette.gray.default};
          font-size: 18px;
          font-weight: ${theme.fontWeights.regular};
          margin: 0 0 16px 0;
          line-height: 1.45;          
        `;

      case "paragraph2":
        return `
          color: ${theme.colorsPalette.gray.default};
          font-size: 16px;
          margin: 0;
          line-height: 1.45;          
        `;

      case "paragraph3":
        return `
          color: ${theme.colorsPalette.gray.default};
          font-size: 14px;
          margin: 0;
          line-height: 1.45;          
        `;

      default:
        return ``;
    }
  }}

  @media (max-width: 600px) {
    /* width: 100%; */

    ${({ variant }) => {
      switch (variant) {
        case "title1":
          return `
            font-size: 40px;
          `;

        case "title2":
        case "title3":
          return `
            font-size: 24px;
            margin: 0 0 16px 0;
          `;

        case "paragraph1":
          return `
              font-size: 16px;
            `;

        case "paragraph2":
          return `
              font-size: 14px;
            `;

        default:
          return ``;
      }
    }}
  }
`;
