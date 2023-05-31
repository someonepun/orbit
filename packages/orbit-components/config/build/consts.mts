export const OUTPUT_PATTERNS = [
  "lib",
  "es",
  "umd",
  ".out",
  "src/icons/*.{ts?(x),d.ts}",
  "orbit-icons-font",
  "orbit-icons-font.zip",
  "orbit-svgs.zip",
];

export const COMPILE_IGNORE_PATTERNS = [
  "**/RenderInRtl.tsx",
  "**/*.d.ts",
  "**/*.stories.*",
  "**/*.test.*",
  "**/__tests__/**/*",
  "**/__typetests__/**/*",
];

export const DECLARATIONS_IGNORE_PATTERN = ["**/RenderInRtl.{tsx,d.ts}"];
