import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const ArrowsContainer = styled.div`
  top: 50%;
  position: absolute;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
`;

export const BulletsContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1;
`;

export const BulletList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 15px 0;
`;
