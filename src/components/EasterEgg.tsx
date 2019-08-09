import * as React from 'react';
import GlobalListener from 'components/shared/GlobalListener';

interface EasterEggProps {
  pattern: number[];
}

const surprise = () => {
  alert('What a surprise! You found it!');
};

const checkIdentical = (arr: number[], targetArr: number[]) => {
  if (arr.length !== targetArr.length) return false;
  const result = targetArr.reduce(
    (prev, current, index) => current === arr[index],
    false
  );
  return result;
};

const EasterEgg = ({ pattern }: EasterEggProps) => {
  const keyStrokes: number[] = [];
  const handleKeyUp = e => {
    const maxLength = pattern.length;
    if (keyStrokes.length === maxLength) {
      keyStrokes.shift();
    }
    keyStrokes.push(e.keyCode);
    if (checkIdentical(keyStrokes, pattern)) {
      surprise();
    }
  };
  return (
    <>
      <GlobalListener event={'keyup'} callback={handleKeyUp} />
    </>
  );
};

export default React.memo(EasterEgg);
