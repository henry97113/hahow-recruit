import * as React from 'react';
import { fetchImage } from 'utilities/helpers';

const useHeroCard = (imgUrl: string) => {
  const [url, setUrl] = React.useState('');
  React.useEffect(() => {
    const handleImageUrl = async () => {
      const link = await fetchImage(imgUrl);
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
  return { url, active, configureActive };
};

export default useHeroCard;
