// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import { AnyStyledComponent } from "styled-components";

import { SharedProps } from "..";

type Align = "left" | "center" | "right";
type As = "th" | "td";
type Scope = "col" | "row" | "colgroup" | "rowgroup";
type WhiteSpace = "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";
type VerticalAlign = "baseline" | "middle" | "top" | "bottom";

interface Props extends SharedProps {
  readonly as?: As;
  readonly scope?: Scope;
  readonly align?: Align;
  readonly whiteSpace?: WhiteSpace;
  readonly verticalAlign?: VerticalAlign;
}

declare const StyledTableCell: AnyStyledComponent;
declare const TableCell: React.FunctionComponent<Props>;
export { TableCell, StyledTableCell, TableCell as default };
