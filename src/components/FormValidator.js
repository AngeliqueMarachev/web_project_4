export default class FormValidator {
  constructor(settings, formEl) {
    this._settings = settings;
    this._formEl = formEl;
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._settings.inputSelector)
    );
    
    this._submitButton = this._formEl.querySelector(
      this._settings.submitButtonSelector
    );
  }

  _showInputError = (inputEl, errorMessage) => {
    const { inputErrorClass, errorClass } = this._settings;
    const errorElement = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(errorClass);
    errorElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
  };

  _hideInputError = (inputEl) => {
    const { inputErrorClass, errorClass } = this._settings;

    const errorElement = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(errorClass);
    errorElement.classList.remove(inputErrorClass);
    errorElement.textContent = "";
  };

  _checkInputValidity = (inputEl) => {
    if (!inputEl.validity.valid) {
      this._showInputError(inputEl, inputEl.validationMessage);
    } else {
      this._hideInputError(inputEl);
    }
  };

  _toggleButton = () => {
    if (this._isFormValid()) {
      this._enableButton();
    } else {
      this.disableButton();
    }
  };

  disableButton = () => {
    this._submitButton.classList.add(this._settings.inactiveButtonClass);
    this._submitButton.disabled = true;
  };

  _enableButton = () => {
    this._submitButton.classList.remove(this._settings.inactiveButtonClass);
    this._submitButton.disabled = false;
  };

  _isFormValid = () => {
    return this._inputList.every((inputEl) => inputEl.validity.valid);
  };

  _setEventListeners = () => {
    this._inputList.forEach((inputEl) => {
      inputEl.addEventListener("input", () => {
        this._checkInputValidity(inputEl);
        this._toggleButton();
      });
    });
  };

  resetValidation() {
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
    this._toggleButton();
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => evt.preventDefault());
    this._setEventListeners();
  }
}
