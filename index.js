import { html, render } from "lit-html";

const myTemplate = defVal => {
  let inputVal = defVal || "";

  const addToList = {
    handleEvent(e) {
      console.log(`Adding: ${inputVal}`);
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
  `;
};

render(myTemplate("test"), document.body);
