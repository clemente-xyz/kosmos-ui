import styled from 'styled-components';

export const Container = styled.article`
  display: inline-flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  border-radius: 4px;

  &:hover {
    background: linear-gradient(to top, #000000, transparent);
  }
`;

export const ThumbContainer = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

export const HoverContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, #0000002e, transparent);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 4px;
  transition: 0.3s all;

  ${Container}:hover & {
    opacity: 1;
  }
`;

export const IconsContainer = styled.div`
  z-index: 2;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  padding: 6px;
  border-radius: 50%;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 12px);
  transition: 0.3s all;
  cursor: pointer;

  ${Container}:hover & {
    opacity: 1;
  }

  &:hover {
    top: -2px;
    transform: scale(0.98);
  }

  &:active {
    transform: scale(0.98);
  }
`;
