import fs from "node:fs";

function hasPackageJson(dir: string | URL) {
  return fs.existsSync(new URL("package.json", dir));
}

/**
 * walk up the directory tree until we find a package.json
 *
 * @param url something like file:///a/b/c
 * @returns something like file:///a/b/c
 */
export function getRootUrl(url: string | URL): string | URL {
  const parsedUrl = new URL(url);

  if (hasPackageJson(parsedUrl)) {
    return parsedUrl;
  }

  if (parsedUrl.pathname === "/") {
    throw new Error("Could not find package.json");
  }

  return getRootUrl(new URL("..", parsedUrl));
}
