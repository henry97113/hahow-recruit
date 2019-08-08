import * as React from 'react';
import { Hero, HeroAttributes } from 'models/response';
import { ActionTypes as opts } from 'constants/ActionTypes';

interface Action {
  type: string;
  payload?: any;
}
type Dispatch = (action: Action) => void;
interface HeroProviderProps {
  children: React.ReactNode;
}

const HeroContext = React.createContext<Hero[] | undefined>(undefined);
const HeroDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

const heroReducer = (state: Hero[], action: Action): Hero[] => {
  switch (action.type) {
    case opts.FETCH_HEROS:
      return [...state, ...action.payload];
    default:
      throw new Error(`action type ${action.type} unhandled`);
  }
};

const HeroProvider = (props: HeroProviderProps) => {
  const [state, dispatch] = React.useReducer(heroReducer, []);
  return (
    <HeroContext.Provider value={state} {...props}>
      <HeroDispatchContext.Provider value={dispatch}>
        {props.children}
      </HeroDispatchContext.Provider>
    </HeroContext.Provider>
  );
};

export { HeroContext, HeroDispatchContext, HeroProvider };
