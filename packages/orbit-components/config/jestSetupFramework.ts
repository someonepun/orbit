import { TextEncoder } from "util";
import { configure } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";

configure({
  testIdAttribute: "data-test",
});

global.TextEncoder = TextEncoder;
