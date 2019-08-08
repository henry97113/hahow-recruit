import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import HeroCard from './HeroCard';
import styled from 'styled-components';
import CustomLoader from 'components/shared/Loader';
import { useHero } from 'context/Heros';
import { ActionTypes as opts } from 'constants/ActionTypes';
import { Hero } from 'models/response';
import { RESOURCE_ENDPOINT } from 'constants/EnvSetting';

const HeroWrapper = styled.div`
  border: 4px solid #718096;
  border-radius: 4px;
  min-height: 400px;
`;

interface HeroListProps {
  route: any;
}

const HeroList = (props: HeroListProps) => {
  const [heros, dispatch] = useHero();
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${RESOURCE_ENDPOINT}/heroes`);
      const data: Hero[] = await response.json();
      dispatch({ type: opts.FETCH_HEROS, payload: data });
    };
    if (heros.length === 0) {
      fetchData();
    }
  }, [heros, dispatch]);
  return (
    <div className="mb-12">
      <HeroWrapper className="block p-4 md:flex md:flex-wrap mb-12 relative">
        {heros.length > 0 ? (
          heros.map(hero => {
            return (
              <HeroCard
                key={hero.id}
                id={hero.id}
                name={hero.name}
                image={hero.image}
              />
            );
          })
        ) : (
          <div className="absolute inset-0 z-10 bg-gray-400 flex justify-center items-center">
            <CustomLoader color="tomato" backgroundColor="#ccc" />
          </div>
        )}
      </HeroWrapper>
      {renderRoutes(props.route.routes)}
    </div>
  );
};

export default HeroList;
