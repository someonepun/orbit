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

export const paddingClasses: {
  [K in QUERIES | SIZES]: K extends QUERIES ? Record<SIZES, string> : string;
} = {
  [SIZES.NONE]: "p-0",
  [SIZES.XXXSMALL]: "p-xxxs",
  [SIZES.XXSMALL]: "p-xxs",
  [SIZES.XSMALL]: "p-xs",
  [SIZES.SMALL]: "p-sm",
  [SIZES.MEDIUM]: "p-md",
  [SIZES.LARGE]: "p-lg",
  [SIZES.XLARGE]: "p-xl",
  [SIZES.XXLARGE]: "p-xxl",
  [SIZES.XXXLARGE]: "p-xxxl",
  [QUERIES.LARGEDESKTOP]: {
    [SIZES.NONE]: "ld:p-0",
    [SIZES.XXXSMALL]: "ld:p-xxxs",
    [SIZES.XXSMALL]: "ld:p-xxs",
    [SIZES.XSMALL]: "ld:p-xs",
    [SIZES.SMALL]: "ld:p-sm",
    [SIZES.MEDIUM]: "ld:p-md",
    [SIZES.LARGE]: "ld:p-lg",
    [SIZES.XLARGE]: "ld:p-xl",
    [SIZES.XXLARGE]: "ld:p-xxl",
    [SIZES.XXXLARGE]: "ld:p-xxxl",
  },
  [QUERIES.DESKTOP]: {
    [SIZES.NONE]: "de:p-0",
    [SIZES.XXXSMALL]: "de:p-xxxs",
    [SIZES.XXSMALL]: "de:p-xxs",
    [SIZES.XSMALL]: "de:p-xs",
    [SIZES.SMALL]: "de:p-sm",
    [SIZES.MEDIUM]: "de:p-md",
    [SIZES.LARGE]: "de:p-lg",
    [SIZES.XLARGE]: "de:p-xl",
    [SIZES.XXLARGE]: "de:p-xxl",
    [SIZES.XXXLARGE]: "de:p-xxxl",
  },
  [QUERIES.TABLET]: {
    [SIZES.NONE]: "tb:p-0",
    [SIZES.XXXSMALL]: "tb:p-xxxs",
    [SIZES.XXSMALL]: "tb:p-xxs",
    [SIZES.XSMALL]: "tb:p-xs",
    [SIZES.SMALL]: "tb:p-sm",
    [SIZES.MEDIUM]: "tb:p-md",
    [SIZES.LARGE]: "tb:p-lg",
    [SIZES.XLARGE]: "tb:p-xl",
    [SIZES.XXLARGE]: "tb:p-xxl",
    [SIZES.XXXLARGE]: "tb:p-xxxl",
  },
  [QUERIES.LARGEMOBILE]: {
    [SIZES.NONE]: "lm:p-0",
    [SIZES.XXXSMALL]: "lm:p-xxxs",
    [SIZES.XXSMALL]: "lm:p-xxs",
    [SIZES.XSMALL]: "lm:p-xs",
    [SIZES.SMALL]: "lm:p-sm",
    [SIZES.MEDIUM]: "lm:p-md",
    [SIZES.LARGE]: "lm:p-lg",
    [SIZES.XLARGE]: "lm:p-xl",
    [SIZES.XXLARGE]: "lm:p-xxl",
    [SIZES.XXXLARGE]: "lm:p-xxxl",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SIZES.NONE]: "mm:p-0",
    [SIZES.XXXSMALL]: "mm:p-xxxs",
    [SIZES.XXSMALL]: "mm:p-xxs",
    [SIZES.XSMALL]: "mm:p-xs",
    [SIZES.SMALL]: "mm:p-sm",
    [SIZES.MEDIUM]: "mm:p-md",
    [SIZES.LARGE]: "mm:p-lg",
    [SIZES.XLARGE]: "mm:p-xl",
    [SIZES.XXLARGE]: "mm:p-xxl",
    [SIZES.XXXLARGE]: "mm:p-xxxl",
  },
};

