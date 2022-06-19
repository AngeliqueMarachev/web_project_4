import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(title, link) {
    super.open();
    const image = this._popupElement.querySelector(".popup__image");
    const imageCaption = this._popupElement.querySelector(".popup_text");

    image.src = link;
    image.alt = title;
    imageCaption.textContent = title;
  }
}
