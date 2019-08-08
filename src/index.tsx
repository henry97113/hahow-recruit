import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HeroList from 'components/Hero/HeroList';
import HeroProfile from 'components/Hero/HeroProfile';
import './index.css';

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <div className="container mx-auto min-h-screen pt-24">
      <div className="mx-4">
        <HeroList />
        <HeroProfile />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
