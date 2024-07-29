import { Meta, StoryFn } from "@storybook/react";

import { NoResults } from "@/shared/components/no-result";

export default {
  component: NoResults,
  args: {
    description: `Be the first to break the silence! 🚀 Ask a Question and kickstart the
    discussion. our query could be the next big thing others learn from. Get
    involved! 💡`,
    link: "/ask-question",
    linkTitle: "Ask a Question",
    topic: "questions",
  },
} as Meta<typeof NoResults>;

export const Base: StoryFn<typeof NoResults> = (args) => (
  <NoResults {...args} />
);
