import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";

addons.setConfig({
  theme: {
    brandTitle: "Storybook for @npcs/notes",
    ...themes.dark,
  },
});
