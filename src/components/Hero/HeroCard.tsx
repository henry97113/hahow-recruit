import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const imgPlaceholder = require('images/image placeholder.png');

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

interface HeroCardProps {
  id: string;
  name: string;
  image: string;
}

const HeroCard = (props: HeroCardProps) => {
  const [active, setActive] = React.useState(false);
  const oddEvent = (match, location) => {
    if (match) {
      setActive(match.isExact);
      return true;
    } else {
      setActive(false);
    }
    return false;
  };
  return (
    <NavLink
      to={`/heros/${props.id}`}
      className="block w-full md:w-2/4 mb-2 lg:w-1/4 px-1"
      isActive={oddEvent}
    >
      <Card
        className="p-8 flex flex-col justify-center items-center"
        active={active}
      >
        <CardImage src={props.image || imgPlaceholder} />
        <h2 className="mt-12 text-2xl">{props.name}</h2>
      </Card>
    </NavLink>
  );
};

export default React.memo(HeroCard);
