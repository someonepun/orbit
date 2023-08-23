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

export const gapTokens = {
  [SPACING.none]: "gap-none",
  [SPACING.XXXSmall]: "gap-xxxs",
  [SPACING.XXSmall]: "gap-xxs",
  [SPACING.XSmall]: "gap-xs",
  [SPACING.small]: "gap-sm",
  [SPACING.medium]: "gap-md",
  [SPACING.large]: "gap-lg",
  [SPACING.XLarge]: "gap-xl",
  [SPACING.XXLarge]: "gap-xxl",
  [SPACING.XXXLarge]: "gap-xxxl",
  [QUERIES.MEDIUMMOBILE]: {
    [SPACING.none]: "mm:gap-none",
    [SPACING.XXXSmall]: "mm:gap-xxxs",
    [SPACING.XXSmall]: "mm:gap-xxs",
    [SPACING.XSmall]: "mm:gap-xs",
    [SPACING.small]: "mm:gap-sm",
    [SPACING.medium]: "mm:gap-md",
    [SPACING.large]: "mm:gap-lg",
    [SPACING.XLarge]: "mm:gap-xl",
    [SPACING.XXLarge]: "mm:gap-xxl",
    [SPACING.XXXLarge]: "mm:gap-xxxl",
  },
  largeMobile: {
    [SPACING.none]: "lm:gap-none",
    [SPACING.XXXSmall]: "lm:gap-xxxs",
    [SPACING.XXSmall]: "lm:gap-xxs",
    [SPACING.XSmall]: "lm:gap-xs",
    [SPACING.small]: "lm:gap-sm",
    [SPACING.medium]: "lm:gap-md",
    [SPACING.large]: "lm:gap-lg",
    [SPACING.XLarge]: "lm:gap-xl",
    [SPACING.XXLarge]: "lm:gap-xxl",
    [SPACING.XXXLarge]: "lm:gap-xxxl",
  },
  tablet: {
    [SPACING.none]: "tb:gap-none",
    [SPACING.XXXSmall]: "tb:gap-xxxs",
    [SPACING.XXSmall]: "tb:gap-xxs",
    [SPACING.XSmall]: "tb:gap-xs",
    [SPACING.small]: "tb:gap-sm",
    [SPACING.medium]: "tb:gap-md",
    [SPACING.large]: "tb:gap-lg",
    [SPACING.XLarge]: "tb:gap-xl",
    [SPACING.XXLarge]: "tb:gap-xxl",
    [SPACING.XXXLarge]: "tb:gap-xxxl",
  },
  [QUERIES.DESKTOP]: {
    [SPACING.none]: "de:gap-none",
    [SPACING.XXXSmall]: "de:gap-xxxs",
    [SPACING.XXSmall]: "de:gap-xxs",
    [SPACING.XSmall]: "de:gap-xs",
    [SPACING.small]: "de:gap-sm",
    [SPACING.medium]: "de:gap-md",
    [SPACING.large]: "de:gap-lg",
    [SPACING.XLarge]: "de:gap-xl",
    [SPACING.XXLarge]: "de:gap-xxl",
    [SPACING.XXXLarge]: "de:gap-xxxl",
  },
  [QUERIES.LARGEDESKTOP]: {
    [SPACING.none]: "ld:gap-none",
    [SPACING.XXXSmall]: "ld:gap-xxxs",
    [SPACING.XXSmall]: "ld:gap-xxs",
    [SPACING.XSmall]: "ld:gap-xs",
    [SPACING.small]: "ld:gap-sm",
    [SPACING.medium]: "ld:gap-md",
    [SPACING.large]: "ld:gap-lg",
    [SPACING.XLarge]: "ld:gap-xl",
    [SPACING.XXLarge]: "ld:gap-xxl",
    [SPACING.XXXLarge]: "ld:gap-xxxl",
  },
};

