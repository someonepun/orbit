import type { CSSProperties } from "react";

import type { ObjectProperty } from "../types";
import { QUERIES } from "../../utils/mediaQuery";

export enum SIZES {
  NONE = "none",
  XXXSMALL = "XXXSmall",
  XXSMALL = "XXSmall",
  XSMALL = "XSmall",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  XLARGE = "XLarge",
  XXLARGE = "XXLarge",
  XXXLARGE = "XXXLarge",
}

export const marginClasses: {
  [K in QUERIES | SIZES]: K extends QUERIES ? Record<SIZES, string> : string;
} = {
  [SIZES.NONE]: "m-0",
  [SIZES.XXXSMALL]: "m-xxxs",
  [SIZES.XXSMALL]: "m-xxs",
  [SIZES.XSMALL]: "m-xs",
  [SIZES.SMALL]: "m-sm",
  [SIZES.MEDIUM]: "m-md",
  [SIZES.LARGE]: "m-lg",
  [SIZES.XLARGE]: "m-xl",
  [SIZES.XXLARGE]: "m-xxl",
  [SIZES.XXXLARGE]: "m-xxxl",
  [QUERIES.LARGEDESKTOP]: {
    [SIZES.NONE]: "ld:m-0",
    [SIZES.XXXSMALL]: "ld:m-xxxs",
    [SIZES.XXSMALL]: "ld:m-xxs",
    [SIZES.XSMALL]: "ld:m-xs",
    [SIZES.SMALL]: "ld:m-sm",
    [SIZES.MEDIUM]: "ld:m-md",
    [SIZES.LARGE]: "ld:m-lg",
    [SIZES.XLARGE]: "ld:m-xl",
    [SIZES.XXLARGE]: "ld:m-xxl",
    [SIZES.XXXLARGE]: "ld:m-xxxl",
  },
  [QUERIES.DESKTOP]: {
    [SIZES.NONE]: "de:m-0",
    [SIZES.XXXSMALL]: "de:m-xxxs",
    [SIZES.XXSMALL]: "de:m-xxs",
    [SIZES.XSMALL]: "de:m-xs",
    [SIZES.SMALL]: "de:m-sm",
    [SIZES.MEDIUM]: "de:m-md",
    [SIZES.LARGE]: "de:m-lg",
    [SIZES.XLARGE]: "de:m-xl",
    [SIZES.XXLARGE]: "de:m-xxl",
    [SIZES.XXXLARGE]: "de:m-xxxl",
  },
  [QUERIES.TABLET]: {
    [SIZES.NONE]: "tb:m-0",
    [SIZES.XXXSMALL]: "tb:m-xxxs",
    [SIZES.XXSMALL]: "tb:m-xxs",
    [SIZES.XSMALL]: "tb:m-xs",
    [SIZES.SMALL]: "tb:m-sm",
    [SIZES.MEDIUM]: "tb:m-md",
    [SIZES.LARGE]: "tb:m-lg",
    [SIZES.XLARGE]: "tb:m-xl",
    [SIZES.XXLARGE]: "tb:m-xxl",
    [SIZES.XXXLARGE]: "tb:m-xxxl",
  },
  [QUERIES.LARGEMOBILE]: {
    [SIZES.NONE]: "lm:m-0",
    [SIZES.XXXSMALL]: "lm:m-xxxs",
    [SIZES.XXSMALL]: "lm:m-xxs",
    [SIZES.XSMALL]: "lm:m-xs",
    [SIZES.SMALL]: "lm:m-sm",
    [SIZES.MEDIUM]: "lm:m-md",
    [SIZES.LARGE]: "lm:m-lg",
    [SIZES.XLARGE]: "lm:m-xl",
    [SIZES.XXLARGE]: "lm:m-xxl",
    [SIZES.XXXLARGE]: "lm:m-xxxl",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SIZES.NONE]: "mm:m-0",
    [SIZES.XXXSMALL]: "mm:m-xxxs",
    [SIZES.XXSMALL]: "mm:m-xxs",
    [SIZES.XSMALL]: "mm:m-xs",
    [SIZES.SMALL]: "mm:m-sm",
    [SIZES.MEDIUM]: "mm:m-md",
    [SIZES.LARGE]: "mm:m-lg",
    [SIZES.XLARGE]: "mm:m-xl",
    [SIZES.XXLARGE]: "mm:m-xxl",
    [SIZES.XXXLARGE]: "mm:m-xxxl",
  },
};

