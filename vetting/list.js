import { html } from "lit-html";
import { recordTemplate } from "./record.js";

export const listTemplate = (initItems, loadRecords, onChange, onSort) => {
  const items = initItems || [];

  const load = {
    handleEvent(e) {
      console.log(`Loading more records`);
      loadRecords();
    },
    capture: true
  };

  // TODO: implement sort
  const idSort = {
    handleEvent(e) {
      // onSort('id')
    },
    capture: true
  };

  // TODO: implement sort
  const labelSort = {
    handleEvent(e) {
      // onSort('label')
    },
    capture: true
  };

  // TODO: implement sort
  const statusSort = {
    handleEvent(e) {
      // onSort('status')
    },
    capture: true
  };

  return html`
    <button style="margin: 5px" @click=${idSort}>Sort by id</button>
    <button style="margin: 5px" @click=${labelSort}>Sort by label</button>
    <button style="margin: 5px" @click=${statusSort}>Sort by status</button>
    <div style="background: black; padding-left: 5px; padding-top: 5px;">
      <div>
        ${items.map(item => recordTemplate(item, onChange))}
      </div>
      <button style="margin: 5px" @click=${load}>Load More</button>
    </div>
  `;
};
