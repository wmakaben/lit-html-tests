import { render } from "lit-html";

import { DataService } from "./data.js";
import { listTemplate } from "./list.js";

export const renderTemplate = () => {
  const dataService = new DataService();

  const sortConfig = {
    onChange: onSortChange,
    options: ["id", "label", "edited"],
    field: "id"
  };

  function renderList() {
    render(
      listTemplate(
        dataService.records,
        loadRecords,
        onRecordChanged,
        sortConfig
      ),
      document.body
    );
  }

  const loadRecords = () => {
    dataService.loadRecords();
    renderList();
  };

  const onRecordChanged = (id, label, edited) => {
    dataService.updateRecord(id, label, edited);
    renderList();
  };

  function onSortChange(field) {
    sortConfig.field = field;
    dataService.sortRecords(field);
    renderList();
  }

  renderList();
};