export const marginTopClasses: {
  [K in QUERIES | SIZES]: K extends QUERIES ? Record<SIZES, string> : string;
} = {
  [SIZES.NONE]: "mt-0",
  [SIZES.XXXSMALL]: "mt-xxxs",
  [SIZES.XXSMALL]: "mt-xxs",
  [SIZES.XSMALL]: "mt-xs",
  [SIZES.SMALL]: "mt-sm",
  [SIZES.MEDIUM]: "mt-md",
  [SIZES.LARGE]: "mt-lg",
  [SIZES.XLARGE]: "mt-xl",
  [SIZES.XXLARGE]: "mt-xxl",
  [SIZES.XXXLARGE]: "mt-xxxl",
  [QUERIES.LARGEDESKTOP]: {
    [SIZES.NONE]: "ld:mt-0",
    [SIZES.XXXSMALL]: "ld:mt-xxxs",
    [SIZES.XXSMALL]: "ld:mt-xxs",
    [SIZES.XSMALL]: "ld:mt-xs",
    [SIZES.SMALL]: "ld:mt-sm",
    [SIZES.MEDIUM]: "ld:mt-md",
    [SIZES.LARGE]: "ld:mt-lg",
    [SIZES.XLARGE]: "ld:mt-xl",
    [SIZES.XXLARGE]: "ld:mt-xxl",
    [SIZES.XXXLARGE]: "ld:mt-xxxl",
  },
  [QUERIES.DESKTOP]: {
    [SIZES.NONE]: "de:mt-0",
    [SIZES.XXXSMALL]: "de:mt-xxxs",
    [SIZES.XXSMALL]: "de:mt-xxs",
    [SIZES.XSMALL]: "de:mt-xs",
    [SIZES.SMALL]: "de:mt-sm",
    [SIZES.MEDIUM]: "de:mt-md",
    [SIZES.LARGE]: "de:mt-lg",
    [SIZES.XLARGE]: "de:mt-xl",
    [SIZES.XXLARGE]: "de:mt-xxl",
    [SIZES.XXXLARGE]: "de:mt-xxxl",
  },
  [QUERIES.TABLET]: {
    [SIZES.NONE]: "tb:mt-0",
    [SIZES.XXXSMALL]: "tb:mt-xxxs",
    [SIZES.XXSMALL]: "tb:mt-xxs",
    [SIZES.XSMALL]: "tb:mt-xs",
    [SIZES.SMALL]: "tb:mt-sm",
    [SIZES.MEDIUM]: "tb:mt-md",
    [SIZES.LARGE]: "tb:mt-lg",
    [SIZES.XLARGE]: "tb:mt-xl",
    [SIZES.XXLARGE]: "tb:mt-xxl",
    [SIZES.XXXLARGE]: "tb:mt-xxxl",
  },
  [QUERIES.LARGEMOBILE]: {
    [SIZES.NONE]: "lm:mt-0",
    [SIZES.XXXSMALL]: "lm:mt-xxxs",
    [SIZES.XXSMALL]: "lm:mt-xxs",
    [SIZES.XSMALL]: "lm:mt-xs",
    [SIZES.SMALL]: "lm:mt-sm",
    [SIZES.MEDIUM]: "lm:mt-md",
    [SIZES.LARGE]: "lm:mt-lg",
    [SIZES.XLARGE]: "lm:mt-xl",
    [SIZES.XXLARGE]: "lm:mt-xxl",
    [SIZES.XXXLARGE]: "lm:mt-xxxl",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SIZES.NONE]: "mm:mt-0",
    [SIZES.XXXSMALL]: "mm:mt-xxxs",
    [SIZES.XXSMALL]: "mm:mt-xxs",
    [SIZES.XSMALL]: "mm:mt-xs",
    [SIZES.SMALL]: "mm:mt-sm",
    [SIZES.MEDIUM]: "mm:mt-md",
    [SIZES.LARGE]: "mm:mt-lg",
    [SIZES.XLARGE]: "mm:mt-xl",
    [SIZES.XXLARGE]: "mm:mt-xxl",
    [SIZES.XXXLARGE]: "mm:mt-xxxl",
  },
};

