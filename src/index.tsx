import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './components/Hello';
import './index.css';

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <div>
      <Hello />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
