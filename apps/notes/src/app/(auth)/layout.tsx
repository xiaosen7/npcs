import React from "react";

interface ILayoutProps extends React.PropsWithChildren {}

const Layout: React.FC<ILayoutProps> = (props) => {
  return <div>{props.children}</div>;
};

export default Layout;
