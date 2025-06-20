let display = document.getElementById('display');

// Append input to the display
function appendToDisplay(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Calculate the result
function calculate() {
  try {
    display.value = eval(display.value); // this was helped by deepseek
  } catch (error) {
    display.value = 'Error';
  }
}

