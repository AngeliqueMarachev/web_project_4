const showInputError = (inputEl, formEl, settings) => {
  const errorElement = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.add(settings.errorClass);
  errorElement.textContent = inputEl.validationMessage;
  errorElement.classList.add(settings.inputErrorClass);
};

const hideInputError = (inputEl, formEl, settings) => {
  const errorElement = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.remove(settings.errorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(settings.inputErrorClass);
};

const checkInputValidity = (formEl, inputEl, settings) => {
  if (inputEl.validity.valid) {
    hideInputError(inputEl, formEl, settings);
  } else {
    showInputError(inputEl, formEl, settings);
  }
};

const hasValidInput = (inputList) => {
  return inputList.every((inputEl) => inputEl.validity.valid);
};

// export const toggleButton = (inputList, button, settings) => {
//   if (hasValidInput(inputList)) {
//     button.disabled = false;
//     button.classList.remove(settings.inactiveButtonClass);
//   } else {
//     button.disabled = true;
//     button.classList.add(settings.inactiveButtonClass);
//   }
// };


export const disableButton = (button, settings) => {
  button.disabled = false;
  button.classList.remove(settings.inactiveButtonClass);
}

const enableButton = (button, settings) => {
   button.disabled = true;
   button.classList.add(settings.inactiveButtonClass);
}

const toggleButton = (inputList, button, settings) => {
 if (hasValidInput(inputList)) {
   disableButton(button, settings)
 } else {
   enableButton(button, settings)
 }
};

const setEventListeners = (formEl, settings) => {
  const inputList = [...formEl.querySelectorAll(settings.inputSelector)];
  const submitButton = formEl.querySelector(settings.submitButtonSelector);
  inputList.forEach((inputEl) => {
    inputEl.addEventListener("input", () => {
      checkInputValidity(formEl, inputEl, settings);
      // toggleButton(inputList, submitButton, settings);
      disableButton(inputList, submitButton, settings);
    });
  });
};

const enableValidation = (settings) => {
  const formList = [...document.querySelectorAll(settings.formSelector)];
  formList.forEach((formEl) => {
    formEl.addEventListener("submit", (evt) => evt.preventDefault());
    setEventListeners(formEl, settings);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
