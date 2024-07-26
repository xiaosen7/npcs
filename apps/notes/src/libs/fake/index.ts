import { Note } from ".prisma/client";
import { fakerEN as faker } from "@faker-js/faker";
import { isArray, random, range } from "lodash-es";

type ICreateMany<T> = (count: number | [number, number]) => T[];

export namespace fake {
  export function note(): Note {
    const id = faker.string.uuid();
    return {
      id,
      title: faker.lorem.paragraph(1),
      content: faker.lorem.paragraph(),
      color: faker.color.rgb(),
      authorId: faker.string.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    };
  }

  note.createMany = createMany.bind(null, note) as ICreateMany<Note>;

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
