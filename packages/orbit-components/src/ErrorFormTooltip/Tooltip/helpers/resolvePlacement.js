// @flow
import { css } from "styled-components";
import type { CSSRules } from "styled-components";

import type { Theme } from "../../../defaultTheme";
import { left } from "../../../utils/rtl";

export type ResolvePlacement = ({|
  inputSize: "small" | "normal",
  theme: Theme,
  placement: string,
  inlineLabel: boolean,
|}) => CSSRules;

const resolvePlacement: ResolvePlacement = ({ inputSize, theme, placement, inlineLabel }) => {
  const vertical = placement === "top-start" || placement === "top-end" ? "bottom" : "top";

  if (inputSize === "normal") {
    if (theme.rtl) {
      return css`
        ${vertical}: 2px;
        ${left}: ${inlineLabel ? "4px" : "0px"}
      `;
    }

    return css`
      ${vertical}: 2px;
      ${left}: ${inlineLabel ? "12px" : "8px"};
    `;
  }

  if (theme.rtl) {
    return css`
      ${vertical}: 2px;
      ${left}: 0px;
    `;
  }

  return css`
    ${vertical}: 2px;
    ${left}: ${inlineLabel ? "8px" : "8px"};
  `;
};

export default resolvePlacement;
