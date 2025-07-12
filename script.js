const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    if (value) {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

clearBtn.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

equalsBtn.addEventListener("click", () => {
  try {
    display.value = eval(currentInput);
    currentInput = display.value;
  } catch (e) {
    display.value = "Error";
    currentInput = "";
  }
});
document.addEventListener("keydown", (e) => {
  const allowedKeys = "0123456789/*-+.";
  if (allowedKeys.includes(e.key)) {
    currentInput += e.key;
    display.value = currentInput;
  } else if (e.key === "Enter") {
    try {
      display.value = eval(currentInput);
      currentInput = display.value;
    } catch {
      display.value = "Error";
      currentInput = "";
    }
  } else if (e.key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } else if (e.key === "Escape") {
    currentInput = "";
    display.value = "";
  }
});