export const paddingTopClasses: {
  [K in QUERIES | SIZES]: K extends QUERIES ? Record<SIZES, string> : string;
} = {
  [SIZES.NONE]: "pt-0",
  [SIZES.XXXSMALL]: "pt-xxxs",
  [SIZES.XXSMALL]: "pt-xxs",
  [SIZES.XSMALL]: "pt-xs",
  [SIZES.SMALL]: "pt-sm",
  [SIZES.MEDIUM]: "pt-md",
  [SIZES.LARGE]: "pt-lg",
  [SIZES.XLARGE]: "pt-xl",
  [SIZES.XXLARGE]: "pt-xxl",
  [SIZES.XXXLARGE]: "pt-xxxl",
  [QUERIES.LARGEDESKTOP]: {
    [SIZES.NONE]: "ld:pt-0",
    [SIZES.XXXSMALL]: "ld:pt-xxxs",
    [SIZES.XXSMALL]: "ld:pt-xxs",
    [SIZES.XSMALL]: "ld:pt-xs",
    [SIZES.SMALL]: "ld:pt-sm",
    [SIZES.MEDIUM]: "ld:pt-md",
    [SIZES.LARGE]: "ld:pt-lg",
    [SIZES.XLARGE]: "ld:pt-xl",
    [SIZES.XXLARGE]: "ld:pt-xxl",
    [SIZES.XXXLARGE]: "ld:pt-xxxl",
  },
  [QUERIES.DESKTOP]: {
    [SIZES.NONE]: "de:pt-0",
    [SIZES.XXXSMALL]: "de:pt-xxxs",
    [SIZES.XXSMALL]: "de:pt-xxs",
    [SIZES.XSMALL]: "de:pt-xs",
    [SIZES.SMALL]: "de:pt-sm",
    [SIZES.MEDIUM]: "de:pt-md",
    [SIZES.LARGE]: "de:pt-lg",
    [SIZES.XLARGE]: "de:pt-xl",
    [SIZES.XXLARGE]: "de:pt-xxl",
    [SIZES.XXXLARGE]: "de:pt-xxxl",
  },
  [QUERIES.TABLET]: {
    [SIZES.NONE]: "tb:pt-0",
    [SIZES.XXXSMALL]: "tb:pt-xxxs",
    [SIZES.XXSMALL]: "tb:pt-xxs",
    [SIZES.XSMALL]: "tb:pt-xs",
    [SIZES.SMALL]: "tb:pt-sm",
    [SIZES.MEDIUM]: "tb:pt-md",
    [SIZES.LARGE]: "tb:pt-lg",
    [SIZES.XLARGE]: "tb:pt-xl",
    [SIZES.XXLARGE]: "tb:pt-xxl",
    [SIZES.XXXLARGE]: "tb:pt-xxxl",
  },
  [QUERIES.LARGEMOBILE]: {
    [SIZES.NONE]: "lm:pt-0",
    [SIZES.XXXSMALL]: "lm:pt-xxxs",
    [SIZES.XXSMALL]: "lm:pt-xxs",
    [SIZES.XSMALL]: "lm:pt-xs",
    [SIZES.SMALL]: "lm:pt-sm",
    [SIZES.MEDIUM]: "lm:pt-md",
    [SIZES.LARGE]: "lm:pt-lg",
    [SIZES.XLARGE]: "lm:pt-xl",
    [SIZES.XXLARGE]: "lm:pt-xxl",
    [SIZES.XXXLARGE]: "lm:pt-xxxl",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SIZES.NONE]: "mm:pt-0",
    [SIZES.XXXSMALL]: "mm:pt-xxxs",
    [SIZES.XXSMALL]: "mm:pt-xxs",
    [SIZES.XSMALL]: "mm:pt-xs",
    [SIZES.SMALL]: "mm:pt-sm",
    [SIZES.MEDIUM]: "mm:pt-md",
    [SIZES.LARGE]: "mm:pt-lg",
    [SIZES.XLARGE]: "mm:pt-xl",
    [SIZES.XXLARGE]: "mm:pt-xxl",
    [SIZES.XXXLARGE]: "mm:pt-xxxl",
  },
};

