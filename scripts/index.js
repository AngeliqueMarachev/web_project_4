import FormValidator from "./FormValidator.js";
import { Card } from "./Card.js";
import {
  popupSelector,
  openPopup,
  closePopup,
  popupImage,
  previewModal,
  popupTitle,
} from "./utils.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const settings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// Modals
const addCardModal = document.querySelector(".popup_type_add-card");
const profileModal = document.querySelector(".popup_type_profile");
const formEl = document.querySelector(".popup__form");
const editProfilePopup = document.querySelector(".popup__form-edit");
const addCardPopup = document.querySelector(".popup__form-create");

// Buttons
const buttonInsideAddCardForm = addCardPopup.querySelector(".popup__button");
const openProfileModalButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const previewModalCloseButton = document.querySelector(".popup__close_preview");
const closeProfileModalButton = document.querySelector(".popup__close_profile");
const addCardModalCloseButton = document.querySelector(
  ".popup__close_add-card"
);

// Form Data
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");

const titleInput = editProfilePopup.querySelector(".popup__input_type_name");
const descriptionInput = editProfilePopup.querySelector(
  ".popup__input_type_occupation"
);
const nameInput = document.querySelector(".popup__input_type_title");
const linkInput = document.querySelector(".popup__input_type_link");

// Other
const placesList = document.querySelector(".gallery__grid");
const cardTemplateSelector = "#gallery-template";

// Initialize Form Validation
const validateProfileForm = new FormValidator(settings, editProfilePopup);
const validatePlaceForm = new FormValidator(settings, addCardPopup); 

validateProfileForm.enableValidation();
validatePlaceForm.enableValidation();

validateProfileForm.disableButton();
validatePlaceForm.disableButton()
// const formValidator = new FormValidator(settings, formEl);
// formValidator.enableValidation(settings, formEl);

// validateProfileForm.enableValidation(settings, editProfilePopup);
// validatePlaceForm.enableValidation(settings, addCardPopup);

// validateProfileForm.disableButton(settings, editProfilePopup);
// validatePlaceForm.disableButton(settings, addCardPopup);

/////////////
// Functions
////////////

// Profile Popup Form Submit
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = titleInput.value;
  profileOccupation.textContent = descriptionInput.value;
  closePopup(profileModal);
}

// Add New Place Form Submit
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderCard(
    {
      name: nameInput.value,
      link: linkInput.value,
    },
    placesList
  );
  closePopup(addCardModal);
  addCardPopup.reset();
}

const renderCard = (card, wrapper) => {
  const cardElement = new Card(card, cardTemplateSelector);
  wrapper.prepend(cardElement.createCardElement(card));
};

///////////
// Event listeners //
//////////

// Profile
openProfileModalButton.addEventListener("click", () => {
  validateProfileForm.resetValidation();
  titleInput.value = profileName.textContent;
  descriptionInput.value = profileOccupation.textContent;
  openPopup(profileModal);
});

closeProfileModalButton.addEventListener("click", () => {
  closePopup(profileModal);
});

editProfilePopup.addEventListener("submit", handleProfileFormSubmit);

// Place
addCardPopup.addEventListener("submit", (evt) => {
  handleCardFormSubmit(evt);
  validatePlaceForm.disableButton();
  validatePlaceForm.resetValidation();
});

addCardButton.addEventListener("click", () => {
  openPopup(addCardModal);
});

addCardModalCloseButton.addEventListener("click", () =>
  closePopup(addCardModal)
);

previewModalCloseButton.addEventListener("click", () =>
  closePopup(previewModal)
);

initialCards.forEach((card) => renderCard(card, placesList));



