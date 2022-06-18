export default class Popup {
    constructor(popupSelector) {
      this._popupElement = document.querySelector(popupSelector);
      this._handleEsClose = this._handleEscClose.bind(this);
    }
  
    _handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    }

    _handleOverlayClose = (evt) => {
        if (evt.target.classList.contains("popup_open")) {
          this.close();
        }
      }
  
    open() {
      this._popupElement.classList.add("popup_open");
        document.addEventListener("keydown", this._handleEscClose);
        document.addEventListener("click", this._handleOverlayClose);
    }
  
    close() {
      this._popupElement.classList.remove("popup_open");
        document.removeEventListener("keydown", this._handleEscClose);
        document.removeEventListener("ckick", this._handleOverlayClose);
    }

  
    setEventListeners() {
      const popupClose = this._popupElement.querySelector(".popup__close");
      popupClose.addEventListener("click", () => {
        this.close();
      });
    }
  }