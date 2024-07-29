"use client";

import dynamic, { Loader } from "next/dynamic";
import React, { useEffect } from "react";
import { ISafeAny } from "../types";

interface ICreateOptions<P> {
  clientSide: Loader<P>;
  serverSide: Loader<P>;
}
export function createHydrationComponent<P>(options: ICreateOptions<P>) {
  const { clientSide, serverSide } = options;

  const ClientSideComponent = dynamic(clientSide, {});

  const ServerSideComponent = dynamic(serverSide, {});

  const Component: React.FC<P> = (props) => {
    const [isClient, setIsClient] = React.useState(false);

    useEffect(() => {
      // this will not execute on the server
      setIsClient(true);
    }, []);

    // first, ServerSideComponent will be rendered on both client side and server side
    if (!isClient) {
      return (
        <div className="invisible">
          <ServerSideComponent {...(props as ISafeAny)} />
        </div>
      );
    }

    // ClientSideComponent will be rendered on the client side when the ServerSideComponent has been mounted
    return <ClientSideComponent {...(props as ISafeAny)} />;
  };

  Component.displayName = ClientSideComponent.displayName;

  return Component;
}