export const paddingRightClasses: {
  [K in QUERIES | SIZES]: K extends QUERIES ? Record<SIZES, string> : string;
} = {
  [SIZES.NONE]: "pr-0",
  [SIZES.XXXSMALL]: "pr-xxxs",
  [SIZES.XXSMALL]: "pr-xxs",
  [SIZES.XSMALL]: "pr-xs",
  [SIZES.SMALL]: "pr-sm",
  [SIZES.MEDIUM]: "pr-md",
  [SIZES.LARGE]: "pr-lg",
  [SIZES.XLARGE]: "pr-xl",
  [SIZES.XXLARGE]: "pr-xxl",
  [SIZES.XXXLARGE]: "pr-xxxl",
  [QUERIES.LARGEDESKTOP]: {
    [SIZES.NONE]: "ld:pr-0",
    [SIZES.XXXSMALL]: "ld:pr-xxxs",
    [SIZES.XXSMALL]: "ld:pr-xxs",
    [SIZES.XSMALL]: "ld:pr-xs",
    [SIZES.SMALL]: "ld:pr-sm",
    [SIZES.MEDIUM]: "ld:pr-md",
    [SIZES.LARGE]: "ld:pr-lg",
    [SIZES.XLARGE]: "ld:pr-xl",
    [SIZES.XXLARGE]: "ld:pr-xxl",
    [SIZES.XXXLARGE]: "ld:pr-xxxl",
  },
  [QUERIES.DESKTOP]: {
    [SIZES.NONE]: "de:pr-0",
    [SIZES.XXXSMALL]: "de:pr-xxxs",
    [SIZES.XXSMALL]: "de:pr-xxs",
    [SIZES.XSMALL]: "de:pr-xs",
    [SIZES.SMALL]: "de:pr-sm",
    [SIZES.MEDIUM]: "de:pr-md",
    [SIZES.LARGE]: "de:pr-lg",
    [SIZES.XLARGE]: "de:pr-xl",
    [SIZES.XXLARGE]: "de:pr-xxl",
    [SIZES.XXXLARGE]: "de:pr-xxxl",
  },
  [QUERIES.TABLET]: {
    [SIZES.NONE]: "tb:pr-0",
    [SIZES.XXXSMALL]: "tb:pr-xxxs",
    [SIZES.XXSMALL]: "tb:pr-xxs",
    [SIZES.XSMALL]: "tb:pr-xs",
    [SIZES.SMALL]: "tb:pr-sm",
    [SIZES.MEDIUM]: "tb:pr-md",
    [SIZES.LARGE]: "tb:pr-lg",
    [SIZES.XLARGE]: "tb:pr-xl",
    [SIZES.XXLARGE]: "tb:pr-xxl",
    [SIZES.XXXLARGE]: "tb:pr-xxxl",
  },
  [QUERIES.LARGEMOBILE]: {
    [SIZES.NONE]: "lm:pr-0",
    [SIZES.XXXSMALL]: "lm:pr-xxxs",
    [SIZES.XXSMALL]: "lm:pr-xxs",
    [SIZES.XSMALL]: "lm:pr-xs",
    [SIZES.SMALL]: "lm:pr-sm",
    [SIZES.MEDIUM]: "lm:pr-md",
    [SIZES.LARGE]: "lm:pr-lg",
    [SIZES.XLARGE]: "lm:pr-xl",
    [SIZES.XXLARGE]: "lm:pr-xxl",
    [SIZES.XXXLARGE]: "lm:pr-xxxl",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SIZES.NONE]: "mm:pr-0",
    [SIZES.XXXSMALL]: "mm:pr-xxxs",
    [SIZES.XXSMALL]: "mm:pr-xxs",
    [SIZES.XSMALL]: "mm:pr-xs",
    [SIZES.SMALL]: "mm:pr-sm",
    [SIZES.MEDIUM]: "mm:pr-md",
    [SIZES.LARGE]: "mm:pr-lg",
    [SIZES.XLARGE]: "mm:pr-xl",
    [SIZES.XXLARGE]: "mm:pr-xxl",
    [SIZES.XXXLARGE]: "mm:pr-xxxl",
  },
};

