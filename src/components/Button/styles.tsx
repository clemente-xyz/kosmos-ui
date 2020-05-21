/*eslint no-unexpected-multiline: 0*/
import styled from "styled-components";

const MainContainer = styled.button.attrs((props: any) => ({
  disabled: props.disabled,
}))<{
  backgroundColor: string;
  fontColor: string;
  fontSize: string;
  padding: string;
  boxShadow: string;
  backgroundColorOnHover: string;
  fontColorOnHover: string;
  border: string;
}>`
  display: flex;
  justify-content: center;
  padding: ${({ padding }) => padding};
  height: 40px;
  min-width: 120px;
  max-width: 180px;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 500;
  border: ${({ border }) => border};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ fontColor }) => fontColor};
  border-radius: 5px;
  transition: all 0.3s;

  box-shadow: ${({ boxShadow }) => boxShadow};

  &:hover {
    background-color: ${({ backgroundColorOnHover }) => backgroundColorOnHover};
    color: ${({ fontColorOnHover }) => fontColorOnHover};
    top: 1px;
    -webkit-transform: translateY(-1px);
    -ms-transform: translateY(-1px);
    transform: translateY(-1px);
    cursor: pointer;
  }

  &:active {
    outline: none;
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
  }

  &:disabled,
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export { MainContainer };
