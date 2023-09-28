'use client'

import React from 'react';

type PropTypes = {
  children: React.ReactNode,
};

const AppBrowser: React.FC<PropTypes> = ({
  children,
}) => {
  const [isLoaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  if (!isLoaded) {
    return <div />;
  }

  return <div>{children}</div>;
};

export default AppBrowser;
