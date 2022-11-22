import React from "react";
import type { StyledComponent } from "styled-components";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";
import { SIZE_OPTIONS, baseURL } from "./consts";
import getSpacingToken from "../../common/getSpacingToken";
import type { Size, Props } from "./types";

const getHeightToken = ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.EXTRASMALL]: theme.orbit.heightIllustrationSmall,
    [SIZE_OPTIONS.SMALL]: "120px", // TODO: add token
    [SIZE_OPTIONS.MEDIUM]: theme.orbit.heightIllustrationMedium,
    [SIZE_OPTIONS.LARGE]: "280px", // TODO: create token heightIllustrationLarge
    [SIZE_OPTIONS.DISPLAY]: "460px", // TODO: create token heightIllustrationDisplay
  };
  return tokens[size];
};

export const StyledImage: StyledComponent<
  any,
  any,
  { size: Size; illustrationName: string }
> = styled.img.attrs<{ size: Size; illustrationName: string }>(
  ({ theme, size, illustrationName }) => {
    const height = parseInt(getHeightToken({ theme, size }), 10);
    const illustrationPath = `${illustrationName}-Q85.png`;
    return {
      src: `${baseURL}/illustrations/0x${height}/${illustrationPath}`,
      srcSet: `${baseURL}/illustrations/0x${
        height * 2
      }/${illustrationPath} 2x, ${baseURL}/illustrations/0x${height * 3}/${illustrationPath} 3x`,
    };
  },
)`
  display: inline-block;
  margin: auto 0;
  max-height: ${getHeightToken};
  max-width: 100%;
  background-color: ${({ theme }) => theme.orbit.backgroundIllustration};
  margin-bottom: ${getSpacingToken};
  flex-shrink: 0;
`;

StyledImage.defaultProps = {
  theme: defaultTheme,
};

const IllustrationPrimitive = ({
  name,
  alt,
  size = SIZE_OPTIONS.MEDIUM,
  dataTest,
  id,
  spaceAfter,
}: Props) => {
  return (
    <StyledImage
      illustrationName={name}
      alt={typeof alt === "string" ? alt : name}
      size={size}
      id={id}
      data-test={dataTest}
      spaceAfter={spaceAfter}
    />
  );
};

export default IllustrationPrimitive;
