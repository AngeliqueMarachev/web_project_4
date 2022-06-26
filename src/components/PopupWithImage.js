import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popupElement.querySelector(".popup__image");
    this._imageCaption = this._popupElement.querySelector(".popup__text");
  }

  open(title, link) {
    super.open();
   
    this._image.src = link;
    this._image.alt = title;
    this._imageCaption.textContent = title;
  }
}
