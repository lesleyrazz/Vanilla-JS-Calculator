var displayValue;
var operator;
var numbers = [];
var runningTotal;
var total;
var decimalCounter = 0;
var storedNum;
var justOperated;

const buttons = document.querySelectorAll(".button");
buttons.forEach(onClick);

function onClick(clickedButton) {

  function logID(button) {
    if (button.target.className == "operator button") {
      operator = button.target.id;
      storedNum = display.textContent;
      numbers.push(storedNum);
      display.textContent="";
      console.log(numbers);
      if(numbers.length > 1) {
        operate(Number(numbers[0]), Number(numbers[1]), operator);
        display.textContent = numbers[2];
        numbers = [numbers[2]];
        justOperated = "yes";
      }
    }

    if(button.target.id == "equals") {   
      storedNum = display.textContent;
      numbers.push(storedNum);         
      console.log(numbers);          
      operate(Number(numbers[0]), Number(numbers[1]), operator); 
      display.textContent = displayValue;
        justOperated = "yes";
    }

    if (button.target.className == "number button") {
      if(justOperated == "yes") {
        display.textContent ="";
        justOperated = "no";
      }
      runningTotal = document.createElement('span');
      total = `${button.target.id}`;
      runningTotal.textContent = total;
      display.appendChild(runningTotal);
    }

    if(button.target.id == "+-") {
      display.textContent = display.textContent * - 1;
    }

    if(button.target.id == "backspace") {
      if(display.textContent[display.textContent.length - 1] == ".") {
        decimalCounter = 0;
      }
      display.textContent = display.textContent.slice(0, -1);
    }

    if(button.target.id == "clear") {
      decimalCounter = 0;
      numbers = [];
      display.textContent = "";
    }

    if(button.target.id == ".") {
      decimalCounter++
      if(decimalCounter > 1) {
        display.textContent = display.textContent.slice(0, -1);
      }
      }
    }
  
clickedButton.addEventListener("click", logID);
}

// These are all the functions for the operations of the calculator.
// Operate() performs the operation requested then pushes the result to the display 
function operate(num1, num2, operator) {
  var total;
  if(operator === "+") {
    total = num1 + num2;
    displayValue = total;
  }

  if(operator === "-") {
    total = num1 - num2;
    displayValue =  total;
  }
  if(operator === "*") {
    total = num1 * num2;
    displayValue =  total;
  }
  if(operator === "/") {
    total = num1 / num2;
    displayValue =  total;
  }
  if(operator === "**") {
    total = num1 ** num2;
    displayValue =  total;
  }

  if(operator == "plusminus") {
    total = num1 * - 1;
    displayValue =  total;
  }
  numbers.push(displayValue);
}
