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

const changeLangText = `<p>Для переключения языка комбинация: ctrl + shift</p>`;
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
         const button = `<button class="keyboard-button meta-button" type="button">Win</button>`;
         buttonsContainer.insertAdjacentHTML('beforeend', button);
      } else if (element === 'AltLeft') {
         const button = `<button class="keyboard-button alt-button-left" type="button">Alt</button>`;
         buttonsContainer.insertAdjacentHTML('beforeend', button);
      } else if (element === 'Space') {
         const button = `<button class="keyboard-button space-button" type="button">${addButtonIcon('space_bar')}</button>`;
         buttonsContainer.insertAdjacentHTML('beforeend', button);
      } else if (element === 'AltRight') {
         const button = `<button class="keyboard-button alt-button-right" type="button">Alt</button>`;
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

if (localStorage.getItem('currentLanguage')) {
   currentLanguage = localStorage.getItem('currentLanguage');
}

if (currentLanguage === 'ru') {
   createButtons(russianButtons);
} else {
   createButtons(englishButtons);
}

function deleteAllButtons() {
   let buttons = document.querySelectorAll('.keyboard-button');
   buttons.forEach(element => element.remove());
}

function getButtonFromDocument(string) {
   return document.querySelector(string);
}

function getCopyOfArrayWithUpperCase(array) {
   let copyButtons = [...array];

   for (let i = 0; i < copyButtons.length; i++) {
      if (typeof copyButtons[i] === 'string' && copyButtons[i].length <= 1) {
         copyButtons[i] = copyButtons[i].toUpperCase();
      }
   }

   return copyButtons;
}

document.addEventListener('keydown', (event) => {
   if (event.ctrlKey && event.shiftKey) {
      if (currentLanguage === 'en') {
         deleteAllButtons();
         currentLanguage = 'ru';
         localStorage.setItem('currentLanguage', currentLanguage);
         createButtons(russianButtons);
      } else if (currentLanguage === 'ru') {
         deleteAllButtons();
         currentLanguage = 'en';
         localStorage.setItem('currentLanguage', currentLanguage);
         createButtons(englishButtons);
      }
   };

   let buttons = document.querySelectorAll('.keyboard-button');
   buttons.forEach(element => {
      if (event.key.toLowerCase() === element.textContent.toLowerCase() && event.key.length <= 1) {
         element.classList.add('active-button');
         wrapperTextArea.textContent += element.textContent;
      }
   });

   if (event.code === 'Space') {
      getButtonFromDocument('.space-button').classList.add('active-button');
      wrapperTextArea.textContent += ' ';
   }
});

document.addEventListener('keyup', (event) => {
   let buttons = document.querySelectorAll('.keyboard-button');
   buttons.forEach(element => {
      if (event.key.toLowerCase() === element.textContent.toLowerCase()) {
         if (event.key !== 'CapsLock') {
            element.classList.remove('active-button');
         }
      }
      if (event.code === 'Space') {
         getButtonFromDocument('.space-button').classList.remove('active-button');
      }
   });
});

document.addEventListener('keydown', (event) => {
   if (event.key === 'Tab') {
      event.preventDefault();
      wrapperTextArea.textContent += '   ';
      getButtonFromDocument('.tab-button').classList.add('active-button');
   };
});

document.addEventListener('keyup', (event) => {
   if (event.key === 'Tab') {
      getButtonFromDocument('.tab-button').classList.remove('active-button');
   };
});

document.addEventListener('keydown', (event) => {
   if (event.key === 'CapsLock') {
      if (getButtonFromDocument('.caps-button').classList.contains('active-button')) {
         deleteAllButtons();
         currentLanguage === 'ru' ? createButtons(russianButtons) : createButtons(englishButtons);
         getButtonFromDocument('.caps-button').classList.remove('active-button');
      } else {
         deleteAllButtons();
         if (currentLanguage === 'ru') {
            createButtons(getCopyOfArrayWithUpperCase(russianButtons));
         } else {
            createButtons(getCopyOfArrayWithUpperCase(englishButtons));
         }
         getButtonFromDocument('.caps-button').classList.add('active-button');
      }
   };
});

document.addEventListener('keydown', (event) => {
   if (event.key === 'Shift') {
      if (currentLanguage === 'ru') {
         if (getButtonFromDocument('.caps-button').classList.contains('active-button')) {
            deleteAllButtons();
            createButtons(russianButtonsWithShift);
            getButtonFromDocument('.caps-button').classList.add('active-button');
         } else {
            deleteAllButtons();
            createButtons(russianButtonsWithShift);
         }

         if (event.code === 'ShiftLeft') {
            getButtonFromDocument('.shift-left-button').classList.add('active-button');
         }
         if (event.code === 'ShiftRight') {
            getButtonFromDocument('.shift-right-button').classList.add('active-button');
         }
      } else if (currentLanguage === 'en') {
         if (getButtonFromDocument('.caps-button').classList.contains('active-button')) {
            deleteAllButtons();
            createButtons(englishButtonsWithShift);
            getButtonFromDocument('.caps-button').classList.add('active-button');
         } else {
            deleteAllButtons();
            createButtons(englishButtonsWithShift);
         }

         if (event.code === 'ShiftLeft') {
            getButtonFromDocument('.shift-left-button').classList.add('active-button');
         }
         if (event.code === 'ShiftRight') {
            getButtonFromDocument('.shift-right-button').classList.add('active-button');
         }
      }
   };
});

document.addEventListener('keyup', (event) => {
   if (event.key === 'Shift') {
      if (currentLanguage === 'ru') {
         if (getButtonFromDocument('.caps-button').classList.contains('active-button')) {
            deleteAllButtons();
            createButtons(getCopyOfArrayWithUpperCase(russianButtons));
            getButtonFromDocument('.caps-button').classList.add('active-button');
         } else {
            deleteAllButtons();
            createButtons(russianButtons);
         }
      } else if (currentLanguage === 'en') {
         if (getButtonFromDocument('.caps-button').classList.contains('active-button')) {
            deleteAllButtons();
            createButtons(getCopyOfArrayWithUpperCase(englishButtons));
            getButtonFromDocument('.caps-button').classList.add('active-button');
         } else {
            deleteAllButtons();
            createButtons(englishButtons);
         }
      }
   }
});

document.addEventListener('keydown', (event) => {
   if (event.key === 'Control') {
      if (event.code === 'ControlLeft') {
         getButtonFromDocument('.control-left').classList.add('active-button');
      }
      if (event.code === 'ControlRight') {
         getButtonFromDocument('.control-right').classList.add('active-button');
      }
   }
});

document.addEventListener('keyup', (event) => {
   if (event.key === 'Control') {
      if (event.code === 'ControlLeft') {
         getButtonFromDocument('.control-left').classList.remove('active-button');
      }
      if (event.code === 'ControlRight') {
         getButtonFromDocument('.control-right').classList.remove('active-button');
      }
   }
});

document.addEventListener('keydown', (event) => {
   if (event.key === 'Meta') {
      getButtonFromDocument('.meta-button').classList.add('active-button');
   }
});

document.addEventListener('keyup', (event) => {
   if (event.key === 'Meta') {
      getButtonFromDocument('.meta-button').classList.remove('active-button');
   }
});

document.addEventListener('keydown', (event) => {
   if (event.key === 'Alt' && event.code === 'AltLeft') {
      event.preventDefault();
      getButtonFromDocument('.alt-button-left').classList.add('active-button');
   }
   if (event.key === 'AltGraph' || event.code === 'AltRight') {
      event.preventDefault();
      getButtonFromDocument('.alt-button-right').classList.add('active-button');
   }
});

document.addEventListener('keyup', (event) => {
   if (event.key === 'Alt' && event.code === 'AltLeft') {
      event.preventDefault();
      getButtonFromDocument('.alt-button-left').classList.remove('active-button');
   }
   if (event.key === 'AltGraph' || event.code === 'AltRight') {
      event.preventDefault();
      getButtonFromDocument('.alt-button-right').classList.remove('active-button');
   }
});

document.addEventListener('keydown', (event) => {
   if (event.key === 'ArrowLeft') {
      getButtonFromDocument('.arrow-left').classList.add('active-button');
      wrapperTextArea.textContent += ' ◄ ';
   }
   if (event.key === 'ArrowUp') {
      getButtonFromDocument('.arrow-up').classList.add('active-button');
      wrapperTextArea.textContent += ' ▲ ';
   }
   if (event.key === 'ArrowRight') {
      getButtonFromDocument('.arrow-right').classList.add('active-button');
      wrapperTextArea.textContent += ' ► ';
   }
   if (event.key === 'ArrowDown') {
      getButtonFromDocument('.arrow-down').classList.add('active-button');
      wrapperTextArea.textContent += ' ▼ ';
   }
});

document.addEventListener('keyup', (event) => {
   if (event.key === 'ArrowLeft') {
      getButtonFromDocument('.arrow-left').classList.remove('active-button');
   }
   if (event.key === 'ArrowUp') {
      getButtonFromDocument('.arrow-up').classList.remove('active-button');
   }
   if (event.key === 'ArrowRight') {
      getButtonFromDocument('.arrow-right').classList.remove('active-button');
   }
   if (event.key === 'ArrowDown') {
      getButtonFromDocument('.arrow-down').classList.remove('active-button');
   }
});

document.addEventListener('keydown', (event) => {
   if (event.key === 'Enter') {
      wrapperTextArea.textContent += '\n';
      getButtonFromDocument('.enter-button').classList.add('active-button');
   }
});

document.addEventListener('keyup', (event) => {
   if (event.key === 'Enter') {
      getButtonFromDocument('.enter-button').classList.remove('active-button');
   }
});

document.addEventListener('keydown', (event) => {
   if (event.key === 'Delete') {
      wrapperTextArea.textContent = '';
      getButtonFromDocument('.del-button').classList.add('active-button');
   };
});

document.addEventListener('keyup', (event) => {
   if (event.key === 'Delete') {
      getButtonFromDocument('.del-button').classList.remove('active-button');
   };
});

document.addEventListener('keydown', (event) => {
   if (event.key === 'Backspace') {
      wrapperTextArea.textContent = wrapperTextArea.textContent.substring(0, wrapperTextArea.textContent.length - 1);
      getButtonFromDocument('.backspace-button').classList.add('active-button');
   };
});

document.addEventListener('keyup', (event) => {
   if (event.key === 'Backspace') {
      getButtonFromDocument('.backspace-button').classList.remove('active-button');
   };
});



buttonsContainer.addEventListener("mousedown", (event) => {
   if (event.target.classList.contains('keyboard-button')) {
      event.target.classList.add('active-button');
   }
});

buttonsContainer.addEventListener("mouseup", (event) => {
   if (event.target.classList.contains('keyboard-button')) {
      event.target.classList.remove('active-button');
   }
});

buttonsContainer.addEventListener('click', (event) => {
   if (event.target.classList.contains('keyboard-button')) {
      if (event.target.textContent === 'Tab') {
         wrapperTextArea.textContent += '   ';
      }
   }
});

buttonsContainer.addEventListener('click', (event) => {
   if (event.target.classList.contains('keyboard-button')) {
      if (event.target.textContent === 'CapsLock') {
         wrapperTextArea.textContent += '';
         if (document.querySelector('.buttons-container').classList.contains('caps-active')) {
            deleteAllButtons();
            document.querySelector('.buttons-container').classList.remove('caps-active');
            currentLanguage === 'ru' ? createButtons(russianButtons) : createButtons(englishButtons);
            getButtonFromDocument('.caps-button').classList.remove('active-button');
         } else {
            deleteAllButtons();
            if (currentLanguage === 'ru') {
               createButtons(getCopyOfArrayWithUpperCase(russianButtons));
            } else {
               createButtons(getCopyOfArrayWithUpperCase(englishButtons));
            }
            document.querySelector('.buttons-container').classList.add('caps-active');
            getButtonFromDocument('.caps-button').classList.add('active-button');
         }
      }
   }
});

buttonsContainer.addEventListener('click', (event) => {
   if (event.target.classList.contains('keyboard-button')) {
      if (event.target.textContent === 'Shift') {
         if (currentLanguage === 'ru') {
            if (getButtonFromDocument('.caps-button').classList.contains('active-button')) {
               if (document.querySelector('.buttons-container').classList.contains('shift-active')) {
                  document.querySelector('.buttons-container').classList.remove('shift-active');
                  deleteAllButtons();
                  createButtons(getCopyOfArrayWithUpperCase(russianButtons));
               } else {
                  deleteAllButtons();
                  createButtons(russianButtonsWithShift);
                  getButtonFromDocument('.caps-button').classList.add('active-button');
                  document.querySelector('.buttons-container').classList.add('shift-active');
                  if (event.target.classList.contains('shift-left-button')) {
                     getButtonFromDocument('.shift-left-button').classList.add('active-button');
                  }
                  if (event.target.classList.contains('shift-right-button')) {
                     getButtonFromDocument('.shift-right-button').classList.add('active-button');
                  }
               }
            } else {
               if (document.querySelector('.buttons-container').classList.contains('shift-active')) {
                  document.querySelector('.buttons-container').classList.remove('shift-active');
                  deleteAllButtons();
                  createButtons(russianButtons);
               } else {
                  deleteAllButtons();
                  createButtons(russianButtonsWithShift);
                  document.querySelector('.buttons-container').classList.add('shift-active');
                  if (event.target.classList.contains('shift-left-button')) {
                     getButtonFromDocument('.shift-left-button').classList.add('active-button');
                  }
                  if (event.target.classList.contains('shift-right-button')) {
                     getButtonFromDocument('.shift-right-button').classList.add('active-button');
                  }
               }
            }
         } else if (currentLanguage === 'en') {
            if (getButtonFromDocument('.caps-button').classList.contains('active-button')) {
               if (document.querySelector('.buttons-container').classList.contains('shift-active')) {
                  document.querySelector('.buttons-container').classList.remove('shift-active');
                  deleteAllButtons();
                  createButtons(getCopyOfArrayWithUpperCase(englishButtons));
               } else {
                  deleteAllButtons();
                  createButtons(englishButtonsWithShift);
                  getButtonFromDocument('.caps-button').classList.add('active-button');
                  document.querySelector('.buttons-container').classList.add('shift-active');
                  if (event.target.classList.contains('shift-left-button')) {
                     getButtonFromDocument('.shift-left-button').classList.add('active-button');
                  }
                  if (event.target.classList.contains('shift-right-button')) {
                     getButtonFromDocument('.shift-right-button').classList.add('active-button');
                  }
               }
            } else {
               if (document.querySelector('.buttons-container').classList.contains('shift-active')) {
                  document.querySelector('.buttons-container').classList.remove('shift-active');
                  deleteAllButtons();
                  createButtons(englishButtons);
               } else {
                  deleteAllButtons();
                  createButtons(englishButtonsWithShift);
                  document.querySelector('.buttons-container').classList.add('shift-active');
                  if (event.target.classList.contains('shift-left-button')) {
                     getButtonFromDocument('.shift-left-button').classList.add('active-button');
                  }
                  if (event.target.classList.contains('shift-right-button')) {
                     getButtonFromDocument('.shift-right-button').classList.add('active-button');
                  }
               }
            }
         }
      }
   }
});

buttonsContainer.addEventListener('click', (event) => {
   if (event.target.classList.contains('keyboard-button')) {
      if (event.target.textContent === 'Ctrl' && event.shiftKey) {
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
      if (event.target.textContent === 'Shift' && event.ctrlKey) {
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
   }
});

buttonsContainer.addEventListener('click', (event) => {
   if (event.target.classList.contains('keyboard-button')) {
      if (event.target.textContent === 'space_bar') {
         wrapperTextArea.textContent += ' ';
      }
   }
});

buttonsContainer.addEventListener('click', (event) => {
   if (event.target.classList.contains('keyboard-button') || event.target.classList.contains('material-icons')) {
      if (event.target.textContent === 'chevron_left') {
         wrapperTextArea.textContent += ' ◄ ';
      }
      if (event.target.textContent === 'expand_less') {
         wrapperTextArea.textContent += ' ▲ ';
      }
      if (event.target.textContent === 'chevron_right') {
         wrapperTextArea.textContent += ' ► ';
      }
      if (event.target.textContent === 'expand_more') {
         wrapperTextArea.textContent += ' ▼ ';
      }
   }
});

buttonsContainer.addEventListener('click', (event) => {
   if (event.target.classList.contains('keyboard-button') || event.target.classList.contains('material-icons')) {
      if (event.target.textContent === 'keyboard_return' || event.target.textContent === 'Enterkeyboard_return') {
         wrapperTextArea.textContent += '\n';
      }
   }
});

buttonsContainer.addEventListener('mousedown', (event) => {
   if (event.target.classList.contains('keyboard-button')) {
      if (event.target.textContent === 'Del') {
         wrapperTextArea.textContent = '';
      }
   }
});

buttonsContainer.addEventListener('mousedown', (event) => {
   if (event.target.classList.contains('keyboard-button') || event.target.classList.contains('material-icons')) {
      if (event.target.textContent === 'keyboard_backspace') {
         wrapperTextArea.textContent = wrapperTextArea.textContent.substring(0, wrapperTextArea.textContent.length - 1);
      }
   }
});

buttonsContainer.addEventListener('click', (event) => {
   if (event.target.classList.contains('keyboard-button')) {
      if (event.target.textContent.length <= 1) {
         wrapperTextArea.textContent += event.target.textContent;
      }
   }
});