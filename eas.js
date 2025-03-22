let row = document.createElement("div");
row.className = "row";
for (let i = 0; i < 16; i++) {
  const divsquare = document.createElement("div");
  divsquare.className = "square";
  row.appendChild(divsquare);
}

let rows = document.querySelector("div.squares");
for (i = 0; i < 16; i++) {
  rows.appendChild(row.cloneNode(true));
}

const Squareselector = document.querySelectorAll("div.square");

Squareselector.forEach((squarediv) => {
  squarediv.addEventListener("mouseover", (e) => {
    let values = randomcolors();
    squarediv.style.backgroundColor =
      "rgb(" + values[0] + "," + values[1] + "," + values[2] + ")";
  });
});
const loverlay = document.querySelector("div.overlay");

loverlay.style.display = "none";
const divsketchchange = document.querySelector("div.changesketch");
const ChangingSizebutton = document.querySelector("button.changingbutton");
const RowSelector = document.querySelectorAll("div.row");
ChangingSizebutton.addEventListener("click", (e) => {
  divsketchchange.style.display = "flex";

  loverlay.style.display = "flex";
});

const cancelbutton = document.querySelector("button.cancel");
cancelbutton.addEventListener("click", (e) => {
  loverlay.style.display = "none";
  divsketchchange.style.display = "none";
});

function createsketch(size) {
  let row = document.createElement("div");
  row.className = "row";
  for (let i = 0; i < size; i++) {
    const divsquare = document.createElement("div");
    divsquare.className = "square";
    row.appendChild(divsquare);
  }

  const rows = document.createElement("div");
  rows.className = "squares";
  for (i = 0; i < size; i++) {
    rows.appendChild(row.cloneNode(true));
  }

  return rows;
}

const inputvalue = document.querySelector("input.size");
const confirmbutton = document.querySelector("button.submitsize");
confirmbutton.addEventListener("click", (e) => {
  if (inputvalue.value <= 100) {
    const newrows = createsketch(inputvalue.value);
    const rows = document.querySelector("div.squares");

    rows.innerHTML = newrows.innerHTML;
    const Squareselector = document.querySelectorAll("div.square");
    Squareselector.forEach((squarediv) => {
      squarediv.addEventListener("mouseover", (e) => {
        let values = randomcolors();

        squarediv.style.backgroundColor =
          "rgb(" + values[0] + "," + values[1] + "," + values[2] + ")";
      });
      inputvalue.value = "";
      loverlay.style.display = "none";
    });
  } else alert("no more than 100!");
});

const resetbutton = document.querySelector("button.reset");
resetbutton.addEventListener("click", (e) => {
  const Squareselector = document.querySelectorAll("div.square");
  Squareselector.forEach((squarediv) => {
    squarediv.style.backgroundColor = "white";
  });
});

const newgamebutton = document.querySelector("p.startgame");
const divnewgame = document.querySelector("div.startgame");
newgamebutton.addEventListener("click", (e) => {
  divnewgame.style.display = "none";
});

function randomcolors() {
  let values = [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
  ];
  return values;
}
/*let SquareOpacity = squarediv.style.opacity;
        SquareOpacity = parseFloat(SquareOpacity);
        if (SquareOpacity === 1) {
          SquareOpacity -= 0.1;
          squarediv.style.opacity = SquareOpacity;
        } else {
          SquareOpacity += 0.1;
          squarediv.style.opacity = SquareOpacity;
        }
        console.log(squarediv.style.opacity.value);*/
