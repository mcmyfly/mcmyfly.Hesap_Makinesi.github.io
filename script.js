let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Hata';
  }
}

function toggleSign() {
  display.value = (parseFloat(display.value) * -1).toString();
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}

function calculatePercentage() {
  display.value = (parseFloat(display.value) / 100).toString();
}

function calculateSquareRoot() {
  display.value = Math.sqrt(parseFloat(display.value)).toString();
}
