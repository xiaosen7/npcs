import { IComponentBaseProps, cn, mp } from "@/shared";
import { ImageSiteLogo } from "@/shared/assets/images/site-logo";
import { ThemeSwitcher } from "@/theme";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { GlobalSearch, IGlobalSearchProps } from "./global-search";
import { MobileNav } from "./mobile-nav";

export interface INavbarProps extends IComponentBaseProps {
  globalSearch: IGlobalSearchProps;
}

export const Navbar: React.FC<INavbarProps> = (props) => {
  const { globalSearch } = props;
  return mp(
    props,
    <nav className="flex-between background-light900_dark200 shadow-light-300 w-full gap-5 p-6 sm:px-12 dark:shadow-none">
      <Link className="flex items-center gap-1" href="/">
        <ImageSiteLogo alt="DevFlow" height={23} width={23} />

        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev <span className="text-primary-500">Overflow</span>
        </p>
      </Link>

      <GlobalSearch
        {...globalSearch}
        className={cn(
          "max-w-[600px] flex-1 max-lg:hidden",
          globalSearch?.className,
        )}
      />

      <div className="flex-between gap-5">
        <ThemeSwitcher />

        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>,
  );
};
