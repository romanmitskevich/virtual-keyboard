const documentBody = document.body;

const addButtonIcon = (name) => {
   return `<i class="material-icons">${name}</i>`;
};

const divWrapper = document.createElement('div');
divWrapper.classList.add('wrapper');
documentBody.append(divWrapper);

const wrapperHeading = `<h1>RSS Virtual keyboard</h1>`;
divWrapper.insertAdjacentHTML('beforeend', wrapperHeading);

const wrapperTextArea = `<textarea autofocus></textarea>`;
divWrapper.insertAdjacentHTML('beforeend', wrapperTextArea);

const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons-container');
divWrapper.append(buttonsContainer);

const helpText = `<p>Клавиатура создана в операционной системе Windows</p>`;
divWrapper.insertAdjacentHTML('beforeend', helpText);

const changeLangText = `<p>Для переключения языка комбинация: левыe ctrl + shift</p>`;
divWrapper.insertAdjacentHTML('beforeend', changeLangText);

const russianButtons = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
   'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\'', 'Del',
   'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
   'ShiftLeft', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'ShiftRight',
   'ControlLeft', 'Meta', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const englishButtons = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
   'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\'', 'Del',
   'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
   'ShiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'ShiftRight',
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

createButtons(russianButtons);

buttonsContainer.addEventListener('keydown', (event) => {
   let buttons = document.querySelectorAll('.keyboard-button');
   if (event.target.classList.contains('keyboard-button')) {
      buttons.forEach(element => {
         console.log(event.code, element)
         if (element.code === event.code) {
            element.classList.add('active-button');
         }
      })
   }
})

