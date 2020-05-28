import styled, { keyframes, css } from "styled-components";

const meteorKeyframe = keyframes`
  0% {
    transform: rotate(30deg) translate(-100%, -100%);
    opacity: 1;
  }
  
  20% {
    transform: rotate(30deg) translate(100%, 100%);
    opacity: 0;
  }
  
  100% {
    transform: rotate(30deg) translate(100%, 100%);
    opacity: 0;
  }
`;

function createStarVariations() {
  let styles = "";

  for (let i = 0; i <= 25; i += 1) {
    styles += `
        &:nth-child(${i}) {
            opacity: ${randomInteger() / 100 + 0.1};
            transform: scale(${randomInteger() / 100 + 0.1});
      
        &:after {
          transform: translate(${randomInteger() * 3}px, ${
      randomInteger() * -0.12
    }px) scale(${randomInteger() * 0.02});
        }

        &:before {
          transform: translate(${randomInteger() * 8}px, ${
      randomInteger() * 0.6
    }px) scale(${randomInteger() * 0.012});
        }
      }
       `;
  }

  return css`
    ${styles}
  `;
}

function randomInteger() {
  return Math.floor(Math.random() * 100);
}

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #222327;
  overflow: hidden;
  z-index: 1;

  &,
  &:before,
  &:after {
    position: absolute;
    box-sizing: border-box;
  }
`;

const Meteors = styled.div`
  z-index: -10;
  width: 100%;
  height: 100%;
`;

const Meteor = styled.div`
  width: 0;
  height: 0;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-right: 100px solid #fff;
  border-image: linear-gradient(to left, #fff, transparent) 1 100%;
  border-radius: 0 2px 2px 0;
  transform: rotate(30deg);
  position: absolute;
  top: 23%;
  left: 70%;
  opacity: 0;
  animation: ${meteorKeyframe} 4s linear infinite;
  animation-delay: 1s;

  &:nth-child(2) {
    top: 13%;
    left: 14%;
    border-right-width: 100px;
    animation-delay: 2s;
  }

  &:nth-child(3) {
    top: 23%;
    left: 62%;
    border-right-width: 70px;
    animation-delay: 2.5s;
  }

  &:nth-child(4) {
    top: 64%;
    left: 72%;
    border-right-width: 50px;
    animation-delay: 1.3s;
  }
`;

const Stars = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1em;
  justify-items: center;
  align-items: center;
`;

const Star = styled.div`
  position: relative;

  &:after,
  &:before {
    content: "";
    display: inline-block;
  }

  &,
  &:after,
  &:before {
    width: 4px;
    height: 4px;
    background-color: #fff;
    border-radius: 50%;
  }

  ${createStarVariations()}
`;

export { MainContainer, Meteors, Meteor, Stars, Star };
