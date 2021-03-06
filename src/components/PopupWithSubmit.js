import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._form = this._popupElement.querySelector(".popup__form");
        this._button = this._popupElement.querySelector(".popup__button");
        this._handleFormSubmit = handleFormSubmit;
    }

    open(card) {
        super.open();
        this._button.textContent = "Yes";
        this._card = card;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", evt => {
            evt.preventDefault();
            this._button.textContent = "Deleting...";
            this._handleFormSubmit(this._card);
        })
    }
}

