const documentBody = document.body;

let currentLanguage = 'en';

const addButtonIcon = (name) => {
   return `<i class="material-icons">${name}</i>`;
};

const divWrapper = document.createElement('div');
divWrapper.classList.add('wrapper');
documentBody.append(divWrapper);

const wrapperHeading = `<h1>RSS Virtual keyboard</h1>`;
divWrapper.insertAdjacentHTML('beforeend', wrapperHeading);

const wrapperTextArea = document.createElement('textarea');
divWrapper.append(wrapperTextArea);

const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons-container');
divWrapper.append(buttonsContainer);

const helpText = `<p>Клавиатура создана в операционной системе Windows</p>`;
divWrapper.insertAdjacentHTML('beforeend', helpText);

const changeLangText = `<p>Для переключения языка комбинация: левыe ctrl + shift</p>`;
divWrapper.insertAdjacentHTML('beforeend', changeLangText);

const russianButtons = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
   'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
   'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
   'ShiftLeft', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'ShiftRight',
   'ControlLeft', 'Meta', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const russianButtonsWithShift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
   'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\/', 'Del',
   'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
   'ShiftLeft', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'ArrowUp', 'ShiftRight',
   'ControlLeft', 'Meta', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const englishButtons = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
   'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
   'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
   'ShiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'ShiftRight',
   'ControlLeft', 'Meta', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const englishButtonsWithShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
   'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '\|', 'Del',
   'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
   'ShiftLeft', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'ArrowUp', 'ShiftRight',
   'ControlLeft', 'Meta', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];


function createButtons(array) {
   array.map(element => {
      if (element === 'Backspace') {
         const button = `<button class="keyboard-button backspace-button" type="button">${addButtonIcon('keyboard_backspace')}</button>`;
         buttonsContainer.insertAdjacentHTML('beforeend', button);
      } else if (element === 'Tab') {
         const button = `<button class="keyboard-button tab-button" type="button">${element}</button>`;
         buttonsContainer.insertAdjacentHTML('beforeend', button);
      } else if (element === 'Del') {
         const button = `<button class="keyboard-button del-button" type="button">${element}</button>`;
         buttonsContainer.insertAdjacentHTML('beforeend', button);
      } else if (element === 'CapsLock') {
         const button = `<button class="keyboard-button caps-button" type="button">${element}</button>`;
         buttonsContainer.insertAdjacentHTML('beforeend', button);
      } else if (element === 'Enter') {
         const button = `<button class="keyboard-button enter-button" type="button">${element}<br>${addButtonIcon('keyboard_return')}</button>`;
         buttonsContainer.insertAdjacentHTML('beforeend', button);
      } else if (element === 'ShiftLeft') {
         const button = `<button class="keyboard-button shift-left-button" type="button">Shift</button>`;
         buttonsContainer.insertAdjacentHTML('beforeend', button);
      } else if (element === 'ArrowUp') {
         const button = `<button class="keyboard-button arrow-up" type="button">${addButtonIcon('expand_less')}</button>`;
         buttonsContainer.insertAdjacentHTML('beforeend', button);
      } else if (element === 'ShiftRight') {
         const button = `<button class="keyboard-button shift-right-button" type="button">Shift</button>`;
         buttonsContainer.insertAdjacentHTML('beforeend', button);
      } else if (element === 'ControlLeft') {
         const button = `<button class="keyboard-button control-left" type="button">Ctrl</button>`;
         buttonsContainer.insertAdjacentHTML('beforeend', button);
      } else if (element === 'Meta') {
         const button = `<button class="keyboard-button" type="button">Win</button>`;
         buttonsContainer.insertAdjacentHTML('beforeend', button);
      } else if (element === 'AltLeft') {
         const button = `<button class="keyboard-button" type="button">Alt</button>`;
         buttonsContainer.insertAdjacentHTML('beforeend', button);
      } else if (element === 'Space') {
         const button = `<button class="keyboard-button space-button" type="button">${addButtonIcon('space_bar')}</button>`;
         buttonsContainer.insertAdjacentHTML('beforeend', button);
      } else if (element === 'AltRight') {
         const button = `<button class="keyboard-button" type="button">Alt</button>`;
         buttonsContainer.insertAdjacentHTML('beforeend', button);
      } else if (element === 'ArrowLeft') {
         const button = `<button class="keyboard-button arrow-left" type="button">${addButtonIcon('chevron_left')}</button>`;
         buttonsContainer.insertAdjacentHTML('beforeend', button);
      } else if (element === 'ArrowDown') {
         const button = `<button class="keyboard-button arrow-down" type="button">${addButtonIcon('expand_more')}</button>`;
         buttonsContainer.insertAdjacentHTML('beforeend', button);
      } else if (element === 'ArrowRight') {
         const button = `<button class="keyboard-button arrow-right" type="button">${addButtonIcon('chevron_right')}</button>`;
         buttonsContainer.insertAdjacentHTML('beforeend', button);
      } else if (element === 'ControlRight') {
         const button = `<button class="keyboard-button control-right" type="button">Ctrl</button>`;
         buttonsContainer.insertAdjacentHTML('beforeend', button);
      } else {
         const button = `<button class="keyboard-button" type="button">${element}</button>`;
         buttonsContainer.insertAdjacentHTML('beforeend', button);
      }
   });
}

createButtons(englishButtons);

function deleteAllButtons() {
   let buttons = document.querySelectorAll('.keyboard-button');
   buttons.forEach(element => element.remove());
}

window.addEventListener('keydown', (event) => {
   if (event.ctrlKey && event.shiftKey) {
      if (currentLanguage === 'en') {
         deleteAllButtons();
         currentLanguage = 'ru';
         createButtons(russianButtons);
      } else if (currentLanguage === 'ru') {
         deleteAllButtons();
         currentLanguage = 'en';
         createButtons(englishButtons);
      }
   }
});

window.addEventListener('keydown', (event) => {
   if (event.shiftKey) {
      if (currentLanguage === 'ru') {
         deleteAllButtons();
         createButtons(russianButtonsWithShift);
      } else if (currentLanguage === 'en') {
         deleteAllButtons();
         createButtons(englishButtonsWithShift);
      }
   }
});

window.addEventListener('keyup', (event) => {
   if (event.key === 'Shift') {
      if (currentLanguage === 'ru') {
         deleteAllButtons();
         createButtons(russianButtons);
      } else if (currentLanguage === 'en') {
         deleteAllButtons();
         createButtons(englishButtons);
      }
   }
});

window.addEventListener('keydown', (event) => {


   let buttons = document.querySelectorAll('.keyboard-button');
   buttons.forEach(element => {
      if (event.key === element.textContent) {
         element.classList.add('active-button');
         wrapperTextArea.textContent += element.textContent;
      }
   })
   if (event.shiftKey && event.code === 'ShiftLeft') {
      console.log(true)
      event.key.classList.add('active-button');
   } else if (event.shiftKey && event.code === 'ShiftRight') {
      document.querySelector('.shift-right-button').classList.add('active-button');
   }
});

window.addEventListener('keyup', (event) => {
   let buttons = document.querySelectorAll('.keyboard-button');
   buttons.forEach(element => {
      if (event.key === element.textContent) {
         element.classList.remove('active-button');
      }
   })
});

buttonsContainer.addEventListener("click", (event) => {
   if (event.target.classList.contains('keyboard-button')) {
      wrapperTextArea.textContent += event.target.textContent;
   }
});