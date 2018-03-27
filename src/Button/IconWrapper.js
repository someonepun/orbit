// @flow

import * as React from "react";

import { colors } from "../constants";

const sizes = {
  normal: "20px",
  small: "20px",
  large: "26px",
};

const fillColors = {
  primary: colors.white.normal,
  secondary: colors.ink.normal,
};

type Props = {
  size: $Keys<typeof sizes>,
  type: $Keys<typeof fillColors>,
  Icon: React.ComponentType<*>,
};

const IconWrapper = (props: Props) => {
  const { Icon, type, size } = props;

  return (
    <span>
      <Icon fill={fillColors[type]} height={sizes[size]} />
      <style jsx>{`
        span {
          position: absolute;
          top: 50%;
          left: 12px;
          transform: translateY(-50%);
        }
      `}</style>
    </span>
  );
};

export default IconWrapper;
