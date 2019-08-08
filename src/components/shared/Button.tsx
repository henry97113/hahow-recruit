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

export { Button };
