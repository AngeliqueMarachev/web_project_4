export default class Card {
  constructor({ title, link }, cardTemplateSelector, handleCardClick) {
    this._title = title;
    this._link = link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
  }

  _toggleLikeButton = () => {
    this._cardLikeButton.classList.toggle("gallery__heart-icon_clicked");
  };

  _deleteCard = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };

  _addEventListeners = () => {
    this._cardLikeButton.addEventListener("click", () =>
      this._toggleLikeButton()
    );
    
    this._deleteCardButton.addEventListener("click", () =>
    this._deleteCard()
    );

    this._cardImage.addEventListener("click", () =>
      this._handleCardClick(this._title, this._link));
  };

  createCardElement = () => {
    const cardTemplate = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".gallery__card");
      
    this._cardElement = cardTemplate.cloneNode(true);

    this._cardImage = this._cardElement.querySelector(".gallery__item");
    this._cardTitle = this._cardElement.querySelector(".gallery__text");
    this._cardLikeButton = this._cardElement.querySelector(
      ".gallery__heart-icon"
    );
    this._deleteCardButton = this._cardElement.querySelector(
      ".gallery__delete-button"
    );

    this._cardImage.src = this._link;
    this._cardImage.alt = `${this._title}`;
    this._cardTitle.textContent = this._title;

    this._addEventListeners();

    return this._cardElement;
  };
}
