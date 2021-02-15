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
    onChange(item.id, e.srcElement.value);
  };

  return html`
    <div style="${styleMap(styles)}">
      <img src=${
        item.img
      } style="margin-right: 5px; width: 100px; height 100px;"></img>
      <input .value=${item.label} @change=${updateLabel}></input>
    </div>
  `;
};
