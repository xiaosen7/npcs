import React from "react";

interface ILayoutProps extends React.PropsWithChildren {}

const Layout: React.FC<ILayoutProps> = (props) => {
  return (
    <div className="flex h-screen items-center justify-center">
      {props.children}
    </div>
  );
};

export default Layout;
