import { IComponentBaseProps, IUser, mp } from "@/shared";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface IUserAvatarProps extends IComponentBaseProps {
  user: IUser;
  extra?: React.ReactNode;
  size?: "default" | "large";
}

export const UserAvatar: React.FC<IUserAvatarProps> = (props) => {
  const { user, extra, size } = props;
  const width = size === "large" ? 22 : 16;
  const fontSizeClassName =
    size === "large" ? "paragraph-semibold" : "body-medium";

  return mp(
    props,
    <Link className="flex items-center gap-1" href={`/profile/${user.id}`}>
      <Image
        alt="Author avatar"
        className="invert-colors rounded-full object-contain"
        height={width}
        src={user.imageUrl}
        width={width}
      />
      <span className={`${fontSizeClassName} text-dark400_light700`}>
        {user.username || user.fullName}
      </span>
      {extra}
    </Link>
  );
};
