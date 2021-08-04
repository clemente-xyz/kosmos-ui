import styled from "styled-components";

import theme from "../../theme";

export const AvatarFallback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  border-radius: 50%;
  padding: 8px;
  color: ${theme.colorsPalette.white.default};
`;

export const AvatarImg = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;
