const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let resultShown = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (action === 'clear') {
      currentInput = '';
      display.textContent = '0';
      return;
    }

    if (action === 'delete') {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || '0';
      return;
    }

    if (action === 'calculate') {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
        resultShown = true;
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
      return;
    }

    if (resultShown && !isNaN(value)) {
      currentInput = value;
      resultShown = false;
    } else {
      currentInput += value;
    }

    display.textContent = currentInput;
  });
});
