import styled from "styled-components";

const MainContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  border-radius: 5px;
`;

const Slide = styled.img`
  height: 100%;
  width: 100%;
  transition: 0.5s;
  margin: 0;
  padding: 0;
`;

const Button = styled.button<{ direction: "left" | "right" }>`
  position: absolute;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colorsPalette.white.default};
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  padding: 8px;
  background: ${({ theme }) => theme.colorsPalette.black.default};
  opacity: 0.3;
  display: flex;
  align-items: center;

  ${({ direction }) => {
    if (direction === "left") {
      return `left: 12px;`;
    } else if (direction === "right") {
      return `right: 12px;`;
    }

    return ``;
  }};
`;

export { MainContainer, Slide, Button };