const safariVerticalTokens = {
  [SPACING.none]: "safari:[&>*:not(:last-child)]:space-y-none",
  [SPACING.XXXSmall]: "safari:[&>*:not(:last-child)]:space-y-xxxs",
  [SPACING.XXSmall]: "safari:[&>*:not(:last-child)]:space-y-xxs",
  [SPACING.XSmall]: "safari:[&>*:not(:last-child)]:space-y-xs",
  [SPACING.small]: "safari:[&>*:not(:last-child)]:space-y-sm",
  [SPACING.medium]: "safari:[&>*:not(:last-child)]:space-y-md",
  [SPACING.large]: "safari:[&>*:not(:last-child)]:space-y-lg",
  [SPACING.XLarge]: "safari:[&>*:not(:last-child)]:space-y-xl",
  [SPACING.XXLarge]: "safari:[&>*:not(:last-child)]:space-y-xxl",
  [SPACING.XXXLarge]: "safari:[&>*:not(:last-child)]:space-y-xxxl",
  [SPACING.reverse]: "safari:[&>*:not(:last-child)]:space-y-reverse",
  [QUERIES.MEDIUMMOBILE]: {
    [SPACING.none]: "mm:safari:[&>*:not(:last-child)]:space-y-none",
    [SPACING.XXXSmall]: "mm:safari:[&>*:not(:last-child)]:space-y-xxxs",
    [SPACING.XXSmall]: "mm:safari:[&>*:not(:last-child)]:space-y-xxs",
    [SPACING.XSmall]: "mm:safari:[&>*:not(:last-child)]:space-y-xs",
    [SPACING.small]: "mm:safari:[&>*:not(:last-child)]:space-y-sm",
    [SPACING.medium]: "mm:safari:[&>*:not(:last-child)]:space-y-md",
    [SPACING.large]: "mm:safari:[&>*:not(:last-child)]:space-y-lg",
    [SPACING.XLarge]: "mm:safari:[&>*:not(:last-child)]:space-y-xl",
    [SPACING.XXLarge]: "mm:safari:[&>*:not(:last-child)]:space-y-xxl",
    [SPACING.XXXLarge]: "mm:safari:[&>*:not(:last-child)]:space-y-xxxl",
    [SPACING.reverse]: "mm:safari:[&>*:not(:last-child)]:space-y-reverse",
  },
  [QUERIES.LARGEMOBILE]: {
    [SPACING.none]: "lm:safari:[&>*:not(:last-child)]:space-y-none",
    [SPACING.XXXSmall]: "lm:safari:[&>*:not(:last-child)]:space-y-xxxs",
    [SPACING.XXSmall]: "lm:safari:[&>*:not(:last-child)]:space-y-xxs",
    [SPACING.XSmall]: "lm:safari:[&>*:not(:last-child)]:space-y-xs",
    [SPACING.small]: "lm:safari:[&>*:not(:last-child)]:space-y-sm",
    [SPACING.medium]: "lm:safari:[&>*:not(:last-child)]:space-y-md",
    [SPACING.large]: "lm:safari:[&>*:not(:last-child)]:space-y-lg",
    [SPACING.XLarge]: "lm:safari:[&>*:not(:last-child)]:space-y-xl",
    [SPACING.XXLarge]: "lm:safari:[&>*:not(:last-child)]:space-y-xxl",
    [SPACING.XXXLarge]: "lm:safari:[&>*:not(:last-child)]:space-y-xxxl",
    [SPACING.reverse]: "lm:safari:[&>*:not(:last-child)]:space-y-reverse",
  },
  [QUERIES.TABLET]: {
    [SPACING.none]: "tb:safari:[&>*:not(:last-child)]:space-y-none",
    [SPACING.XXXSmall]: "tb:safari:[&>*:not(:last-child)]:space-y-xxxs",
    [SPACING.XXSmall]: "tb:safari:[&>*:not(:last-child)]:space-y-xxs",
    [SPACING.XSmall]: "tb:safari:[&>*:not(:last-child)]:space-y-xs",
    [SPACING.small]: "tb:safari:[&>*:not(:last-child)]:space-y-sm",
    [SPACING.medium]: "tb:safari:[&>*:not(:last-child)]:space-y-md",
    [SPACING.large]: "tb:safari:[&>*:not(:last-child)]:space-y-lg",
    [SPACING.XLarge]: "tb:safari:[&>*:not(:last-child)]:space-y-xl",
    [SPACING.XXLarge]: "tb:safari:[&>*:not(:last-child)]:space-y-xxl",
    [SPACING.XXXLarge]: "tb:safari:[&>*:not(:last-child)]:space-y-xxxl",
    [SPACING.reverse]: "tb:safari:[&>*:not(:last-child)]:space-y-reverse",
  },
  [QUERIES.DESKTOP]: {
    [SPACING.none]: "de:safari:[&>*:not(:last-child)]:space-y-none",
    [SPACING.XXXSmall]: "de:safari:[&>*:not(:last-child)]:space-y-xxxs",
    [SPACING.XXSmall]: "de:safari:[&>*:not(:last-child)]:space-y-xxs",
    [SPACING.XSmall]: "de:safari:[&>*:not(:last-child)]:space-y-xs",
    [SPACING.small]: "de:safari:[&>*:not(:last-child)]:space-y-sm",
    [SPACING.medium]: "de:safari:[&>*:not(:last-child)]:space-y-md",
    [SPACING.large]: "de:safari:[&>*:not(:last-child)]:space-y-lg",
    [SPACING.XLarge]: "de:safari:[&>*:not(:last-child)]:space-y-xl",
    [SPACING.XXLarge]: "de:safari:[&>*:not(:last-child)]:space-y-xxl",
    [SPACING.XXXLarge]: "de:safari:[&>*:not(:last-child)]:space-y-xxxl",
    [SPACING.reverse]: "de:safari:[&>*:not(:last-child)]:space-y-reverse",
  },
  [QUERIES.LARGEDESKTOP]: {
    [SPACING.none]: "ld:safari:[&>*:not(:last-child)]:space-y-none",
    [SPACING.XXXSmall]: "ld:safari:[&>*:not(:last-child)]:space-y-xxxs",
    [SPACING.XXSmall]: "ld:safari:[&>*:not(:last-child)]:space-y-xxs",
    [SPACING.XSmall]: "ld:safari:[&>*:not(:last-child)]:space-y-xs",
    [SPACING.small]: "ld:safari:[&>*:not(:last-child)]:space-y-sm",
    [SPACING.medium]: "ld:safari:[&>*:not(:last-child)]:space-y-md",
    [SPACING.large]: "ld:safari:[&>*:not(:last-child)]:space-y-lg",
    [SPACING.XLarge]: "ld:safari:[&>*:not(:last-child)]:space-y-xl",
    [SPACING.XXLarge]: "ld:safari:[&>*:not(:last-child)]:space-y-xxl",
    [SPACING.XXXLarge]: "ld:safari:[&>*:not(:last-child)]:space-y-xxxl",
    [SPACING.reverse]: "ld:safari:[&>*:not(:last-child)]:space-y-reverse",
  },
};

