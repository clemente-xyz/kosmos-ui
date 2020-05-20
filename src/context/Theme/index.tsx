import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import theme from "../../theme";

const GlobalStyle = createGlobalStyle`
  p {
    line-height: 25px;
  }
`;

function ThemeContextProvider({ children }: { children: React.ReactChild }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />

        {children}
      </>
    </ThemeProvider>
  );
}

export default ThemeContextProvider;
