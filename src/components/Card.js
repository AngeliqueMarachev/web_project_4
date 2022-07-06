export default class Card {
  constructor(data, cardTemplateSelector, userId, handleCardClick, handleDeleteClick, handleLikeIcon ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = userId;

    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeIcon = handleLikeIcon;
  }

  getId() {
    return this._id;
  };


  removeCard = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };


  _setEventListeners = () => {
    this._cardLikeButton.addEventListener("click", () =>
      this._handleLikeIcon()
    )

     this._deleteCardButton.addEventListener("click", () => this._handleDeleteClick());


    this._cardImage.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  };

  setLikes(newLikes) {
    this._likes = newLikes;

    const likeCounter = this._likes.length
    this._cardElement.querySelector(".gallery__likes")
      .textContent = likeCounter;

    const cardIsLiked = this.isLiked();

    if(cardIsLiked) {
      this._cardElement
        .querySelector(".gallery__heart-icon")
        .classList.add("gallery__heart-icon_clicked");
    } else {
      this._cardElement
      .querySelector(".gallery__heart-icon")
      .classList.remove("gallery__heart-icon_clicked");
    }
  }

  isLiked() {
    return this._likes.find(user => user._id === this._userId);
  }

  createCardElement = () => {
    const cardTemplate = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".gallery__card");

    this._cardElement = cardTemplate.cloneNode(true);

    this._cardImage = this._cardElement.querySelector(".gallery__item");
    this._cardName = this._cardElement.querySelector(".gallery__text");
    this._cardLikeButton = this._cardElement.querySelector(
      ".gallery__heart-icon"
    );
    this._deleteCardButton = this._cardElement.querySelector(
      ".gallery__delete-button"
    );

    this._cardImage.src = this._link;
    this._cardImage.alt = `${this._name}`;
    this._cardName.textContent = this._name;

    this.setLikes(this._likes);

    this._setEventListeners();

    return this._cardElement;
  };
}
