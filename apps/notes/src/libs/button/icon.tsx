import * as React from "react";

import { cn, mp } from "@npc/shared/react-helpers";

export interface IIconButtonProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

export const ButtonIcon: React.FC<IIconButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return mp(
    props,
    <div
      {...props}
      className={cn(
        "rounded-lg size-[50px] cursor-pointer items-center justify-center bg-secondary duration-75 active:scale-95",
        !props.hidden && "inline-flex",
      )}
    >
      {children}
    </div>,
  );
};
