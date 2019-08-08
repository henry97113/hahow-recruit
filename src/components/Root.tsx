import * as React from 'react';
import { renderRoutes } from 'react-router-config';

interface RootProps {
  route: any;
}

const Root = (props: RootProps) => {
  return (
    <>
      <h1 className="text-4xl text-center mb-12">SUPERHEROS!</h1>
      {renderRoutes(props.route.routes)}
    </>
  );
};

export default Root;
