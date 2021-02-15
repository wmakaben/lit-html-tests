import { html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map.js";

export const recordTemplate = (item, onChange) => {
  const styles = {
    display: "flex",
    "align-items": "center",
    padding: "5px",
    margin: "5px",
    background: item.edited ? "black" : "white",
    color: item.edited ? "white" : "black"
  };

  const updateLabel = e => {
    onChange(item.id, e.srcElement.value, true);
  };

  const load = {
    handleEvent() {
      onChange(item.id, item.label, !item.edited);
    },
    capture: true
  };

  return html`
    <div style="${styleMap(styles)}">
      <img src=${
        item.img
      } style="margin-right: 5px; width: 100px; height 100px;"></img>
      <input .value=${item.label} @change=${updateLabel}></input>
      <button @click=${load} style="margin-left: 5px";>Toggle status</button>
    </div>
  `;
};
