import { html } from "lit-html";

export const inputTemplate = onItemAdded => {
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
