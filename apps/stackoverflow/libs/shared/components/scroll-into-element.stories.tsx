import { Meta, StoryFn, StoryObj } from "@storybook/react";

import { ScrollIntoElement } from "./scroll-into-element";

export default {
  component: ScrollIntoElement,
  args: {},
} as Meta<typeof ScrollIntoElement>;

export const Base: StoryFn<typeof ScrollIntoElement> = (args) => (
  <div>
    <div className="h-screen bg-red-300" id="div-1"></div>
    <div className="h-screen bg-blue-300" id="div-2"></div>
    <ScrollIntoElement selector="#div-2" />
  </div>
);

export const Default: StoryObj = {};
