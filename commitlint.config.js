const scopes = import("@npcs/get-changed-packages/esm/pnpm.js").then((x) =>
  x.getChangedPackages()
);

/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  prompt: {
    scopes,
    enableMultipleScopes: true,
    defaultScope: scopes,
    allowEmptyScopes: false,
  },
};