export const paddingBottomClasses: {
  [K in QUERIES | SIZES]: K extends QUERIES ? Record<SIZES, string> : string;
} = {
  [SIZES.NONE]: "pb-0",
  [SIZES.XXXSMALL]: "pb-xxxs",
  [SIZES.XXSMALL]: "pb-xxs",
  [SIZES.XSMALL]: "pb-xs",
  [SIZES.SMALL]: "pb-sm",
  [SIZES.MEDIUM]: "pb-md",
  [SIZES.LARGE]: "pb-lg",
  [SIZES.XLARGE]: "pb-xl",
  [SIZES.XXLARGE]: "pb-xxl",
  [SIZES.XXXLARGE]: "pb-xxxl",
  [QUERIES.LARGEDESKTOP]: {
    [SIZES.NONE]: "ld:pb-0",
    [SIZES.XXXSMALL]: "ld:pb-xxxs",
    [SIZES.XXSMALL]: "ld:pb-xxs",
    [SIZES.XSMALL]: "ld:pb-xs",
    [SIZES.SMALL]: "ld:pb-sm",
    [SIZES.MEDIUM]: "ld:pb-md",
    [SIZES.LARGE]: "ld:pb-lg",
    [SIZES.XLARGE]: "ld:pb-xl",
    [SIZES.XXLARGE]: "ld:pb-xxl",
    [SIZES.XXXLARGE]: "ld:pb-xxxl",
  },
  [QUERIES.DESKTOP]: {
    [SIZES.NONE]: "de:pb-0",
    [SIZES.XXXSMALL]: "de:pb-xxxs",
    [SIZES.XXSMALL]: "de:pb-xxs",
    [SIZES.XSMALL]: "de:pb-xs",
    [SIZES.SMALL]: "de:pb-sm",
    [SIZES.MEDIUM]: "de:pb-md",
    [SIZES.LARGE]: "de:pb-lg",
    [SIZES.XLARGE]: "de:pb-xl",
    [SIZES.XXLARGE]: "de:pb-xxl",
    [SIZES.XXXLARGE]: "de:pb-xxxl",
  },
  [QUERIES.TABLET]: {
    [SIZES.NONE]: "tb:pb-0",
    [SIZES.XXXSMALL]: "tb:pb-xxxs",
    [SIZES.XXSMALL]: "tb:pb-xxs",
    [SIZES.XSMALL]: "tb:pb-xs",
    [SIZES.SMALL]: "tb:pb-sm",
    [SIZES.MEDIUM]: "tb:pb-md",
    [SIZES.LARGE]: "tb:pb-lg",
    [SIZES.XLARGE]: "tb:pb-xl",
    [SIZES.XXLARGE]: "tb:pb-xxl",
    [SIZES.XXXLARGE]: "tb:pb-xxxl",
  },
  [QUERIES.LARGEMOBILE]: {
    [SIZES.NONE]: "lm:pb-0",
    [SIZES.XXXSMALL]: "lm:pb-xxxs",
    [SIZES.XXSMALL]: "lm:pb-xxs",
    [SIZES.XSMALL]: "lm:pb-xs",
    [SIZES.SMALL]: "lm:pb-sm",
    [SIZES.MEDIUM]: "lm:pb-md",
    [SIZES.LARGE]: "lm:pb-lg",
    [SIZES.XLARGE]: "lm:pb-xl",
    [SIZES.XXLARGE]: "lm:pb-xxl",
    [SIZES.XXXLARGE]: "lm:pb-xxxl",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SIZES.NONE]: "mm:pb-0",
    [SIZES.XXXSMALL]: "mm:pb-xxxs",
    [SIZES.XXSMALL]: "mm:pb-xxs",
    [SIZES.XSMALL]: "mm:pb-xs",
    [SIZES.SMALL]: "mm:pb-sm",
    [SIZES.MEDIUM]: "mm:pb-md",
    [SIZES.LARGE]: "mm:pb-lg",
    [SIZES.XLARGE]: "mm:pb-xl",
    [SIZES.XXLARGE]: "mm:pb-xxl",
    [SIZES.XXXLARGE]: "mm:pb-xxxl",
  },
};

