import "../src/index.ts";
import { html } from "@microsoft/fast-element";

export default {
  parameters: {
    layout: "centered",
  },
};

const init = 5;

export const story1 = () =>
  html`<my-counter :count=${(x) => init}></my-counter>`;
