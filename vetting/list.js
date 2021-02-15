import { html } from "lit-html";
import { recordTemplate } from "./record.js";

export const listTemplate = initItems => {
  const items = initItems || [];
  return html`
    <div>
      ${items.map(recordTemplate)}
    </div>
    <div>Load more</div>
  `;
};
