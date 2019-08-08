import * as React from 'react';
import { HeroAttributes } from 'models/response';
import { RESOURCE_ENDPOINT } from 'constants/EnvSetting';

const calcSum = (obj: object) => {
  return Object.values(obj).reduce((sum, c) => (sum += c), 0);
};

const useHeroProfile = (heroId: string) => {
  const [fetching, setFetching] = React.useState<boolean>(false);
  const [attr, updateAttr] = React.useState<HeroAttributes>({
    agi: 0,
    str: 0,
    int: 0,
    luk: 0,
  });
  const [maxSum, setMaxSum] = React.useState<number>(0);
  const currentSum = calcSum(attr);
  let pointsLeft = maxSum - currentSum;

  React.useEffect(() => {
    const fetchAttr = async () => {
      setFetching(true);
      const response = await fetch(
        `${RESOURCE_ENDPOINT}/heroes/${heroId}/profile`
      );
      const data: HeroAttributes = await response.json();
      updateAttr(data);
      setMaxSum(calcSum(data));
      setFetching(false);
    };
    fetchAttr();
  }, [heroId]);
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
    fetch(`${RESOURCE_ENDPOINT}/heroes/${heroId}/profile`, {
      method: 'PATCH',
      body: JSON.stringify(attr),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }).then(() => console.log('patched!'));
  };

  return { fetching, attr, configureAttr, saveAttr, pointsLeft };
};

export default useHeroProfile;
