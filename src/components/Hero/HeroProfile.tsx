import * as React from 'react';
import styled from 'styled-components';
import { Button } from 'components/shared/Button';
import CustomLoader from 'components/shared/Loader';
import useHeroProfile from 'hooks/hero-profile';

const Attribute = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(4, 60px);
  justify-content: center;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 640px) {
    justify-content: flex-start;
  }
`;

const Text = styled.div`
  align-self: center;
  justify-self: center;
`;

interface HeroProfileProps {
  match: any;
}

const HeroProfile = (props: HeroProfileProps) => {
  const {
    fetching,
    attr,
    configureAttr,
    saveAttr,
    pointsLeft,
  } = useHeroProfile(props.match.params.heroId);
  return (
    <div className="block border-solid border-4 border-gray-600 rounded p-8 sm:flex lg:px-32 relative">
      {fetching && <CustomLoader color="tomato" backgroundColor="#ccc" />}
      <div className="attr mb-8 sm:mb-0 sm:flex-1">
        {Object.keys(attr).map((name, index) => (
          <Attribute key={index}>
            <Text>{name.toUpperCase()}</Text>
            <Button onClick={() => configureAttr(name, '+')}>+</Button>
            <Text>{attr[name]}</Text>
            <Button onClick={() => configureAttr(name, '-')}>-</Button>
          </Attribute>
        ))}
      </div>
      <div className="func min-h-full sm:w-auto sm:flex-1 flex justify-center items-center sm:justify-end sm:items-end">
        <div className="items">
          <p className="mb-4">剩餘點數：{pointsLeft}</p>
          <Button
            paddingX="48px"
            onClick={saveAttr}
            disabled={pointsLeft !== 0}
          >
            儲存
          </Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroProfile);
