import { html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map.js";

export const listItemTemplate = item => {
  const styles = {
    color: item.isDone ? "#808080" : "black",
    "text-decoration": item.isDone ? "line-through" : "none",
    "font-weight": item.recent ? 600 : 200
  };
  return html`
    <li style="${styleMap(styles)}">${item.text}</li>
  `;
};
