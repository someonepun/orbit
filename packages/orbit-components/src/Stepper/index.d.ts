// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

type Title = string | ((param?: any) => string);
// InputEvent
export type Event = Common.Event<React.SyntheticEvent<HTMLInputElement>>;

export interface SharedProps extends Common.Global {
  readonly name?: string;
  readonly active?: boolean;
  readonly disabled?: boolean;
  readonly maxWidth?: string | number;
  readonly maxValue?: number;
  readonly minValue?: number;
  readonly size?: "small" | "normal";
  // Deviation from other stepper properties
  readonly titleIncrement?: Title;
  readonly titleDecrement?: Title;
  // Deviation from common event format onChange
  readonly onFocus?: Event;
  readonly onBlur?: Event;
}

export interface Props extends SharedProps {
  readonly defaultValue?: number;
  readonly step?: number;
  readonly onChange?: (value: number) => void | Promise<void>;
}

declare const Stepper: React.FunctionComponent<Props>;
export { Stepper, Stepper as default };
export { StepperStateless } from "./StepperStateless";
