import { html } from "lit-html";
import { repeat } from "lit-html/directives/repeat.js";

import { recordTemplate } from "./record.js";

export const listTemplate = (initItems, loadRecords, onChange, sort) => {
  const items = initItems || [];

  const load = {
    handleEvent(e) {
      console.log(`Loading more records`);
      loadRecords();
    },
    capture: true
  };

  const updateSort = e => {
    sort.onChange(e.target.value);
  };

  const sortTemplate = sort.options.map(
    option => html`
      <input
        type="radio"
        value="${option}"
        .checked=${option === sort.field}
        @change=${updateSort}
      />
      <span>${option}</span>
    `
  );

  return html`
    ${sortTemplate}
    <button style="margin: 5px" @click=${load}>Load More</button>
    <div style="background: black; padding: 5px;">
      ${repeat(items, item => item.id, item => recordTemplate(item, onChange))}
    </div>
  `;
};
