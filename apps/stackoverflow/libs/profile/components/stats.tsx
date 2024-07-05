import { IComponentBaseProps, formatNumber, mp } from "@/shared";
import Image from "next/image";
import React from "react";

export interface IProfileStatsProps extends IComponentBaseProps {
  totalQuestions: number;
  totalAnswers: number;
  badges: {
    gold: number;
    silver: number;
    bronze: number;
  };
  reputation: number;
}

export const ProfileStats: React.FC<IProfileStatsProps> = (props) => {
  const {
    totalQuestions,
    totalAnswers,
    badges: { gold, silver, bronze },
    reputation,
  } = props;
  return mp(
    props,
    <div className="mt-10">
      <h4 className="h3-semibold text-dark200_light900">
        Stats - {reputation}
      </h4>

      <div className="mt-5 grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-4">
        <div className="light-border background-light900_dark300 flex flex-wrap items-center justify-evenly gap-4 rounded-md border p-6 shadow-light-300 dark:shadow-dark-200">
          <div>
            <p className="paragraph-semibold text-dark200_light900">
              {formatNumber(totalQuestions)}
            </p>
            <p className="body-medium text-dark400_light700">Questions</p>
          </div>
          <div>
            <p className="paragraph-semibold text-dark200_light900">
              {formatNumber(totalAnswers)}
            </p>
            <p className="body-medium text-dark400_light700">Answers</p>
          </div>
        </div>

        <StatsCard
          imgUrl="/assets/icons/gold-medal.svg"
          title="Gold Badges"
          value={gold}
        />

        <StatsCard
          imgUrl="/assets/icons/silver-medal.svg"
          title="Silver Badges"
          value={silver}
        />

        <StatsCard
          imgUrl="/assets/icons/bronze-medal.svg"
          title="Bronze Badges"
          value={bronze}
        />
      </div>
    </div>
  );
};

const StatsCard = ({
  imgUrl,
  value,
  title,
}: {
  imgUrl: string;
  value: number;
  title: string;
}) => {
  return (
    <div className="light-border background-light900_dark300 flex flex-wrap items-center justify-start gap-4 rounded-md border p-6 shadow-light-300 dark:shadow-dark-200">
      <Image alt={title} height={50} src={imgUrl} width={40} />
      <div>
        <p className="paragraph-semibold text-dark200_light900">{value}</p>
        <p className="body-medium text-dark400_light700">{title}</p>
      </div>
    </div>
  );
};
