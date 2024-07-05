import {
  Button,
  IComponentBaseProps,
  IUser,
  Linkable,
  cn,
  formatJoinedAt,
  mp,
} from "@/shared";
import { imageCalendarSrc } from "@/shared/assets/icons/calendar";
import { imageLinkSrc } from "@/shared/assets/icons/link";
import { imageLocationSrc } from "@/shared/assets/icons/location";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface IProfileBaseProps extends IComponentBaseProps {
  user: IUser;
  editable?: boolean;
}

export const ProfileBase: React.FC<IProfileBaseProps> = (props) => {
  const { user, editable } = props;
  return mp(
    props,
    <div>
      <div className="flex flex-col items-start gap-4 lg:flex-row">
        <Image
          alt="profile picture"
          className="rounded-full object-cover"
          height={140}
          src={user.imageUrl}
          width={140}
        />

        <div className="mt-3">
          <h2 className="h2-bold text-dark100_light900">{user.fullName}</h2>
          <p className="paragraph-regular text-dark200_light800">
            @{user.username}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-start gap-5">
            {user.portfolioWebsite && (
              <ProfileLink href={user.portfolioWebsite} iconSrc={imageLinkSrc}>
                {user.portfolioWebsite}
              </ProfileLink>
            )}

            {user.location && (
              <ProfileLink iconSrc={imageLocationSrc}>
                {user.location}
              </ProfileLink>
            )}

            <ProfileLink iconSrc={imageCalendarSrc}>
              {formatJoinedAt(user.createdAt)}
            </ProfileLink>
          </div>

          {user.bio && (
            <p className="paragraph-regular text-dark400_light800 mt-8">
              {user.bio}
            </p>
          )}
        </div>
      </div>

      {editable && (
        <div className="flex justify-end max-sm:mb-5 max-sm:w-full sm:mt-3">
          <Link href="/profile/edit">
            <Button className="paragraph-medium btn-secondary text-dark300_light900 min-h-[46px] min-w-[175px] px-4 py-3">
              Edit Profile
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

function ProfileLink(props: {
  iconSrc: string;
  href?: string;
  children: React.ReactNode;
}) {
  const { iconSrc, href, children } = props;
  return (
    <div className="flex-center gap-1">
      <Image alt="icon" height={20} src={iconSrc} width={20} />

      <Linkable href={href} target="_blank">
        <span
          className={cn(
            href
              ? "paragraph-medium text-blue-500"
              : "paragraph-medium text-dark400_light700"
          )}
        >
          {children}
        </span>
      </Linkable>
    </div>
  );
}
