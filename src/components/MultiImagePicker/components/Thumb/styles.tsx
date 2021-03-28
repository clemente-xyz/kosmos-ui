import styled from 'styled-components';

export const Container = styled.article`
  display: inline-flex;
  border-radius: 2px;
  border: 1px solid #eaeaea;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 100px;
  height: 100px;
  padding: 4px;
  box-sizing: border-box;
  position: relative;
`;

export const ThumbContainer = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

export const CloseIconContainer = styled.div`
  opacity: 0;
  position: absolute;
  top: -7px;
  right: -7px;
  padding: 6px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  transition: 0.3s all;
  background-color: #4a4a4a;
  cursor: pointer;

  ${Container}:hover & {
    opacity: 1;
  }

  &:hover {
    top: -6px;
    transform: scale(0.98);
  }

  &:active {
    transform: scale(0.98);
  }
`;
