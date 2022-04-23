///////////
//Declarations
///////////

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];


// Modals
const addCardModal = document.querySelector(".popup_type_add-card");
const previewModal = document.querySelector(".popup_type_preview");
const profileModal = document.querySelector(".popup_type_profile");
const profileModalForm = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__input_type_name");
const inputOccupation = document.querySelector(".popup__input_type_occupation");

// Buttons
const addCardButton = document.querySelector(".profile__add-button");
const addCardModalCloseButton = document.querySelector(".popup_close_add-card");
const previewModalCloseButton = document.querySelector(".popup_close_preview");
const closeModalButton = document.querySelector(".popup_close_profile");
const openModalButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");

// Wrappers
const placesList = document.querySelector(".gallery__grid")

/////////////
// Functions
////////////

function createCardElement(card) {
  const cardTemplate = document.querySelector("#card-template").content.querySelector(".gallery__card");
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector(".gallery__item");
  const cardLikeButton = cardElement.querySelector(".gallery__heart-icon");
  const cardTitle = cardElement.querySelector(".gallery__text");

  cardImage.style.backgroundImage = `url(${card.link})`;
  cardTitle.textContent = card.name;

  cardImage.addEventListener("click", () => onImagePreview(card));

  function toggleLikeButton(cardLikeButton) {
    if (!cardLikeButton.classList.contains("gallery__heart-icon_clicked")) {
    }
    cardLikeButton.classList.toggle("gallery__heart-icon_clicked");
  }

 cardLikeButton.addEventListener("click", () => toggleLikeButton(cardLikeButton));


  return cardElement;
}


function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;
  toggleModalWindow(profileModal);
}

const onImagePreview = card => {
  const popupImage = previewModal.querySelector(".popup__image");
  popupImage.src = card.link;
  toggleModalWindow(previewModal);
};


function renderCard(card, wrapper) {
  wrapper.append(createCardElement(card));
}

function toggleModalWindow(modalWindow) {
  if (!modalWindow.classList.contains("popup_open")) {
    inputName.value = profileName.textContent;
    inputOccupation.value = profileOccupation.textContent;
  }

  modalWindow.classList.toggle("popup_open");
};




///////////
// Event handlers
//////////

addCardButton.addEventListener("click", () => toggleModalWindow(addCardModal));

addCardModalCloseButton.addEventListener("click", () => toggleModalWindow(addCardModal));

previewModalCloseButton.addEventListener("click", () => toggleModalWindow(previewModal));

profileModalForm.addEventListener("submit", formSubmitHandler);

openModalButton.addEventListener("click", () => toggleModalWindow(profileModal));

closeModalButton.addEventListener("click", () => toggleModalWindow(profileModal));


initialCards.forEach(card => renderCard(card, placesList));