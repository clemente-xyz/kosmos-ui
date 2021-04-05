import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  height: 200px;
  width: 400px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
`;

export const MovableItemContainer = styled.div`
  border-radius: 10px;
  background-color: #fff3f3;
  height: 100px;
  width: 170px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
`;
