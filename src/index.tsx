import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from 'routing/routes';
import { HeroProvider } from 'context/Heros';
import './index.css';

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <div className="container mx-auto min-h-screen pt-24">
      <div className="mx-4">
        <HeroProvider>
          <Router>{renderRoutes(routes)}</Router>
        </HeroProvider>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
