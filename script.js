// Declarations

// Fetch API

function displayColors(colors) {
  let myColorsHtml = colors
    .map((color) => {
      return `<div class="my-color" style="background-color: ${color.value}">${color.value}</div>`;
    })
    .join("");

  console.log(myColorsHtml);

  document.body.innerHTML = `<div class="my-colors">
        ${myColorsHtml}
    </div>`;
}

async function getColors() {
  let response = await fetch("https://apis.scrimba.com/hexcolors?count=5");
  let data = await response.json();
  let colors = data.colors;
  displayColors(colors);
}

getColors();