export const paddingLeftClasses: {
  [K in QUERIES | SIZES]: K extends QUERIES ? Record<SIZES, string> : string;
} = {
  [SIZES.NONE]: "pl-0",
  [SIZES.XXXSMALL]: "pl-xxxs",
  [SIZES.XXSMALL]: "pl-xxs",
  [SIZES.XSMALL]: "pl-xs",
  [SIZES.SMALL]: "pl-sm",
  [SIZES.MEDIUM]: "pl-md",
  [SIZES.LARGE]: "pl-lg",
  [SIZES.XLARGE]: "pl-xl",
  [SIZES.XXLARGE]: "pl-xxl",
  [SIZES.XXXLARGE]: "pl-xxxl",
  [QUERIES.LARGEDESKTOP]: {
    [SIZES.NONE]: "ld:pl-0",
    [SIZES.XXXSMALL]: "ld:pl-xxxs",
    [SIZES.XXSMALL]: "ld:pl-xxs",
    [SIZES.XSMALL]: "ld:pl-xs",
    [SIZES.SMALL]: "ld:pl-sm",
    [SIZES.MEDIUM]: "ld:pl-md",
    [SIZES.LARGE]: "ld:pl-lg",
    [SIZES.XLARGE]: "ld:pl-xl",
    [SIZES.XXLARGE]: "ld:pl-xxl",
    [SIZES.XXXLARGE]: "ld:pl-xxxl",
  },
  [QUERIES.DESKTOP]: {
    [SIZES.NONE]: "de:pl-0",
    [SIZES.XXXSMALL]: "de:pl-xxxs",
    [SIZES.XXSMALL]: "de:pl-xxs",
    [SIZES.XSMALL]: "de:pl-xs",
    [SIZES.SMALL]: "de:pl-sm",
    [SIZES.MEDIUM]: "de:pl-md",
    [SIZES.LARGE]: "de:pl-lg",
    [SIZES.XLARGE]: "de:pl-xl",
    [SIZES.XXLARGE]: "de:pl-xxl",
    [SIZES.XXXLARGE]: "de:pl-xxxl",
  },
  [QUERIES.TABLET]: {
    [SIZES.NONE]: "tb:pl-0",
    [SIZES.XXXSMALL]: "tb:pl-xxxs",
    [SIZES.XXSMALL]: "tb:pl-xxs",
    [SIZES.XSMALL]: "tb:pl-xs",
    [SIZES.SMALL]: "tb:pl-sm",
    [SIZES.MEDIUM]: "tb:pl-md",
    [SIZES.LARGE]: "tb:pl-lg",
    [SIZES.XLARGE]: "tb:pl-xl",
    [SIZES.XXLARGE]: "tb:pl-xxl",
    [SIZES.XXXLARGE]: "tb:pl-xxxl",
  },
  [QUERIES.LARGEMOBILE]: {
    [SIZES.NONE]: "lm:pl-0",
    [SIZES.XXXSMALL]: "lm:pl-xxxs",
    [SIZES.XXSMALL]: "lm:pl-xxs",
    [SIZES.XSMALL]: "lm:pl-xs",
    [SIZES.SMALL]: "lm:pl-sm",
    [SIZES.MEDIUM]: "lm:pl-md",
    [SIZES.LARGE]: "lm:pl-lg",
    [SIZES.XLARGE]: "lm:pl-xl",
    [SIZES.XXLARGE]: "lm:pl-xxl",
    [SIZES.XXXLARGE]: "lm:pl-xxxl",
  },
  [QUERIES.MEDIUMMOBILE]: {
    [SIZES.NONE]: "mm:pl-0",
    [SIZES.XXXSMALL]: "mm:pl-xxxs",
    [SIZES.XXSMALL]: "mm:pl-xxs",
    [SIZES.XSMALL]: "mm:pl-xs",
    [SIZES.SMALL]: "mm:pl-sm",
    [SIZES.MEDIUM]: "mm:pl-md",
    [SIZES.LARGE]: "mm:pl-lg",
    [SIZES.XLARGE]: "mm:pl-xl",
    [SIZES.XXLARGE]: "mm:pl-xxl",
    [SIZES.XXXLARGE]: "mm:pl-xxxl",
  },
};
