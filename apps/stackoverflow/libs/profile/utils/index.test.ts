import { calcBadges } from ".";

describe("profile utils", () => {
  test("calcBadges", () => {
    const badges = calcBadges({
      answers: 10,
      answerUpVotes: 10,
      questions: 10,
      questionUpVotes: 10,
      views: 100000,
    });
    expect(badges).toMatchInlineSnapshot(`
      {
        "bronze": 5,
        "gold": 1,
        "silver": 1,
      }
    `);
  });
});
