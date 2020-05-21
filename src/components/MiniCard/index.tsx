import React, { ReactNode } from "react";

import { MainContainer, UpperCaseParagraph } from "./styles";

function MiniCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <MainContainer>
      <UpperCaseParagraph>{title}</UpperCaseParagraph>

      {children}
    </MainContainer>
  );
}

export default MiniCard;
