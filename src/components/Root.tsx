import * as React from 'react';
import { Link } from 'react-router-dom';

interface RootProps {
  route: any;
}

const Root = (props: RootProps) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center">
      <h1 className="text-4xl">SUPERHEROS!</h1>
      <Link to="/heros" replace className="block mb-12 text-blue-400 text-2xl">
        Click me to see superheros!
      </Link>
    </div>
  );
};

export default Root;
