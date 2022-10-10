// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import Button from "./Button";
import Minus from "../../icons/Minus";
import Plus from "../../icons/Plus";
import defaultTheme from "../../defaultTheme";

import type { StateLessProps } from ".";

const StyledStepper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex: 1 1 auto;
`;

const StyledStepperInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 22px;
    padding: 0;
    border: 0;
    font-size: ${theme.orbit.fontSizeTextLarge};
    font-weight: ${theme.orbit.fontWeightBold};
    color: ${theme.orbit.paletteInkDark};
    text-align: center;
    min-width: 0;

    &:disabled {
      background-color: transparent;
    }
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      outline: none;
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledStepperInput.defaultProps = {
  theme: defaultTheme,
};

const StepperStateless = ({
  selected,
  disabled,
  dataTest,
  value,
  name,
  minValue,
  maxValue,
  onKeyDown,
  onBlur,
  onFocus,
  onIncrement,
  onDecrement,
  titleIncrement,
  titleDecrement,
  disabledIncrement,
  disabledDecrement,
}: StateLessProps): React.Node => {
  return (
    <StyledStepper data-test={dataTest}>
      <Button
        selected={selected}
        disabled={
          disabled || disabledDecrement || (typeof value === "number" && value <= +minValue)
        }
        iconLeft={<Minus />}
        onClick={ev => {
          if (onDecrement && !disabled) {
            onDecrement(ev);
          }
        }}
        title={titleDecrement}
      />
      <StyledStepperInput
        name={name}
        disabled={disabled}
        type="text"
        value={value || 0}
        min={minValue}
        max={maxValue}
        onKeyDown={ev => {
          if (onKeyDown) {
            onKeyDown(ev);
          }
        }}
        onBlur={onBlur}
        onFocus={onFocus}
        readOnly
      />
      <Button
        selected={selected}
        disabled={
          disabled || disabledIncrement || (typeof value === "number" && value >= +maxValue)
        }
        iconLeft={<Plus />}
        onClick={ev => {
          if (onIncrement && !disabled) {
            onIncrement(ev);
          }
        }}
        title={titleIncrement}
      />
    </StyledStepper>
  );
};

export default StepperStateless;
