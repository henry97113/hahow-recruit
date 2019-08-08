import * as React from 'react';
import HeroCard from './HeroCard';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  border: 4px solid #718096;
  border-radius: 4px;
`;

interface HeroListProps {}

const HeroList = (props: HeroListProps) => {
  return (
    <div className="mb-12">
      <HeroWrapper className="block p-4 md:flex md:flex-wrap md:-mx-1">
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </HeroWrapper>
    </div>
  );
};

export default HeroList;
