import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';

const Card = styled.div`
  border: 4px solid #718096;
  border-radius: 4px;
`;

const CardImage = styled.img`
  max-width: 200px;
  border-radius: 50%;
`;

interface HeroCardProps {}

const HeroCard = (props: HeroCardProps) => {
  return (
    <div className="w-full md:w-2/4 mb-2 lg:w-1/4 px-1">
      <Card className="p-8 flex flex-col justify-center items-center">
        <CardImage src="https://fakeimg.pl/200/" />
        <h2 className="mt-12 text-2xl">Hero Name</h2>
      </Card>
    </div>
  );
};

export default HeroCard;
