import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";

import {
  initialCards,
  settings,
  openProfileModalButton,
  editProfilePopup,
  addCardButton,
  placesList,
  cardTemplateSelector,
  addCardPopup,

  titleInput,
  descriptionInput,
  profileModal,
  closeProfileModalButton,
  popupSelector,
  openPopup,
  closePopup,
  popupImage,
  previewModal,
  popupTitle,
} from "../utils/constants.js";

// DELETE ?
const addCardModal = document.querySelector(".popup_type_add-card");
const formEl = document.querySelector(".popup__form");
const buttonInsideAddCardForm = addCardPopup.querySelector(".popup__button");
const previewModalCloseButton = document.querySelector(".popup__close_preview");
const addCardModalCloseButton = document.querySelector(
  ".popup__close_add-card"
);

// Initialize Form Validation
const validateProfileForm = new FormValidator(settings, editProfilePopup);
validateProfileForm.enableValidation();
validateProfileForm.disableButton();

const validatePlaceForm = new FormValidator(settings, addCardPopup);
validatePlaceForm.enableValidation();
validatePlaceForm.disableButton();

// Profile Popup Form
const profilePopupForm = new PopupWithForm(".popup_type_profile", (data) => {
  userInfo.setUserInfo(data.name, data.occupation);
});
profilePopupForm.setEventListeners();

// Place Popup Form
const placesPopupForm = new PopupWithForm(".popup_type_add-card", (data) => {
  renderCard(data);
  validatePlaceForm.resetValidation();
});
placesPopupForm.setEventListeners();

// Initialise Image Preview
const imagePreviewPopup = new PopupWithImage(".popup_type_preview");
imagePreviewPopup.setEventListeners();

// Create Card
// BOTH RENDERCARD OPTIONS WORK
// const renderCard = (data, wrapper) => {
//   const cardElement = generateCard(data);
//   wrapper.prepend(cardElement.createCardElement());
// };

const renderCard = (data) => {
  const cardElement = new Card(data, cardTemplateSelector, (name, link) => {
    imagePreviewPopup.open(name, link);
  });
  section.addItem(cardElement.createCardElement());
};

// BOTH GENERATECARD OPTIONS WORK
// const generateCard = (data) => {
//   return new Card(data, cardTemplateSelector, (name, link) => {
//     imagePreviewPopup.open(name, link);
//   });
// };

// function generateCard(data) {
//   const card = new Card(data, cardTemplateSelector, () => {
//     imagePopup.open(data.link, data.name);
//   });
//   const cardElement = card.generateCard();
//   return cardElement;
// }

// Initialize UserInfo
const userInfo = new UserInfo({
  userNameSelector: ".profile__name",
  userOccupationSelector: ".profile__occupation",
});


// Initialise Places Container
const section = new Section(
  {
    items: initialCards,
    renderer: (data) => renderCard(data),
    // renderCard(data, placesList)
  },
  ".gallery__grid"
);

section.renderItems();

// Profile Popup Form Submit
const handleProfileFormSubmit = (data) => {
  userInfo.setUserInfo(data.name, data.occupation);
  profilePopupForm.close();
};

// Add New Place Form Submit
const handleCardFormSubmit = (data) => {
  renderCard(
    {
      name: data["name"],
      link: data["link"],
    },
    placesList
  );
  placesPopupForm.close();
};

openProfileModalButton.addEventListener("click", () => profilePopupForm.open());

addCardButton.addEventListener("click", () => {
  placesPopupForm.open();
});





