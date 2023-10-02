import type { Props } from "../types";
import type { QUERIES } from "../../utils/mediaQuery/consts";
import { positionClasses } from "./tailwindClasses";

const getPositionClass = (position: Props["position"], viewport?: QUERIES) => {
  if (!position) return null;

  return viewport ? positionClasses[viewport][position] : positionClasses[position];
};

export default getPositionClass;
