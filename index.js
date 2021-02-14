import { html, render } from "lit-html";

import { listTemplate } from "./todo_list/list.js";
import { inputTemplate } from "./todo_list/input.js";

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
