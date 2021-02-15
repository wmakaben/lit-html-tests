import { html, render } from "lit-html";

import { DataService } from "./data.js";
import { listTemplate } from "./list.js";

export const todoListTemplate = () => {
  return html`
    <div id="formContainer"></div>
    <div id="listContainer"></div>
  `;
};

export const renderTemplate = () => {
  const dataService = new DataService();

  function renderList() {
    render(
      listTemplate(dataService.records, onLoad, onRecordChanged),
      document.body
    );
  }

  const onLoad = () => {
    dataService.loadRecords();
    renderList();
  };

  const onRecordChanged = (idx, label) => {
    dataService.updateRecord(idx, label);
    renderList();
  };

  renderList();
};
