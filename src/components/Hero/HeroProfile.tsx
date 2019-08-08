import * as React from 'react';
import styled from 'styled-components';
import { HeroAttributes } from 'models/response';
import { Button } from 'components/shared/Button';
import CustomLoader from 'components/shared/Loader';
import { RESOURCE_ENDPOINT } from 'constants/EnvSetting';

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

const calcSum = (obj: object) => {
  return Object.values(obj).reduce((sum, c) => (sum += c), 0);
};

interface HeroProfileProps {
  match: any;
}

const HeroProfile = (props: HeroProfileProps) => {
  const [fetching, setFetching] = React.useState<boolean>(false);
  const [attr, updateAttr] = React.useState<HeroAttributes>({
    agi: 0,
    str: 0,
    int: 0,
    luk: 0,
  });
  const [maxSum, setMaxSum] = React.useState<number>(0);
  const currentSum = calcSum(attr);

  React.useEffect(() => {
    const fetchAttr = async () => {
      setFetching(true);
      const response = await fetch(
        `${RESOURCE_ENDPOINT}/heroes/${props.match.params.heroId}/profile`
      );
      const data: HeroAttributes = await response.json();
      updateAttr(data);
      setMaxSum(calcSum(data));
      setFetching(false);
    };
    fetchAttr();
  }, [props.match.params.heroId]);
  const configureAttr = (name: string, action: '+' | '-') => {
    const currentValue = attr[name];
    let updatedValue: number;
    if (action === '+') {
      if (maxSum <= currentSum) return;
      updatedValue = currentValue + 1;
    } else if (action === '-') {
      if (currentValue === 0) return;
      updatedValue = currentValue - 1;
    }
    updateAttr({
      ...attr,
      [name]: updatedValue,
    });
  };
  const saveAttr = () => {
    if (maxSum - currentSum !== 0) return;
    fetch(
      `https://hahow-recruit.herokuapp.com/heroes/${props.match.params.heroId}/profile`,
      {
        method: 'PATCH',
        body: JSON.stringify(attr),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      }
    ).then(() => console.log('patched!'));
  };
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
          <p className="mb-4">剩餘點數：{maxSum - currentSum}</p>
          <Button paddingX="48px" onClick={saveAttr}>
            儲存
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroProfile;
