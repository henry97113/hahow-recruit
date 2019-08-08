import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { fetchImage } from 'utilities/helpers';
import { Card, CardImage, CardTitle } from 'components/shared/Card';
const placeholder = require('images/placeholder.png');

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
        <CardTitle className="mt-12">{props.name}</CardTitle>
      </Card>
    </NavLink>
  );
};

export default HeroCard;