export const marginRightClasses: {
  [K in QUERIES | SIZES]: K extends QUERIES ? Record<SIZES, string> : string;
} = {
  [SIZES.NONE]: "mr-0",
  [SIZES.XXXSMALL]: "mr-xxxs",
  [SIZES.XXSMALL]: "mr-xxs",
  [SIZES.XSMALL]: "mr-xs",
  [SIZES.SMALL]: "mr-sm",
  [SIZES.MEDIUM]: "mr-md",
  [SIZES.LARGE]: "mr-lg",
  [SIZES.XLARGE]: "mr-xl",
  [SIZES.XXLARGE]: "mr-xxl",
  [SIZES.XXXLARGE]: "mr-xxxl",
  [QUERIES.LARGEDESKTOP]: {
    [SIZES.NONE]: "ld:mr-0",
    [SIZES.XXXSMALL]: "ld:mr-xxxs",
    [SIZES.XXSMALL]: "ld:mr-xxs",
    [SIZES.XSMALL]: "ld:mr-xs",
    [SIZES.SMALL]: "ld:mr-sm",
    [SIZES.MEDIUM]: "ld:mr-md",
    [SIZES.LARGE]: "ld:mr-lg",
    [SIZES.XLARGE]: "ld:mr-xl",
    [SIZES.XXLARGE]: "ld:mr-xxl",
    [SIZES.XXXLARGE]: "ld:mr-xxxl",
  },
  [QUERIES.DESKTOP]: {
    [SIZES.NONE]: "de:mr-0",
    [SIZES.XXXSMALL]: "de:mr-xxxs",
    [SIZES.XXSMALL]: "de:mr-xxs",
    [SIZES.XSMALL]: "de:mr-xs",
    [SIZES.SMALL]: "de:mr-sm",
    [SIZES.MEDIUM]: "de:mr-md",
    [SIZES.LARGE]: "de:mr-lg",
    [SIZES.XLARGE]: "de:mr-xl",
    [SIZES.XXLARGE]: "de:mr-xxl",
    [SIZES.XXXLARGE]: "de:mr-xxxl",
  },
  [QUERIES.TABLET]: {
    [SIZES.NONE]: "tb:mr-0",
    [SIZES.XXXSMALL]: "tb:mr-xxxs",
    [SIZES.XXSMALL]: "tb:mr-xxs",
    [SIZES.XSMALL]: "tb:mr-xs",
    [SIZES.SMALL]: "tb:mr-sm",
    [SIZES.MEDIUM]: "tb:mr-md",
    [SIZES.LARGE]: "tb:mr-lg",
    [SIZES.XLARGE]: "tb:mr-xl",
    [SIZES.XXLARGE]: "tb:mr-xxl",
    [SIZES.XXXLARGE]: "tb:mr-xxxl",
  },
  [QUERIES.LARGEMOBILE]: {
    [SIZES.NONE]: "lm:mr-0",
    [SIZES.XXXSMALL]: "lm:mr-xxxs",
    [SIZES.XXSMALL]: "lm:mr-xxs",
    [SIZES.XSMALL]: "lm:mr-xs",
    [SIZES.SMALL]: "lm:mr-sm",
    [SIZES.MEDIUM]: "lm:mr-md",
    [SIZES.LARGE]: "lm:mr-lg",
    [SIZES.XLARGE]: "lm:mr-xl",
    [SIZES.XXLARGE]: "lm:mr-xxl",
    [SIZES.XXXLARGE]: "lm:mr-xxxl",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SIZES.NONE]: "mm:mr-0",
    [SIZES.XXXSMALL]: "mm:mr-xxxs",
    [SIZES.XXSMALL]: "mm:mr-xxs",
    [SIZES.XSMALL]: "mm:mr-xs",
    [SIZES.SMALL]: "mm:mr-sm",
    [SIZES.MEDIUM]: "mm:mr-md",
    [SIZES.LARGE]: "mm:mr-lg",
    [SIZES.XLARGE]: "mm:mr-xl",
    [SIZES.XXLARGE]: "mm:mr-xxl",
    [SIZES.XXXLARGE]: "mm:mr-xxxl",
  },
};

