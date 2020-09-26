import React, { ReactNode } from "react";

import { MainContainer, ContentContainer, Header } from "./styles";

function MiniCard({
  header,
  children,
  icon,
}: {
  header: string | ReactNode;
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <MainContainer hasIcon={!!icon}>
      {icon}

      {icon ? (
        <ContentContainer>
          {typeof header === "string" ? <Header>{header}</Header> : header}

          {children}
        </ContentContainer>
      ) : (
        <>
          {typeof header === "string" ? <Header>{header}</Header> : header}

          {children}
        </>
      )}
    </MainContainer>
  );
}

export default MiniCard;
