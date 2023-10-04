const container = document.getElementById("container");

function generate() {
  let n = (Math.random() * (100 - 10) + 10).toFixed(2);
  for (let i = 0; i < n; i++) {
    var customElement = createCustomElement();
    container.appendChild(customElement);
  }
}

function createCustomElement() {
  var tag = document.createElement("div");
  const randomColor = Math.floor(Math.random() * 16777215).toString(16); //16^6
  tag.style.width = "40px";
  tag.style.height = "40px";
  tag.style.backgroundColor = "#" + randomColor;
  return tag;
}

generate();
