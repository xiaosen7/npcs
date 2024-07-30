import { ImageDarkIllustration } from "@/shared/assets/images/dark-illustration";
import { ImageLightIllustration } from "@/shared/assets/images/light-illustration";
import Link from "next/link";
import React from "react";
import { Button, IComponentBaseProps } from "../ui";
import { mp } from "../utils";

export interface INoResultsProps extends IComponentBaseProps {
  /**
   * @default 'Results'
   */
  topic?: React.ReactNode;
  description: React.ReactNode;
  link: string;
  linkTitle: string;
}

export const NoResults: React.FC<INoResultsProps> = (props) => {
  const { topic = "Results", description, link, linkTitle } = props;
  return mp(
    props,
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <ImageLightIllustration
        alt="No result illustration"
        className="block object-contain dark:hidden"
        height={200}
        width={270}
      />
      <ImageDarkIllustration
        alt="No result illustration"
        className="hidden object-contain dark:flex"
        height={200}
        width={270}
      />

      <h2 className="h2-bold text-dark200_light900 mt-8 capitalize">
        No {topic} Found
      </h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {description}
      </p>

      <Link href={link}>
        <Button className="min-h-[46px]" variant={"primary"}>
          {linkTitle}
        </Button>
      </Link>
    </div>,
  );
};
