import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popupElement.querySelector(".popup__image");
    this._imageCaption = this._popupElement.querySelector(".popup__text");
  }

  open(name, link) {
    super.open();
   
    this._image.src = link;
    this._image.alt = name;
    this._imageCaption.textContent = name;
  }
}
