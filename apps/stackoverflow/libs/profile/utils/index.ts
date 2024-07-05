import { Entries } from "type-fest";
import { IBadges } from "../types";

const BADGE_CRITERIA = {
  questions: {
    bronze: 10,
    silver: 50,
    gold: 100,
  },
  answers: {
    bronze: 10,
    silver: 50,
    gold: 100,
  },
  answerUpVotes: {
    bronze: 10,
    silver: 50,
    gold: 100,
  },
  questionUpVotes: {
    bronze: 10,
    silver: 50,
    gold: 100,
  },
  views: {
    bronze: 1000,
    silver: 10000,
    gold: 100000,
  },
} as const;

type ICalcBadgesOptions = {
  [key in keyof typeof BADGE_CRITERIA]: number;
};
export function calcBadges(options: ICalcBadgesOptions) {
  const badges: IBadges = {
    gold: 0,
    silver: 0,
    bronze: 0,
  };

  (Object.entries(options) as Entries<ICalcBadgesOptions>).forEach(
    ([type, count]) => {
      const badgeLevels = BADGE_CRITERIA[type];

      (Object.keys(badgeLevels) as (keyof typeof badgeLevels)[]).forEach(
        (level) => {
          if (count >= badgeLevels[level]) {
            badges[level] += 1;
          }
        }
      );
    }
  );

  return badges;
}
