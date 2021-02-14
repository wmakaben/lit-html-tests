import { html, render } from "lit-html";

import { listTemplate } from "./list.js";
import { inputTemplate } from "./input.js";

export const myTemplate = () => {
  return html`
    <div id="formContainer"></div>
    <div id="listContainer"></div>
  `;
};
render(myTemplate(), document.body);

const listItems = [
  { text: "Read lit-html docs", isDone: true },
  { text: "Create example thing" }
];

const onItemAdded = text => {
  listItems.push({ text: text, recent: true });
  render(listTemplate(listItems), document.getElementById("listContainer"));
};

render(inputTemplate(onItemAdded), document.getElementById("formContainer"));
render(listTemplate(listItems), document.getElementById("listContainer"));
