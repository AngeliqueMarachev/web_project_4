
export default class Card {
  constructor({ name, link }, cardTemplateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
  }

  _toggleLikeButton = () => {
    this._cardLikeButton.classList.toggle("gallery__heart-icon_clicked");
  };

  _cardDeleteButton = () => {
    this._cardElement.remove();
  };

  _addEventListeners = () => {
    this._cardLikeButton.addEventListener("click", () =>
      this._toggleLikeButton()
    );
    
    this._cardDeleteButton.addEventListener("click", () =>
      this._cardElement.remove()
    );

    this._cardImage.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link));
  };

  createCardElement = () => {
    this._cardTemplate = document
      .querySelector("#gallery-template")
      .content.querySelector(".gallery__card");
      
    this._cardElement = this._cardTemplate.cloneNode(true);

    this._cardImage = this._cardElement.querySelector(".gallery__item");
    this._cardTitle = this._cardElement.querySelector(".gallery__text");
    this._cardLikeButton = this._cardElement.querySelector(
      ".gallery__heart-icon"
    );
    this._cardDeleteButton = this._cardElement.querySelector(
      ".gallery__delete-button"
    );

    this._cardImage.src = this._link;
    this._cardImage.alt = `${this._name}`;
    this._cardTitle.textContent = this._name;

    this._addEventListeners();

    return this._cardElement;
  };
}
