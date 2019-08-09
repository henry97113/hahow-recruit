import styled from 'styled-components';

interface CardProps {
  active?: boolean;
}

const Card = styled.div<CardProps>`
  border-width: 4px;
  border-style: solid;
  border-color: ${props => (props.active ? 'tomato' : '#718096')};
  border-radius: 4px;
  color: ${props => (props.active ? 'tomato' : 'inherit')};
`;

const CardImage = styled.img`
  max-width: 200px;
  border-radius: 50%;
`;

const CardTitle = styled.h2`
  font-size: 24px;
`;

export { Card, CardImage, CardTitle };
