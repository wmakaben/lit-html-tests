import { html } from "lit-html";
import { listItemTemplate } from "./listItem.js";

export const listTemplate = initItems => {
  const items = initItems || [];
  return html`
    <ul>
      ${items.map(listItemTemplate)}
    </ul>
  `;
};
