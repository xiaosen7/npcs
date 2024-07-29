import { Badge, IComponentBaseProps, ITag, IUser, mp } from "@/shared";
import { Tag } from "@/tag";
import Image from "next/image";
import Link from "next/link";

export interface IUserCardProps extends IComponentBaseProps {
  user: IUser;
  tags: ITag[];
}

export const UserCard = (props: IUserCardProps) => {
  const { user, tags } = props;
  return mp(
    props,

    <article className="shadow-light100_darknone  background-light900_dark200 light-border max-xs:min-w-full xs:w-[260px] flex flex-col items-center justify-center rounded-2xl border p-8">
      <Link
        className="flex flex-col items-center justify-center"
        href={`/profile/${user.id}`}
      >
        <Image
          alt="User profile picture"
          className="rounded-full"
          height={100}
          src={user.imageUrl}
          width={100}
        />
        <div className="mt-4 text-center">
          <h3 className="h3-bold text-dark200_light900 line-clamp-1">
            {user.fullName}
          </h3>
          <p className="body-regular text-dark500_light500 mt-2">
            @{user.username}
          </p>
        </div>
      </Link>

      <div className="mt-5">
        {tags.length > 0 ? (
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <Tag key={tag.id} tag={tag} />
            ))}
          </div>
        ) : (
          <Badge>No tags yet</Badge>
        )}
      </div>
    </article>,
  );
};
