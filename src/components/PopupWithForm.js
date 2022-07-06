import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);

    this._form = this._popupElement.querySelector(".popup__form");
    this._button = this._popupElement.querySelector('.popup__button');
    this._handleFormSubmit = handleFormSubmit;
    this._inputs = Array.from(this._form.querySelectorAll(".popup__input"));
  }

  _getInputValues() {
    const inputValues = {};

    this._inputs.forEach((input) => {
      const key = input.name;
      const value = input.value;
      inputValues[key] = value;
    });

    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._button.textContent = 'Saving...';
      this._handleFormSubmit(this._getInputValues());
    });
  }


  close() {
    this._form.reset();
    super.close();
  }
}
