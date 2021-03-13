import styled from "styled-components";

const MainContainer = styled.button.attrs(
  (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => ({
    disabled: props.disabled,
  })
)<{
  backgroundColor: string;
  fontColor: string;
  fontSize: string;
  padding: string;
  backgroundColorOnHover: string;
  fontColorOnHover: string;
  border: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ padding }) => padding};
  min-width: 120px;
  max-width: 180px;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 700;
  border: ${({ border }) => border};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ fontColor }) => fontColor};
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ backgroundColorOnHover }) => backgroundColorOnHover};
    color: ${({ fontColorOnHover }) => fontColorOnHover};
    cursor: pointer;
  }

  &:active {
    outline: none;
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
