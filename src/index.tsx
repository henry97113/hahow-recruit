import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/main.scss';

import Hello from './components/Hello';

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <div>
      <Hello />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
