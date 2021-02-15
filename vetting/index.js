import { render } from "lit-html";

import { DataService } from "./data.js";
import { listTemplate } from "./list.js";

export const renderTemplate = () => {
  const dataService = new DataService();

  function renderList() {
    render(
      listTemplate(dataService.records, loadRecords, onRecordChanged),
      document.body
    );
  }

  const loadRecords = () => {
    dataService.loadRecords();
    renderList();
  };

  const onRecordChanged = (id, label) => {
    dataService.updateRecord(id, label);
    renderList();
  };

  renderList();
};
