import cx from "clsx";

import { QUERIES } from "../../utils/mediaQuery/consts";
import type { Direction } from "../../Stack/types";

export enum SPACING {
  none = "none",
  XXXSmall = "XXXSmall",
  XXSmall = "XXSmall",
  XSmall = "XSmall",
  small = "small",
  medium = "medium",
  large = "large",
  XLarge = "XLarge",
  XXLarge = "XXLarge",
  XXXLarge = "XXXLarge",
  reverse = "reverse",
}

export const horizontalTokens: {
  [K in QUERIES | SPACING]: K extends QUERIES ? Record<SPACING, string> : string;
} = {
  [SPACING.none]: "space-x-none",
  [SPACING.XXXSmall]: "space-x-xxxs",
  [SPACING.XXSmall]: "space-x-xxs",
  [SPACING.XSmall]: "space-x-xs",
  [SPACING.small]: "space-x-sm",
  [SPACING.medium]: "space-x-md",
  [SPACING.large]: "space-x-lg",
  [SPACING.XLarge]: "space-x-xl",
  [SPACING.XXLarge]: "space-x-xxl",
  [SPACING.XXXLarge]: "space-x-xxxl",
  [SPACING.reverse]: "space-x-reverse",
  [QUERIES.MEDIUMMOBILE]: {
    [SPACING.none]: "mm:space-x-none",
    [SPACING.XXXSmall]: "mm:space-x-xxxs",
    [SPACING.XXSmall]: "mm:space-x-xxs",
    [SPACING.XSmall]: "mm:space-x-xs",
    [SPACING.small]: "mm:space-x-sm",
    [SPACING.medium]: "mm:space-x-md",
    [SPACING.large]: "mm:space-x-lg",
    [SPACING.XLarge]: "mm:space-x-xl",
    [SPACING.XXLarge]: "mm:space-x-xxl",
    [SPACING.XXXLarge]: "mm:space-x-xxxl",
    [SPACING.reverse]: "mm:space-x-reverse",
  },
  [QUERIES.LARGEMOBILE]: {
    [SPACING.none]: "lm:space-x-none",
    [SPACING.XXXSmall]: "lm:space-x-xxxs",
    [SPACING.XXSmall]: "lm:space-x-xxs",
    [SPACING.XSmall]: "lm:space-x-xs",
    [SPACING.small]: "lm:space-x-sm",
    [SPACING.medium]: "lm:space-x-md",
    [SPACING.large]: "lm:space-x-lg",
    [SPACING.XLarge]: "lm:space-x-xl",
    [SPACING.XXLarge]: "lm:space-x-xxl",
    [SPACING.XXXLarge]: "lm:space-x-xxxl",
    [SPACING.reverse]: "lm:space-x-reverse",
  },
  [QUERIES.TABLET]: {
    [SPACING.none]: "tb:space-x-none",
    [SPACING.XXXSmall]: "tb:space-x-xxxs",
    [SPACING.XXSmall]: "tb:space-x-xxs",
    [SPACING.XSmall]: "tb:space-x-xs",
    [SPACING.small]: "tb:space-x-sm",
    [SPACING.medium]: "tb:space-x-md",
    [SPACING.large]: "tb:space-x-lg",
    [SPACING.XLarge]: "tb:space-x-xl",
    [SPACING.XXLarge]: "tb:space-x-xxl",
    [SPACING.XXXLarge]: "tb:space-x-xxxl",
    [SPACING.reverse]: "tb:space-x-reverse",
  },
  [QUERIES.DESKTOP]: {
    [SPACING.none]: "de:space-x-none",
    [SPACING.XXXSmall]: "de:space-x-xxxs",
    [SPACING.XXSmall]: "de:space-x-xxs",
    [SPACING.XSmall]: "de:space-x-xs",
    [SPACING.small]: "de:space-x-sm",
    [SPACING.medium]: "de:space-x-md",
    [SPACING.large]: "de:space-x-lg",
    [SPACING.XLarge]: "de:space-x-xl",
    [SPACING.XXLarge]: "de:space-x-xxl",
    [SPACING.XXXLarge]: "de:space-x-xxxl",
    [SPACING.reverse]: "de:space-x-reverse",
  },
  [QUERIES.LARGEDESKTOP]: {
    [SPACING.none]: "ld:space-x-none",
    [SPACING.XXXSmall]: "ld:space-x-xxxs",
    [SPACING.XXSmall]: "ld:space-x-xxs",
    [SPACING.XSmall]: "ld:space-x-xs",
    [SPACING.small]: "ld:space-x-sm",
    [SPACING.medium]: "ld:space-x-md",
    [SPACING.large]: "ld:space-x-lg",
    [SPACING.XLarge]: "ld:space-x-xl",
    [SPACING.XXLarge]: "ld:space-x-xxl",
    [SPACING.XXXLarge]: "ld:space-x-xxxl",
    [SPACING.reverse]: "ld:space-x-reverse",
  },
};

