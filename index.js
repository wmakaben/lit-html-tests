import { html, render } from "lit-html";
import { styleMap } from "lit-html/directives/style-map.js";

const listItemTemplate = item => {
  const styles = {
    color: item.isDone ? "#808080" : "black",
    "text-decoration": item.isDone ? "line-through" : "none",
    "font-weight": item.recent ? 600 : 200
  };
  return html`
    <li style="${styleMap(styles)}">${item.text}</li>
  `;
};

const listTemplate = initItems => {
  const items = initItems || [];
  return html`
    <ul>
      ${items.map(listItemTemplate)}
    </ul>
  `;
};

const myTemplate = onItemAdded => {
  let inputVal = "";

  const addToList = {
    handleEvent(e) {
      console.log(`Adding: ${inputVal}`);
      onItemAdded(inputVal);
    },
    capture: true
  };

  const updateInputValue = e => {
    console.log(`New input value: ${e.srcElement.value}`);
    inputVal = e.srcElement.value;
  };

  return html`
    <input .value=${inputVal} @change=${updateInputValue} ></input>
    <button @click=${addToList}>Add</button>
    <div id="listContainer"></div>
  `;
};

const listItems = [
  { text: "Read lit-html docs", isDone: true },
  { text: "Create example thing" }
];

const onItemAdded = text => {
  listItems.push({ text: text, recent: true });
  render(listTemplate(listItems), document.getElementById("listContainer"));
};

render(myTemplate(onItemAdded), document.body);
render(listTemplate(listItems), document.getElementById("listContainer"));
