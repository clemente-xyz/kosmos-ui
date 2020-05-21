import styled from "styled-components";

import theme from "../../theme";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px 13px;
  height: 20px;
  border-radius: 16px;
  /* TODO: Define color for this in colors palette */
  background-color: #dedede;
  color: ${theme.colorsPalette.gray.default};
  font-size: x-small;
  font-weight: 900;
`;

export { MainContainer };
