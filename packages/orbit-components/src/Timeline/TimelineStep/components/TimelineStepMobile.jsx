// @flow
import * as React from "react";
import styled from "styled-components";

import StyledRelative from "../primitives/StyledRelative";
import defaultTheme from "../../../defaultTheme";
import CustomBadge from "./CustomBadge";
import Badge from "../../../Badge";
import Text from "../../../Text";
import Stack from "../../../Stack";
import StyledIconWrapper from "../primitives/StyledIconWrapper";
import StyledProgressLine from "../primitives/StyledProgressLine";
import StyledText from "../primitives/StyledText";
import type { Props as StepProps, Type } from "..";

const StyledIndent = styled.div`
  padding-left: ${({ theme }) => theme.orbit.spaceXSmall};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledIndent.defaultProps = {
  theme: defaultTheme,
};

type Props = {|
  ...StepProps,
  last: boolean,
  typeIcon: React.Node,
  nextType: Type,
|};

const Label = ({ asText, type, label }) => {
  if (asText) {
    return (
      <Text type={type} weight="medium">
        {label}
      </Text>
    );
  }

  return !type ? <CustomBadge>{label}</CustomBadge> : <Badge type={type}>{label}</Badge>;
};

const TimelineStepMobile = ({
  type,
  subLabel,
  label,
  nextType,
  typeIcon,
  asText,
  children,
  last,
}: Props): React.Node => {
  return (
    <StyledRelative>
      <Stack flex spaceAfter="large" align="stretch" desktop={{ align: "start" }}>
        <StyledIconWrapper mobile>{typeIcon}</StyledIconWrapper>
        {!last && <StyledProgressLine status={nextType} data-test="progressLine" />}
        <Stack flex shrink direction="column" spacing="XSmall">
          <Stack flex spacing="XSmall" align="center">
            <Label label={label} asText={asText} type={type} />
            {subLabel && (
              <StyledText>
                <Text size="small">{subLabel}</Text>
              </StyledText>
            )}
          </Stack>
          <StyledIndent>
            <Text type={type ? "primary" : "secondary"}>{children}</Text>
          </StyledIndent>
        </Stack>
      </Stack>
    </StyledRelative>
  );
};

export default TimelineStepMobile;
