import { html } from "lit-html";
import { recordTemplate } from "./record.js";

export const listTemplate = (initItems, loadRecords, onChange) => {
  const items = initItems || [];

  const load = {
    handleEvent(e) {
      console.log(`Loading more records`);
      loadRecords();
    },
    capture: true
  };

  return html`
    <div>
      ${items.map(recordTemplate)}
    </div>
    <button @click=${load}>Load More</button>
  `;
};
