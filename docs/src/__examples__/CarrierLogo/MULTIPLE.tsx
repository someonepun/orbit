import React from "react";
import { CarrierLogo, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack direction="column">
      <CarrierLogo
        carriers={[
          {
            code: "OK",
            type: "airline",
            name: "Czech Airlines",
          },
        ]}
      />
      <CarrierLogo
        carriers={[
          {
            code: "OK",
            type: "airline",
            name: "Czech Airlines",
          },
          {
            code: "FR",
            type: "airline",
            name: "Ryanair",
          },
        ]}
      />
      <CarrierLogo
        carriers={[
          {
            code: "OK",
            type: "airline",
            name: "Czech Airlines",
          },
          {
            code: "FR",
            type: "airline",
            name: "Ryanair",
          },
          {
            code: "TO",
            type: "airline",
            name: "Transavia France",
          },
        ]}
      />
      <CarrierLogo
        carriers={[
          {
            code: "OK",
            type: "airline",
            name: "Czech Airlines",
          },
          {
            code: "FR",
            type: "airline",
            name: "Ryanair",
          },
          {
            code: "TO",
            type: "airline",
            name: "Transavia France",
          },
          {
            code: "VY",
            type: "airline",
            name: "Vueling",
          },
        ]}
      />
      <CarrierLogo
        inlineStacked
        rounded
        carriers={[
          {
            code: "OK",
            type: "airline",
            name: "Czech Airlines",
          },
          {
            code: "FR",
            type: "airline",
            name: "Ryanair",
          },
          {
            code: "TO",
            type: "airline",
            name: "Transavia France",
          },
          {
            code: "VY",
            type: "airline",
            name: "Vueling",
          },
        ]}
      />
    </Stack>
  ),
};
