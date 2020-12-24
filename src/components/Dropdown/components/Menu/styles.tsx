import styled from "styled-components";
import { animated } from "react-spring";

const MainContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 0px 7px 20px rgba(0, 0, 0, 0),
    0 3px 5px 5px rgba(0, 0, 0, 0.03);
  border-radius: 5px;
  overflow-y: scroll;
  padding: 16px;
  justify-content: space-between;
  min-width: 180px;
`;

export { MainContainer };
