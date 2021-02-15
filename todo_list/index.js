import { html, render } from "lit-html";

import { inputTemplate } from "./input.js";
import { listTemplate } from "./list.js";

export const todoListTemplate = () => {
  return html`
    <div id="formContainer"></div>
    <div id="listContainer"></div>
  `;
};

export const renderList = () => {
  render(todoListTemplate(), document.body);

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
};
