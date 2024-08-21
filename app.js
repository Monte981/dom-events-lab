document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('.display');
  let currentInput = '';
  let operator = '';
  let firstOperand = null;

  const numberButtons = document.querySelectorAll('.button.number');
  const operatorButtons = document.querySelectorAll('.button.operator');
  const equalsButton = document.querySelector('.button.equals');

  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      currentInput += button.textContent;
      display.textContent = currentInput;
    });
  });

  operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (currentInput !== '') {
        if (firstOperand === null) {
          firstOperand = parseFloat(currentInput);
        } else if (operator) {
          firstOperand = calculate(firstOperand, parseFloat(currentInput), operator);
        }
        operator = button.textContent;
        currentInput = '';
        display.textContent = operator;
      }
    });
  });

  equalsButton.addEventListener('click', () => {
    if (firstOperand !== null && currentInput !== '' && operator) {
      const result = calculate(firstOperand, parseFloat(currentInput), operator);
      display.textContent = result;
      currentInput = '';
      firstOperand = null;
      operator = '';
    }
  });

  function calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  }
});

