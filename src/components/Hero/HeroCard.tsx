import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { fetchImage } from 'utilities/helpers';
const imgPlaceholder = require('images/image placeholder.png');
const placeholder = require('images/placeholder.png');

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
  const [url, setUrl] = React.useState('');
  React.useEffect(() => {
    const handleImageUrl = async () => {
      const link = await fetchImage(props.image);
      setUrl(link);
    };
    handleImageUrl();
  }, []);
  const [active, setActive] = React.useState(false);
  const configureActive = (match, location) => {
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
      isActive={configureActive}
    >
      <Card
        className="p-8 flex flex-col justify-center items-center"
        active={active}
      >
        <CardImage src={url || placeholder} />
        <h2 className="mt-12 text-2xl">{props.name}</h2>
      </Card>
    </NavLink>
  );
};

export default HeroCard;
