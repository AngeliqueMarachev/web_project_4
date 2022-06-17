import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    // constructor(popupSelector) {
    //     super(popupSelector);
      
    // }

    open({ name, link }) {
        super.open();

        const image = this._popupElement.querySelector(".popup__image");
        const imageCaption = this._popupElement.querySelector(".popup_text");
        
        imageCaption.textContent = name;
        image.src = link;
    }

}
