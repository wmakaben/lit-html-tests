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
    <div style="background: black; padding-left: 5px; padding-top: 5px;">
      <div>
        ${items.map(item => recordTemplate(item, onChange))}
      </div>
      <button style="margin: 5px" @click=${load}>Load More</button>
    </div>
  `;
};
