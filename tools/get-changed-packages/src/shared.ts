import { execSync } from "child_process";
import { join } from "path";

export interface IPkg {
  name: string;
  path: string;
}
export function filterChangedPkgs(pkgs: IPkg[], unCommitFiles: string[]) {
  const sortedPkgs = pkgs.slice().sort((a, b) => comparePath(a.path, b.path));
  const changedPkgs: string[] = [];

  for (const file of unCommitFiles) {
    for (let pi = 0; pi < sortedPkgs.length; pi++) {
      const { name, path } = sortedPkgs[pi];
      if (file.startsWith(path)) {
        sortedPkgs.splice(pi, 1);
        changedPkgs.push(name);
        break;
      }
    }

    if (sortedPkgs.length === 0) {
      return changedPkgs;
    }
  }

  return changedPkgs;
}

export function comparePath(a: string, b: string) {
  return b.length - a.length;
}

export function getUnCommitFiles() {
  const gitRoot = execSync("git rev-parse --show-toplevel").toString().trim();
  const statusString = execSync("git status -s").toString().trim();
  return statusString
    .split(/\n\r?/g)
    .filter(Boolean)
    .map((x) => x.split(/\s+/)[1])
    .map((x) => join(gitRoot, x));
}