export const marginBottomClasses: {
  [K in QUERIES | SIZES]: K extends QUERIES ? Record<SIZES, string> : string;
} = {
  [SIZES.NONE]: "mb-0",
  [SIZES.XXXSMALL]: "mb-xxxs",
  [SIZES.XXSMALL]: "mb-xxs",
  [SIZES.XSMALL]: "mb-xs",
  [SIZES.SMALL]: "mb-sm",
  [SIZES.MEDIUM]: "mb-md",
  [SIZES.LARGE]: "mb-lg",
  [SIZES.XLARGE]: "mb-xl",
  [SIZES.XXLARGE]: "mb-xxl",
  [SIZES.XXXLARGE]: "mb-xxxl",
  [QUERIES.LARGEDESKTOP]: {
    [SIZES.NONE]: "ld:mb-0",
    [SIZES.XXXSMALL]: "ld:mb-xxxs",
    [SIZES.XXSMALL]: "ld:mb-xxs",
    [SIZES.XSMALL]: "ld:mb-xs",
    [SIZES.SMALL]: "ld:mb-sm",
    [SIZES.MEDIUM]: "ld:mb-md",
    [SIZES.LARGE]: "ld:mb-lg",
    [SIZES.XLARGE]: "ld:mb-xl",
    [SIZES.XXLARGE]: "ld:mb-xxl",
    [SIZES.XXXLARGE]: "ld:mb-xxxl",
  },
  [QUERIES.DESKTOP]: {
    [SIZES.NONE]: "de:mb-0",
    [SIZES.XXXSMALL]: "de:mb-xxxs",
    [SIZES.XXSMALL]: "de:mb-xxs",
    [SIZES.XSMALL]: "de:mb-xs",
    [SIZES.SMALL]: "de:mb-sm",
    [SIZES.MEDIUM]: "de:mb-md",
    [SIZES.LARGE]: "de:mb-lg",
    [SIZES.XLARGE]: "de:mb-xl",
    [SIZES.XXLARGE]: "de:mb-xxl",
    [SIZES.XXXLARGE]: "de:mb-xxxl",
  },
  [QUERIES.TABLET]: {
    [SIZES.NONE]: "tb:mb-0",
    [SIZES.XXXSMALL]: "tb:mb-xxxs",
    [SIZES.XXSMALL]: "tb:mb-xxs",
    [SIZES.XSMALL]: "tb:mb-xs",
    [SIZES.SMALL]: "tb:mb-sm",
    [SIZES.MEDIUM]: "tb:mb-md",
    [SIZES.LARGE]: "tb:mb-lg",
    [SIZES.XLARGE]: "tb:mb-xl",
    [SIZES.XXLARGE]: "tb:mb-xxl",
    [SIZES.XXXLARGE]: "tb:mb-xxxl",
  },
  [QUERIES.LARGEMOBILE]: {
    [SIZES.NONE]: "lm:mb-0",
    [SIZES.XXXSMALL]: "lm:mb-xxxs",
    [SIZES.XXSMALL]: "lm:mb-xxs",
    [SIZES.XSMALL]: "lm:mb-xs",
    [SIZES.SMALL]: "lm:mb-sm",
    [SIZES.MEDIUM]: "lm:mb-md",
    [SIZES.LARGE]: "lm:mb-lg",
    [SIZES.XLARGE]: "lm:mb-xl",
    [SIZES.XXLARGE]: "lm:mb-xxl",
    [SIZES.XXXLARGE]: "lm:mb-xxxl",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SIZES.NONE]: "mm:mb-0",
    [SIZES.XXXSMALL]: "mm:mb-xxxs",
    [SIZES.XXSMALL]: "mm:mb-xxs",
    [SIZES.XSMALL]: "mm:mb-xs",
    [SIZES.SMALL]: "mm:mb-sm",
    [SIZES.MEDIUM]: "mm:mb-md",
    [SIZES.LARGE]: "mm:mb-lg",
    [SIZES.XLARGE]: "mm:mb-xl",
    [SIZES.XXLARGE]: "mm:mb-xxl",
    [SIZES.XXXLARGE]: "mm:mb-xxxl",
  },
};

