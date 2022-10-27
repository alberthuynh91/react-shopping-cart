import React from 'react';

const Layout = ({ children }: { children: JSX.Element }) => {
  return <div className="container mx-auto p-10 mb-8">{children}</div>;
};

export default Layout;
