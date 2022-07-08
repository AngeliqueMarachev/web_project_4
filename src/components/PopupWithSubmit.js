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
            this._button.textContent = "Saving...";
            this._handleFormSubmit(this._card);
        })
    }
}
// it inherits Popup, 
// in constructor, it searches for the form, button and, the callback funtion handleFormSubmit in confirmDeletePopup from index.js
// when you open it, it takes the cardId as argument, whcih means you have to call cardId in index.js on renderCard function when you open up confirmDeletePopup
//
