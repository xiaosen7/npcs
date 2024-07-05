import { mock } from ".";

describe("mock", () => {
  test("user", () => {
    const user = mock.user();
    expect(user).toEqual({
      id: expect.any(String),
      email: expect.any(String),
      clerkId: expect.any(String),
      imageUrl: expect.any(String),
      fullName: expect.any(String),
      createdAt: expect.any(Date),
      username: expect.any(String),
      bio: expect.any(String),
      location: expect.any(String),
      portfolioWebsite: expect.any(String),
      reputation: expect.any(Number),
    });
  });

  test("tag", () => {
    const tag = mock.tag();
    expect(tag).toEqual({
      id: expect.any(String),
      createdAt: expect.any(Date),
      name: expect.any(String),
      description: expect.any(String),
    });
  });

  test("question", () => {
    const question = mock.question();
    expect(question).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      content: expect.any(String),
      createdAt: expect.any(Date),
      authorId: expect.any(String),
      views: expect.any(Number),
    });
  });

  test("answer", () => {
    const answer = mock.answer();
    expect(answer).toEqual({
      id: expect.any(String),
      content: expect.any(String),
      createdAt: expect.any(Date),
      authorId: expect.any(String),
      questionId: expect.any(String),
    });
  });

  test("create", () => {
    const tags = mock.createMany(mock.tag, 3);
    expect(tags).toHaveLength(3);
    tags.forEach((tag) => {
      expect(tag).toEqual({
        id: expect.any(String),
        createdAt: expect.any(Date),
        name: expect.any(String),
        description: expect.any(String),
      });
    });
  });
});
