// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import {
  TYPE_OPTIONS,
  WEIGHT_OPTIONS,
  ELEMENT_OPTIONS,
  ALIGN_OPTIONS,
  SIZE_OPTIONS,
} from "./consts";
import getSpacingToken from "../common/getSpacingToken";
import { textAlign } from "../utils/rtl";
import { getLinkStyle, StyledTextLink } from "../TextLink";

import type { Props } from ".";

const getTypeToken = ({ theme, type }) => {
  const typeTokens = {
    [TYPE_OPTIONS.PRIMARY]: theme.orbit.colorTextPrimary,
    [TYPE_OPTIONS.SECONDARY]: theme.orbit.colorTextSecondary,
    [TYPE_OPTIONS.INFO]: theme.orbit.colorTextInfo,
    [TYPE_OPTIONS.SUCCESS]: theme.orbit.colorTextSuccess,
    [TYPE_OPTIONS.WARNING]: theme.orbit.colorTextWarning,
    [TYPE_OPTIONS.CRITICAL]: theme.orbit.colorTextCritical,
    [TYPE_OPTIONS.WHITE]: theme.orbit.colorTextWhite,
  };
  return typeTokens[type];
};

const getWeightToken = ({ theme, weight }) => {
  const weightTokens = {
    [WEIGHT_OPTIONS.NORMAL]: theme.orbit.fontWeightNormal,
    [WEIGHT_OPTIONS.MEDIUM]: theme.orbit.fontWeightMedium,
    [WEIGHT_OPTIONS.BOLD]: theme.orbit.fontWeightBold,
  };
  return weightTokens[weight];
};

const getSizeToken = ({ theme, size }) => {
  const sizeTokens = {
    [SIZE_OPTIONS.LARGE]: theme.orbit.fontSizeTextLarge,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeTextNormal,
    [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeTextSmall,
  };
  return sizeTokens[size];
};

const getLineHeightToken = ({ theme, size }) => {
  const lineHeightTokens = {
    [SIZE_OPTIONS.LARGE]: theme.orbit.lineHeightTextLarge,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.lineHeightTextNormal,
    [SIZE_OPTIONS.SMALL]: theme.orbit.lineHeightTextSmall,
  };
  return lineHeightTokens[size];
};

export const StyledText: any = styled(
  ({ element: TextElement, children, className, dataTest, id }) => (
    <TextElement className={className} data-test={dataTest} id={id}>
      {children}
    </TextElement>
  ),
)`
<<<<<<< HEAD
  ${({ theme, align, uppercase, strikeThrough, type, italic }) => css`
    font-family: ${theme.orbit.fontFamily};
    font-size: ${getSizeToken};
    font-weight: ${getWeightToken};
    color: ${getTypeToken};
    line-height: ${getLineHeightToken};
    text-align: ${textAlign(align)};
    text-transform: ${uppercase && `uppercase`};
    text-decoration: ${strikeThrough && `line-through`};
    font-style: ${italic && `italic`};
    margin: 0;
    margin-bottom: ${getSpacingToken};
=======
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${getSizeToken};
  font-weight: ${getWeightToken};
  color: ${getTypeToken};
  line-height: ${getLineHeightToken};
  text-align: ${({ align }) => textAlign(align)};
  text-transform: ${({ uppercase }) => uppercase && `uppercase`};
  text-decoration: ${({ strikeThrough }) => strikeThrough && `line-through`};
  font-style: ${({ italic }) => italic && `italic`};
  margin: 0;
  margin-bottom: ${getSpacingToken};
>>>>>>> 1d13f6fd1 (feat(Text): add line-through)

    a:not(${StyledTextLink}) {
      // TextLink in Text always win
      ${getLinkStyle({ theme, type })}// Get styles from TextLink
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledText.defaultProps = {
  theme: defaultTheme,
};

const Text = ({
  type = TYPE_OPTIONS.PRIMARY,
  size = SIZE_OPTIONS.NORMAL,
  weight = WEIGHT_OPTIONS.NORMAL,
  align = ALIGN_OPTIONS.LEFT,
  as = ELEMENT_OPTIONS.P,
  uppercase,
  italic,
  strikeThrough,
  dataTest,
  spaceAfter,
  children,
  id,
}: Props): React.Node => {
  return (
    <StyledText
      id={id}
      type={type}
      size={size}
      strikeThrough={strikeThrough}
      weight={weight}
      align={align}
      element={as}
      uppercase={uppercase}
      italic={italic}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
    >
      {children}
    </StyledText>
  );
};

export default Text;
