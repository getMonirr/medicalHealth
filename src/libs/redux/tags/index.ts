export const tags = {
  USER: "USER",
} as const;

// generate tags array
export const appTags = Object.values(tags);