export const verticalTokens = {
  [SPACING.none]: "space-y-none",
  [SPACING.XXXSmall]: "space-y-xxxs",
  [SPACING.XXSmall]: "space-y-xxs",
  [SPACING.XSmall]: "space-y-xs",
  [SPACING.small]: "space-y-sm",
  [SPACING.medium]: "space-y-md",
  [SPACING.large]: "space-y-lg",
  [SPACING.XLarge]: "space-y-xl",
  [SPACING.XXLarge]: "space-y-xxl",
  [SPACING.XXXLarge]: "space-y-xxxl",
  [SPACING.reverse]: "space-y-reverse",
  [QUERIES.MEDIUMMOBILE]: {
    [SPACING.none]: "mm:space-y-none",
    [SPACING.XXXSmall]: "mm:space-y-xxxs",
    [SPACING.XXSmall]: "mm:space-y-xxs",
    [SPACING.XSmall]: "mm:space-y-xs",
    [SPACING.small]: "mm:space-y-sm",
    [SPACING.medium]: "mm:space-y-md",
    [SPACING.large]: "mm:space-y-lg",
    [SPACING.XLarge]: "mm:space-y-xl",
    [SPACING.XXLarge]: "mm:space-y-xxl",
    [SPACING.XXXLarge]: "mm:space-y-xxxl",
    [SPACING.reverse]: "mm:space-y-reverse",
  },
  largeMobile: {
    [SPACING.none]: "lm:space-y-none",
    [SPACING.XXXSmall]: "lm:space-y-xxxs",
    [SPACING.XXSmall]: "lm:space-y-xxs",
    [SPACING.XSmall]: "lm:space-y-xs",
    [SPACING.small]: "lm:space-y-sm",
    [SPACING.medium]: "lm:space-y-md",
    [SPACING.large]: "lm:space-y-lg",
    [SPACING.XLarge]: "lm:space-y-xl",
    [SPACING.XXLarge]: "lm:space-y-xxl",
    [SPACING.XXXLarge]: "lm:space-y-xxxl",
    [SPACING.reverse]: "lm:space-y-reverse",
  },
  tablet: {
    [SPACING.none]: "tb:space-y-none",
    [SPACING.XXXSmall]: "tb:space-y-xxxs",
    [SPACING.XXSmall]: "tb:space-y-xxs",
    [SPACING.XSmall]: "tb:space-y-xs",
    [SPACING.small]: "tb:space-y-sm",
    [SPACING.medium]: "tb:space-y-md",
    [SPACING.large]: "tb:space-y-lg",
    [SPACING.XLarge]: "tb:space-y-xl",
    [SPACING.XXLarge]: "tb:space-y-xxl",
    [SPACING.XXXLarge]: "tb:space-y-xxxl",
    [SPACING.reverse]: "tb:space-y-reverse",
  },
  [QUERIES.DESKTOP]: {
    [SPACING.none]: "de:space-y-none",
    [SPACING.XXXSmall]: "de:space-y-xxxs",
    [SPACING.XXSmall]: "de:space-y-xxs",
    [SPACING.XSmall]: "de:space-y-xs",
    [SPACING.small]: "de:space-y-sm",
    [SPACING.medium]: "de:space-y-md",
    [SPACING.large]: "de:space-y-lg",
    [SPACING.XLarge]: "de:space-y-xl",
    [SPACING.XXLarge]: "de:space-y-xxl",
    [SPACING.XXXLarge]: "de:space-y-xxxl",
    [SPACING.reverse]: "de:space-y-reverse",
  },
  [QUERIES.LARGEDESKTOP]: {
    [SPACING.none]: "ld:space-y-none",
    [SPACING.XXXSmall]: "ld:space-y-xxxs",
    [SPACING.XXSmall]: "ld:space-y-xxs",
    [SPACING.XSmall]: "ld:space-y-xs",
    [SPACING.small]: "ld:space-y-sm",
    [SPACING.medium]: "ld:space-y-md",
    [SPACING.large]: "ld:space-y-lg",
    [SPACING.XLarge]: "ld:space-y-xl",
    [SPACING.XXLarge]: "ld:space-y-xxl",
    [SPACING.XXXLarge]: "ld:space-y-xxxl",
    [SPACING.reverse]: "ld:space-y-reverse",
  },
};

const getSpacingClasses = (
  spacing: `${SPACING}`,
  viewport?: QUERIES,
  direction: Direction = "row",
): string => {
  if (spacing === "none") return "";
  const horizontalRoot = viewport ? horizontalTokens[viewport] : horizontalTokens;
  const verticalRoot = viewport ? verticalTokens[viewport] : verticalTokens;

  const tokens = cx(
    (direction === "row" || direction === "row-reverse") && [
      horizontalRoot[spacing],
      verticalRoot.none,
      "rtl:space-x-reverse",
    ],
    direction === "row-reverse" && horizontalRoot.reverse,
    (direction === "column" || direction === "column-reverse") && [
      verticalRoot[spacing],
      horizontalRoot.none,
    ],
    direction === "column-reverse" && verticalRoot.reverse,
  );

  return tokens;
};

export default getSpacingClasses;
