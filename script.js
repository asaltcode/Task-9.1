const num = "C ← . X 7 8 9 / 4 5 6 - 1 2 3 + 0 00 =";
const numList = num.split(" ");

// const h1 = document.getElementById("title");
const h1 = document.createElement("h1");
const p = document.createElement("p");
const container = document.createElement("div");
const calculator = document.createElement("div");
const input_box = document.createElement("div");
const numBtn = document.createElement("div");
const input = document.createElement("input");

container.className = "container";
calculator.className = "calculator";
input_box.id = "inputBox";
numBtn.className = "nums";
input.id = "result";
h1.innerText = "Calculator";
h1.id = "title";

//p tag
p.innerText = "This is a calculator program that uses the DOM";
p.id = "description";
//body append
document.body.append(h1, p, container);
container.append(calculator);
calculator.append(input_box, numBtn);

const inputBox = document.getElementById("inputBox");
inputBox.append(input);

//This function button created
function buttons(valu) {
  let element = document.createElement("button");
  element.setAttribute("value", valu);
  element.setAttribute("id", valu);
  element.innerText = valu;

  let btnList = element.innerText;
  if (btnList == "C" || btnList === "←") {
    switch (btnList === valu) {
      //input value all clear
      case valu === "C":
        element.style.color = "red";
        element.id = "clear";
        element.value = "";
        element.addEventListener("click", () => {
          input.value = "";
        });
        break;
      case valu === "←":
        element.addEventListener("click", () => {
          input.value = input.value.slice(0, -1);
        });
        element.value = "";
        break;
    }
  }
  if (
    btnList === "X" ||
    btnList === "/" ||
    btnList === "-" ||
    btnList === "+" ||
    btnList === "."
  ) {
    element.style.color = "blue";
    switch (btnList === valu) {
      case valu === "+":
        element.id = "add";
        break;
      case valu === "-":
        element.id = "subtract";
        break;
      case valu === "X":
        element.id = "multiplication";
        element.value = "*";
        break;
      case valu === "/":
        element.id = "division";
        break;
      case valu === ".":
        element.id = "point";
    }
  }
  //Calculate values for result
  if (btnList === "=") {
    element.id = "equal";
    element.value = "";
    element.addEventListener("click", () => {
      try {
        input.value = eval(input.value);
      } catch (error) {
        alert("Only numbers are allowed");
        input.value = "";
      }
    });
  }
  //iinserting the entered value
  element.addEventListener("click", () => {
    input.value += element.value;
  });

  return element;
}
//button value pushing
for (let i = 0; i < numList.length; i++) {
  let inp = buttons(numList[i]);
  numBtn.append(inp);
}
