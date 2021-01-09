// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import AccordionSection from "./AccordionSection";
import { Global, SpaceAfter } from "../common/common";

declare module "@kiwicom/orbit-components/lib/Accordion";

export interface Props extends Global, SpaceAfter {
  // kek
  readonly children?: React.ReactNode;
  readonly expandedSection?: string | number;
  readonly loading?: boolean;
  readonly dataA11ySection?: string;
}

declare const Accordion: React.FunctionComponent<Props>;
declare const StyledAccordion: React.ComponentType<Props>;
export { Accordion, Accordion as default, AccordionSection, StyledAccordion };
