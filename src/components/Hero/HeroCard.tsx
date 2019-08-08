import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const imgPlaceholder = require('images/image placeholder.png');

const Card = styled.div`
  border: 4px solid #718096;
  border-radius: 4px;
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
  return (
    <NavLink
      to={`/heros/${props.id}`}
      className="block w-full md:w-2/4 mb-2 lg:w-1/4 px-1"
    >
      <Card className="p-8 flex flex-col justify-center items-center">
        <CardImage src={props.image || imgPlaceholder} />
        <h2 className="mt-12 text-2xl">{props.name}</h2>
      </Card>
    </NavLink>
  );
};

export default React.memo(HeroCard);
