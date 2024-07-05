import { Meta, StoryFn } from "@storybook/react";

import { imageLikeSrc } from "@/shared/assets/icons/like";
import { Metric } from "./metric";

export default {
  component: Metric,
  args: {
    imgUrl: imageLikeSrc,
    label: "votes",
    value: 1200,
  },
} as Meta<typeof Metric>;

export const Base: StoryFn<typeof Metric> = (args) => <Metric {...args} />;

export const WithHref: StoryFn<typeof Metric> = (args) => (
  <Metric href="/like" {...args} />
);
