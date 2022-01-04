export const slugFromPath = (path: string) =>
  path.match(/([\w-]+)\.(md|svx)/i)?.[1] ?? null;