const safariHorizontalTokens = {
  [SPACING.none]: "safari:[&>*:not(:last-child)]:space-x-none",
  [SPACING.XXXSmall]: "safari:[&>*:not(:last-child)]:space-x-xxxs",
  [SPACING.XXSmall]: "safari:[&>*:not(:last-child)]:space-x-xxs",
  [SPACING.XSmall]: "safari:[&>*:not(:last-child)]:space-x-xs",
  [SPACING.small]: "safari:[&>*:not(:last-child)]:space-x-sm",
  [SPACING.medium]: "safari:[&>*:not(:last-child)]:space-x-md",
  [SPACING.large]: "safari:[&>*:not(:last-child)]:space-x-lg",
  [SPACING.XLarge]: "safari:[&>*:not(:last-child)]:space-x-xl",
  [SPACING.XXLarge]: "safari:[&>*:not(:last-child)]:space-x-xxl",
  [SPACING.XXXLarge]: "safari:[&>*:not(:last-child)]:space-x-xxxl",
  [SPACING.reverse]: "safari:[&>*:not(:last-child)]:space-x-reverse",
  [QUERIES.MEDIUMMOBILE]: {
    [SPACING.none]: "mm:safari:[&>*:not(:last-child)]:space-x-none",
    [SPACING.XXXSmall]: "mm:safari:[&>*:not(:last-child)]:space-x-xxxs",
    [SPACING.XXSmall]: "mm:safari:[&>*:not(:last-child)]:space-x-xxs",
    [SPACING.XSmall]: "mm:safari:[&>*:not(:last-child)]:space-x-xs",
    [SPACING.small]: "mm:safari:[&>*:not(:last-child)]:space-x-sm",
    [SPACING.medium]: "mm:safari:[&>*:not(:last-child)]:space-x-md",
    [SPACING.large]: "mm:safari:[&>*:not(:last-child)]:space-x-lg",
    [SPACING.XLarge]: "mm:safari:[&>*:not(:last-child)]:space-x-xl",
    [SPACING.XXLarge]: "mm:safari:[&>*:not(:last-child)]:space-x-xxl",
    [SPACING.XXXLarge]: "mm:safari:[&>*:not(:last-child)]:space-x-xxxl",
    [SPACING.reverse]: "mm:safari:[&>*:not(:last-child)]:space-x-reverse",
  },
  [QUERIES.LARGEMOBILE]: {
    [SPACING.none]: "lm:safari:[&>*:not(:last-child)]:space-x-none",
    [SPACING.XXXSmall]: "lm:safari:[&>*:not(:last-child)]:space-x-xxxs",
    [SPACING.XXSmall]: "lm:safari:[&>*:not(:last-child)]:space-x-xxs",
    [SPACING.XSmall]: "lm:safari:[&>*:not(:last-child)]:space-x-xs",
    [SPACING.small]: "lm:safari:[&>*:not(:last-child)]:space-x-sm",
    [SPACING.medium]: "lm:safari:[&>*:not(:last-child)]:space-x-md",
    [SPACING.large]: "lm:safari:[&>*:not(:last-child)]:space-x-lg",
    [SPACING.XLarge]: "lm:safari:[&>*:not(:last-child)]:space-x-xl",
    [SPACING.XXLarge]: "lm:safari:[&>*:not(:last-child)]:space-x-xxl",
    [SPACING.XXXLarge]: "lm:safari:[&>*:not(:last-child)]:space-x-xxxl",
    [SPACING.reverse]: "lm:safari:[&>*:not(:last-child)]:space-x-reverse",
  },
  [QUERIES.TABLET]: {
    [SPACING.none]: "tb:safari:[&>*:not(:last-child)]:space-x-none",
    [SPACING.XXXSmall]: "tb:safari:[&>*:not(:last-child)]:space-x-xxxs",
    [SPACING.XXSmall]: "tb:safari:[&>*:not(:last-child)]:space-x-xxs",
    [SPACING.XSmall]: "tb:safari:[&>*:not(:last-child)]:space-x-xs",
    [SPACING.small]: "tb:safari:[&>*:not(:last-child)]:space-x-sm",
    [SPACING.medium]: "tb:safari:[&>*:not(:last-child)]:space-x-md",
    [SPACING.large]: "tb:safari:[&>*:not(:last-child)]:space-x-lg",
    [SPACING.XLarge]: "tb:safari:[&>*:not(:last-child)]:space-x-xl",
    [SPACING.XXLarge]: "tb:safari:[&>*:not(:last-child)]:space-x-xxl",
    [SPACING.XXXLarge]: "tb:safari:[&>*:not(:last-child)]:space-x-xxxl",
    [SPACING.reverse]: "tb:safari:[&>*:not(:last-child)]:space-x-reverse",
  },
  [QUERIES.DESKTOP]: {
    [SPACING.none]: "de:safari:[&>*:not(:last-child)]:space-x-none",
    [SPACING.XXXSmall]: "de:safari:[&>*:not(:last-child)]:space-x-xxxs",
    [SPACING.XXSmall]: "de:safari:[&>*:not(:last-child)]:space-x-xxs",
    [SPACING.XSmall]: "de:safari:[&>*:not(:last-child)]:space-x-xs",
    [SPACING.small]: "de:safari:[&>*:not(:last-child)]:space-x-sm",
    [SPACING.medium]: "de:safari:[&>*:not(:last-child)]:space-x-md",
    [SPACING.large]: "de:safari:[&>*:not(:last-child)]:space-x-lg",
    [SPACING.XLarge]: "de:safari:[&>*:not(:last-child)]:space-x-xl",
    [SPACING.XXLarge]: "de:safari:[&>*:not(:last-child)]:space-x-xxl",
    [SPACING.XXXLarge]: "de:safari:[&>*:not(:last-child)]:space-x-xxxl",
    [SPACING.reverse]: "de:safari:[&>*:not(:last-child)]:space-x-reverse",
  },
  [QUERIES.LARGEDESKTOP]: {
    [SPACING.none]: "ld:safari:[&>*:not(:last-child)]:space-x-none",
    [SPACING.XXXSmall]: "ld:safari:[&>*:not(:last-child)]:space-x-xxxs",
    [SPACING.XXSmall]: "ld:safari:[&>*:not(:last-child)]:space-x-xxs",
    [SPACING.XSmall]: "ld:safari:[&>*:not(:last-child)]:space-x-xs",
    [SPACING.small]: "ld:safari:[&>*:not(:last-child)]:space-x-sm",
    [SPACING.medium]: "ld:safari:[&>*:not(:last-child)]:space-x-md",
    [SPACING.large]: "ld:safari:[&>*:not(:last-child)]:space-x-lg",
    [SPACING.XLarge]: "ld:safari:[&>*:not(:last-child)]:space-x-xl",
    [SPACING.XXLarge]: "ld:safari:[&>*:not(:last-child)]:space-x-xxl",
    [SPACING.XXXLarge]: "ld:safari:[&>*:not(:last-child)]:space-x-xxxl",
    [SPACING.reverse]: "ld:safari:[&>*:not(:last-child)]:space-x-reverse",
  },
};

const getSpacingClasses = (
  spacing: `${SPACING}`,
  viewport?: QUERIES,
  direction: Direction = "row",
  legacy = false,
): string => {
  if (legacy) {
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
  }

  // TODO: refactor after iOS Safari 14.1 support drop
  return viewport
    ? cx(
        gapTokens[viewport][spacing],
        safariHorizontalTokens[viewport][spacing],
        direction === "column" && safariVerticalTokens[viewport][spacing],
      )
    : cx(
        gapTokens[spacing],
        safariHorizontalTokens[spacing],
        direction === "column" && safariVerticalTokens[spacing],
      );
};

export default getSpacingClasses;
