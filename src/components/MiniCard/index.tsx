import React, { ReactNode } from "react";

import { MainContainer, Header } from "./styles";

function MiniCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <MainContainer>
      <Header>{title}</Header>

      {children}
    </MainContainer>
  );
}

export default MiniCard;
