import styled from "styled-components";

import theme from "../../../../theme";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

const WeekDayLabelsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  margin-bottom: 10px;
  font-size: 10px;
`;

const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
`;

const Button = styled.button`
  background: none;
  color: ${theme.colorsPalette.gray.default};
  border: none;
  font: inherit;
  border-radius: 50%;
  cursor: pointer;
  outline: inherit;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    background-color: ${theme.colorsPalette.gray.superLight};
    -webkit-transform: translateY(-1px);
    -ms-transform: translateY(-1px);
    transform: translateY(-1px);
  }
`;

export { Button, DaysContainer, HeaderContainer, WeekDayLabelsContainer };
