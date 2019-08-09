import * as React from 'react';

interface GlobalListenerProps {
  event: string;
  callback: EventListener | EventListenerObject;
}

const GlobalListener = ({ event, callback }: GlobalListenerProps) => {
  React.useEffect(() => {
    window.addEventListener(event, callback);
    return () => window.removeEventListener(event, callback);
  }, []);
  return <></>;
};

export default GlobalListener;
