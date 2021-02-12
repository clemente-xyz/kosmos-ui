import React, { ReactNode, CSSProperties } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  will-change: transform;
  user-select: none;
  position: relative;
`;

export default function CarouselSlide(props: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return <MainContainer style={props.style}>{props.children}</MainContainer>;
}
