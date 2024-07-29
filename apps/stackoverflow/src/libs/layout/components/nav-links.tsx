"use client";
import { IComponentBaseProps, IDENTITY_FN, cn, mp } from "@/shared";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { NAV_LINKS } from "../constants";

export interface INavLinksProps extends IComponentBaseProps {
  renderItem?: (originalNode: React.ReactNode) => React.ReactNode;
}

export const NavLinks: React.FC<INavLinksProps> = (props) => {
  const { renderItem = IDENTITY_FN } = props;

  const pathname = usePathname() ?? "/";
  const searchParams = useSearchParams();
  return mp(
    props,
    <section className="flex flex-col gap-6 overflow-auto">
      {NAV_LINKS.map(({ imgURL, label, route }) => {
        const isActive =
          route === "/" ? pathname === "/" : pathname.includes(route);
        return (
          <React.Fragment key={route}>
            {renderItem(
              <Link
                className={cn(
                  isActive
                    ? "primary-gradient rounded-lg text-light-900"
                    : "text-dark300_light900",
                  "flex items-center justify-start gap-4 bg-transparent p-4",
                )}
                href={route}
              >
                <Image
                  alt={label}
                  className={cn(!isActive && "invert-colors")}
                  height={20}
                  src={imgURL}
                  width={20}
                />
                <p
                  className={cn(
                    isActive ? "base-bold" : "base-medium",
                    "max-lg:hidden",
                    "max-sm:block",
                  )}
                >
                  {label}
                </p>
              </Link>,
            )}
          </React.Fragment>
        );
      })}
    </section>,
  );
};
