import { Meta, StoryFn } from "@storybook/react";

import { mock } from "@/mock";
import { Filter, ModelFilter } from "@/shared/components/filter";
import { MODEL_CONFIG_MAP } from "@/shared/constants";
import { Prisma } from "@prisma/client";
import { keys } from "lodash-es";

export default {
  component: Filter,
  args: {
    placeholder: "Placeholder",
    options: mock.filterOption.createMany(10),
  },
} as Meta<typeof Filter>;

export const Base: StoryFn<typeof Filter> = (args) => <Filter {...args} />;
export const VariationTags = {
  args: {
    variant: "tags",
  },
};

export const ModelFilters = () => {
  return (
    <div className="flex flex-col gap-6">
      {keys(MODEL_CONFIG_MAP).map((name) => {
        return (
          <div key={name} className="flex flex-col gap-3">
            <p>Model Name: {name}</p>
            <ModelFilter name={name as Prisma.ModelName} />
          </div>
        );
      })}
    </div>
  );
};
