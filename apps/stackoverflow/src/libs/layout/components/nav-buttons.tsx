import { Button, IComponentBaseProps, IDENTITY_FN, cn, mp } from "@/shared";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface INavButtonsProps extends IComponentBaseProps {
  renderItem?: (originNode: React.ReactNode) => React.ReactNode;
}

export const NavButtons: React.FC<INavButtonsProps> = (props) => {
  const { renderItem = IDENTITY_FN } = props;
  return mp(
    props,
    <div className="flex flex-col gap-3">
      {renderItem(
        <Link href={"/sign-in"}>
          <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3">
            <Image
              alt="Log In"
              className={cn("invert-colors", "lg:hidden", "max-sm:hidden")} // < 1024px
              height={20}
              src="/assets/icons/account.svg"
              width={20}
            />
            <span
              className={cn("primary-text-gradient max-lg:hidden max-sm:block")} // > 1024px
            >
              Log In
            </span>
          </Button>
        </Link>,
      )}

      {renderItem(
        <Link href={"/sign-up"}>
          <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
            <Image
              alt="Sign Up"
              className={cn("invert-colors lg:hidden max-sm:hidden")} // < 1024
              height={20}
              src="/assets/icons/sign-up.svg"
              width={20}
            />
            <span
              className={cn("max-lg:hidden max-sm:block")} // > 1024
            >
              Sign Up
            </span>
          </Button>
        </Link>,
      )}
    </div>,
  );
};
