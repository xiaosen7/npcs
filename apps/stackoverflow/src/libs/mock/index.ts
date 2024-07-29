import type { IAnswer, IFilterOption, IQuestion, ITag, IUser } from "@/shared";
import { fakerEN as faker } from "@faker-js/faker";
import { isArray, random, range } from "lodash-es";

type ICreateMany<T> = (count: number | [number, number]) => T[];

export namespace mock {
  export function tag(): ITag {
    const id = faker.string.uuid();
    return {
      id,
      createdAt: date(),
      name: faker.lorem.word(),
      description: faker.lorem.paragraph(),
      creatorId: faker.string.uuid(),
    };
  }

  tag.createMany = createMany.bind(null, tag) as ICreateMany<ITag>;

  export function user(): IUser {
    const id = faker.string.uuid();
    return {
      id,
      email: faker.internet.email(),
      clerkId: faker.string.uuid(),
      imageUrl: faker.image.avatarGitHub(),
      fullName: faker.person.fullName(),
      createdAt: date(),
      username: faker.internet.userName(),
      bio: faker.person.bio(),
      location: faker.location.city(),
      portfolioWebsite: faker.internet.url(),
      reputation: faker.number.int(1000000),
    };
  }

  user.createMany = createMany.bind(null, user) as ICreateMany<IUser>;

  export function question(): IQuestion {
    const id = faker.string.uuid();

    return {
      id,
      title: faker.lorem.paragraph(1),
      content: faker.lorem.paragraphs({ max: 10, min: 1 }),
      createdAt: date(),
      authorId: faker.string.uuid(),
      views: random(0, 99999999),
    };
  }

  question.createMany = createMany.bind(
    null,
    question,
  ) as ICreateMany<IQuestion>;

  export function answer(): IAnswer {
    const id = faker.string.uuid();
    return {
      id,
      content: faker.lorem.paragraph({ min: 1, max: 3 }),
      createdAt: date(),
      authorId: faker.string.uuid(),
      questionId: faker.string.uuid(),
    };
  }

  answer.createMany = createMany.bind(null, answer) as ICreateMany<IAnswer>;

  export function date() {
    return new Date(random(2000, 2020), 1, 1);
  }

  export function filterOption(): IFilterOption {
    const value = faker.lorem.word();
    const label = value;

    return { value, label };
  }

  filterOption.createMany = createMany.bind(
    null,
    filterOption,
  ) as ICreateMany<IFilterOption>;

  export function createMany<T>(
    creator: () => T,
    count: number | [number, number],
  ): T[] {
    if (isArray(count)) {
      count = random(count[0], count[1]);
    }

    return range(count).map(() => creator());
  }
}
