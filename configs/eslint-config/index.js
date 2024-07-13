module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "plugin:storybook/recommended",
    "prettier",
  ],
  rules: {
    "import/no-cycle": "error",
    "react/jsx-sort-props": [
      "error",
      {
        shorthandFirst: true,
        callbacksLast: true,
        reservedFirst: true,
      },
    ],
  },
  overrides: [
    {
      files: ["libs/shared/**"],
      rules: {
        "import/no-cycle": "off",
      },
    },
  ],
};