export const marginLeftClasses: {
  [K in QUERIES | SIZES]: K extends QUERIES ? Record<SIZES, string> : string;
} = {
  [SIZES.NONE]: "ml-0",
  [SIZES.XXXSMALL]: "ml-xxxs",
  [SIZES.XXSMALL]: "ml-xxs",
  [SIZES.XSMALL]: "ml-xs",
  [SIZES.SMALL]: "ml-sm",
  [SIZES.MEDIUM]: "ml-md",
  [SIZES.LARGE]: "ml-lg",
  [SIZES.XLARGE]: "ml-xl",
  [SIZES.XXLARGE]: "ml-xxl",
  [SIZES.XXXLARGE]: "ml-xxxl",
  [QUERIES.LARGEDESKTOP]: {
    [SIZES.NONE]: "ld:ml-0",
    [SIZES.XXXSMALL]: "ld:ml-xxxs",
    [SIZES.XXSMALL]: "ld:ml-xxs",
    [SIZES.XSMALL]: "ld:ml-xs",
    [SIZES.SMALL]: "ld:ml-sm",
    [SIZES.MEDIUM]: "ld:ml-md",
    [SIZES.LARGE]: "ld:ml-lg",
    [SIZES.XLARGE]: "ld:ml-xl",
    [SIZES.XXLARGE]: "ld:ml-xxl",
    [SIZES.XXXLARGE]: "ld:ml-xxxl",
  },
  [QUERIES.DESKTOP]: {
    [SIZES.NONE]: "de:ml-0",
    [SIZES.XXXSMALL]: "de:ml-xxxs",
    [SIZES.XXSMALL]: "de:ml-xxs",
    [SIZES.XSMALL]: "de:ml-xs",
    [SIZES.SMALL]: "de:ml-sm",
    [SIZES.MEDIUM]: "de:ml-md",
    [SIZES.LARGE]: "de:ml-lg",
    [SIZES.XLARGE]: "de:ml-xl",
    [SIZES.XXLARGE]: "de:ml-xxl",
    [SIZES.XXXLARGE]: "de:ml-xxxl",
  },
  [QUERIES.TABLET]: {
    [SIZES.NONE]: "tb:ml-0",
    [SIZES.XXXSMALL]: "tb:ml-xxxs",
    [SIZES.XXSMALL]: "tb:ml-xxs",
    [SIZES.XSMALL]: "tb:ml-xs",
    [SIZES.SMALL]: "tb:ml-sm",
    [SIZES.MEDIUM]: "tb:ml-md",
    [SIZES.LARGE]: "tb:ml-lg",
    [SIZES.XLARGE]: "tb:ml-xl",
    [SIZES.XXLARGE]: "tb:ml-xxl",
    [SIZES.XXXLARGE]: "tb:ml-xxxl",
  },
  [QUERIES.LARGEMOBILE]: {
    [SIZES.NONE]: "lm:ml-0",
    [SIZES.XXXSMALL]: "lm:ml-xxxs",
    [SIZES.XXSMALL]: "lm:ml-xxs",
    [SIZES.XSMALL]: "lm:ml-xs",
    [SIZES.SMALL]: "lm:ml-sm",
    [SIZES.MEDIUM]: "lm:ml-md",
    [SIZES.LARGE]: "lm:ml-lg",
    [SIZES.XLARGE]: "lm:ml-xl",
    [SIZES.XXLARGE]: "lm:ml-xxl",
    [SIZES.XXXLARGE]: "lm:ml-xxxl",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SIZES.NONE]: "mm:ml-0",
    [SIZES.XXXSMALL]: "mm:ml-xxxs",
    [SIZES.XXSMALL]: "mm:ml-xxs",
    [SIZES.XSMALL]: "mm:ml-xs",
    [SIZES.SMALL]: "mm:ml-sm",
    [SIZES.MEDIUM]: "mm:ml-md",
    [SIZES.LARGE]: "mm:ml-lg",
    [SIZES.XLARGE]: "mm:ml-xl",
    [SIZES.XXLARGE]: "mm:ml-xxl",
    [SIZES.XXXLARGE]: "mm:ml-xxxl",
  },
};

const getMarginValue = (margin: string | number): string =>
  typeof margin === "number" ? `${margin}px` : margin;

export const getMargin = (
  margin: CSSProperties["margin"] | ObjectProperty,
): { vars: object; classes: string[] } => {
  if (typeof margin === "number" || typeof margin === "string")
    return {
      vars: { "--text-margin": getMarginValue(margin) },
      classes: ["m-[var(--text-margin)]"],
    };

  const { top, bottom, left, right } = margin || {};
  const cssVar = {};
  const classes: string[] = ["m-0"];

  if (top) {
    classes.push("mt-[var(--text-margin-top)]");
    cssVar["--text-margin-top"] = getMarginValue(top);
  }
  if (bottom) {
    classes.push("mb-[var(--text-margin-bottom)]");
    cssVar["--text-margin-bottom"] = getMarginValue(bottom);
  }
  if (left) {
    classes.push("ml-[var(--text-margin-left)]");
    cssVar["--text-margin-left"] = getMarginValue(left);
  }
  if (right) {
    classes.push("mr-[var(--text-margin-right)]");
    cssVar["--text-margin-right"] = getMarginValue(right);
  }

  return { vars: cssVar, classes };
};

export default getMargin;
