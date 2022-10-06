// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import Text, { StyledText } from "../../Text";
import TYPE_OPTIONS from "../consts";
import defaultTheme from "../../defaultTheme";
import { ICON_COLORS } from "../../Icon/consts";
import { StyledTooltipChildren } from "../../primitives/TooltipPrimitive";
import { right } from "../../utils/rtl";

import type { Props, Type } from ".";

const getBackground = ({ theme, $type }) => {
  const tokens = {
    [TYPE_OPTIONS.NEUTRAL]: theme.orbit.paletteCloudLight,
    [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueLight,
    [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenLight,
    [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeLight,
    [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedLight,
  };
  return tokens[$type];
};

export const getIconColor = (type: Type): string => {
  if (type === TYPE_OPTIONS.NEUTRAL) return ICON_COLORS.SECONDARY;
  return type;
};

export const StyledBadgeListItem: any = styled.li`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    & + & {
      margin-top: ${theme.orbit.spaceXXSmall};
    }
  `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledBadgeListItem.defaultProps = {
  theme: defaultTheme,
};

export const StyledVerticalBadge: any = styled.div`
  ${({ theme }) => css`
    background: ${getBackground};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-${right}: ${theme.orbit.spaceXSmall};
    flex-shrink: 0;
    height: ${theme.orbit.heightIconMedium};
    width: ${theme.orbit.widthIconMedium};
    border-radius: ${theme.orbit.borderRadiusCircle};
    svg {
      height: ${theme.orbit.heightIconSmall};
      width: ${theme.orbit.widthIconSmall};
    }
  `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledVerticalBadge.defaultProps = {
  theme: defaultTheme,
};

export const StyledBadgeContent: any = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    &,
    ${StyledText} {
      font-size: ${theme.orbit.fontSizeTextSmall};
      line-height: ${theme.orbit.lineHeightTextSmall};
    }

    ${StyledTooltipChildren} ${StyledText} {
      font-weight: ${theme.orbit.fontWeightMedium};
    }
  `};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledBadgeContent.defaultProps = {
  theme: defaultTheme,
};

const BadgeListItem = ({
  icon,
  strikeThrough,
  type = TYPE_OPTIONS.NEUTRAL,
  dataTest,
  children,
}: Props): React.Node => {
  return (
    <StyledBadgeListItem data-test={dataTest}>
      <StyledVerticalBadge $type={type} aria-hidden>
        {React.isValidElement(icon) && React.cloneElement(icon, { color: getIconColor(type) })}
      </StyledVerticalBadge>
      <StyledBadgeContent>
        <Text type="secondary" size="small" as="span" strikeThrough={strikeThrough}>
          {children}
        </Text>
      </StyledBadgeContent>
    </StyledBadgeListItem>
  );
};

export default BadgeListItem;
