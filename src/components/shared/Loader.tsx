import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const Background = styled.div<{ backgroundColor: string }>`
  background-color: ${props => props.backgroundColor};
`;

const rotate = keyframes`
  0% {
    top: 6px;
    height: 51px;
  }
  50%,
  100% {
    top: 19px;
    height: 26px;
  }
`;

const Loader = styled.div<{ color: string }>`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  & div {
    display: inline-block;
    position: absolute;
    left: 6px;
    width: 13px;
    background: ${props => props.color};
    animation: ${rotate} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  & div:nth-child(1) {
    left: 6px;
    animation-delay: -0.24s;
  }
  & div:nth-child(2) {
    left: 26px;
    animation-delay: -0.12s;
  }
  & div:nth-child(3) {
    left: 45px;
    animation-delay: 0;
  }
`;

interface CustomLoaderProps {
  backgroundColor?: string;
  color?: string;
}

/**
 * CustomLoader 外層的元素需要有屬性 position: relative 作為錨點
 */
const CustomLoader = (props: CustomLoaderProps) => {
  return (
    <Background
      className="absolute inset-0 z-10 flex justify-center items-center"
      backgroundColor={props.backgroundColor || '#cbd5e0'}
    >
      <Loader color={props.color || '#cef'}>
        <div></div>
        <div></div>
        <div></div>
      </Loader>
    </Background>
  );
};

export default CustomLoader;
