import * as React from 'react';
import HeroCard from './HeroCard';
import styled from 'styled-components';
import { HeroContext, HeroDispatchContext } from 'context/Heros';
import { ActionTypes as opts } from 'constants/ActionTypes';
import { Hero } from 'models/response';

const HeroWrapper = styled.div`
  border: 4px solid #718096;
  border-radius: 4px;
`;

interface HeroListProps {}

const HeroList = (props: HeroListProps) => {
  const heros = React.useContext(HeroContext);
  const dispatch = React.useContext(HeroDispatchContext);
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://hahow-recruit.herokuapp.com/heroes');
      const data: Hero[] = await response.json();
      dispatch({ type: opts.FETCH_HEROS, payload: data });
    };
    fetchData();
  }, []);
  return (
    <div className="mb-12">
      <HeroWrapper className="block p-4 md:flex md:flex-wrap mb-12">
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
          <div>Fetching data...</div>
        )}
      </HeroWrapper>
    </div>
  );
};

export default HeroList;
