import * as React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  paddingX?: string;
  paddingY?: string;
}

const Button = styled.button<ButtonProps>`
  align-self: center;
  background-color: #4299e1;
  border-radius: 0.25rem;
  color: #fff;
  display: block;
  font-weight: bold;
  justify-self: center;
  padding: 0.5rem 1rem;
  padding-top: ${props => props.paddingY || '0.5rem'};
  padding-bottom: ${props => props.paddingY || '0.5rem'};
  padding-left: ${props => props.paddingX || '1rem'};
  padding-right: ${props => props.paddingX || '1rem'};
  &:hover {
    background-color: #2b6cb0;
  }
`;

const Attribute = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(4, 60px);
  justify-content: center;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 640px) {
    justify-content: flex-start;
  }
`;

const Text = styled.div`
  align-self: center;
  justify-self: center;
`;

interface HeroProfileProps {}

const HeroProfile = (props: HeroProfileProps) => {
  return (
    <div className="block w-full border-solid border-4 border-gray-600 rounded p-8 sm:flex lg:px-32">
      <div className="attr mb-8 sm:mb-0 sm:flex-1">
        <Attribute>
          <Text>STR</Text>
          <Button>+</Button>
          <Text>5</Text>
          <Button>-</Button>
        </Attribute>
        <Attribute>
          <Text>STR</Text>
          <Button>+</Button>
          <Text>5</Text>
          <Button>-</Button>
        </Attribute>
        <Attribute>
          <Text>STR</Text>
          <Button>+</Button>
          <Text>0</Text>
          <Button>-</Button>
        </Attribute>
        <Attribute>
          <Text>STR</Text>
          <Button>+</Button>
          <Text>5</Text>
          <Button>-</Button>
        </Attribute>
      </div>
      <div className="func min-h-full sm:w-auto sm:flex-1 flex justify-center items-center sm:justify-end sm:items-end">
        <div className="items">
          <p className="mb-4">剩餘點數：30</p>
          <Button paddingX="48px">儲存</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroProfile;
