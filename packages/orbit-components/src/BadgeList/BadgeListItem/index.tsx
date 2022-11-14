import * as React from "react";
import styled, { css } from "styled-components";

import Text, { StyledText } from "../../Text";
import { TYPE_OPTIONS } from "../consts";
import defaultTheme from "../../defaultTheme";
import { ICON_COLORS } from "../../Icon/consts";
import { StyledTooltipChildren } from "../../primitives/TooltipPrimitive";
import { right } from "../../utils/rtl";
import { Props, Type } from "./types";
import { Props as IconProps } from "../../Icon/types";

const getBackground = ({ theme, $type }: { theme: typeof defaultTheme; $type?: Type }) => {
  const tokens = {
    [TYPE_OPTIONS.NEUTRAL]: theme.orbit.paletteCloudLight,
    [TYPE_OPTIONS.INFO]: theme.orbit.paletteBlueLight,
    [TYPE_OPTIONS.SUCCESS]: theme.orbit.paletteGreenLight,
    [TYPE_OPTIONS.WARNING]: theme.orbit.paletteOrangeLight,
    [TYPE_OPTIONS.CRITICAL]: theme.orbit.paletteRedLight,
  };

  if (!$type) return null;

  return tokens[$type];
};

export const getIconColor = (type: Type) => {
  if (type === TYPE_OPTIONS.NEUTRAL) return ICON_COLORS.SECONDARY;
  return type;
};

export const StyledBadgeListItem = styled.li`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    & + & {
      margin-top: ${theme.orbit.spaceXXSmall};
    }
  `};
`;

StyledBadgeListItem.defaultProps = {
  theme: defaultTheme,
};

export const StyledVerticalBadge = styled.div<{ $type?: Props["type"] }>`
  ${({ theme, $type }) => css`
    background: ${getBackground({ theme, $type })};
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

StyledVerticalBadge.defaultProps = {
  theme: defaultTheme,
};

export const StyledBadgeContent = styled.div`
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

StyledBadgeContent.defaultProps = {
  theme: defaultTheme,
};

const BadgeListItem = ({
  icon,
  strikeThrough,
  type = TYPE_OPTIONS.NEUTRAL,
  dataTest,
  children,
}: Props) => {
  return (
    <StyledBadgeListItem data-test={dataTest}>
      <StyledVerticalBadge $type={type} aria-hidden>
        {React.isValidElement(icon) &&
          React.cloneElement(icon as React.ReactElement<IconProps>, {
            color: getIconColor(type),
          })}
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
export { Props, Type };
