// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../../common/types";

type Resize = "vertical" | "none";
// InputEvent
type Event = Common.Event<React.SyntheticEvent<HTMLTextAreaElement>>;

export interface Props extends Common.Globals, Common.Ref, Common.SpaceAfter {
  readonly size?: Common.InputSize;
  readonly name?: string;
  readonly rows?: number;
  readonly readOnly?: boolean;
  readonly required?: boolean;
  readonly label?: Common.Translation;
  readonly value?: string;
  readonly fullHeight?: boolean;
  readonly placeholder?: Common.Translation;
  readonly help?: React.ReactNode;
  readonly error?: React.ReactNode;
  readonly resize?: Resize;
  readonly disabled?: boolean;
  readonly maxLength?: number;
  readonly tabIndex?: string | number;
  readonly onChange?: Event;
  readonly onFocus?: Event;
  readonly onBlur?: Event;
}
