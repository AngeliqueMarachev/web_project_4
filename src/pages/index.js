import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";

import { initialCards, settings, openProfileModalButton, editProfilePopup, titleInput, descriptionInput, profileModal, addCardPopup, closeProfileModalButton, placesList, cardTemplateSelector, popupSelector, openPopup, closePopup, popupImage, previewModal, popupTitle } from "../utils/constants.js";

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

// Initialise Profile Popup Form
const profilePopupForm = new PopupWithForm(".popup_type_profile", () => {
  handleProfileFormSubmit()
});
profilePopupForm.setEventListeners();


// Initialise New Place Popup Form
const placesPopupForm = new PopupWithForm(
".popup_type_add-card", () => {
  handleCardFormSubmit()
});
placesPopupForm.setEventListeners();


// Initialise Image Preview
const imagePreviewPopup = new PopupWithImage(".popup_type_preview");
imagePreviewPopup.setEventListeners();

// Create Card 
const renderCard = (data, wrapper) => {
  const cardElement = generateCard(data);
  wrapper.prepend(cardElement.getCardElement());
};

const generateCard = (data) => {
  return new Card(data, cardTemplateSelector, (name, link) => {
    imagePreviewPopup.open(name, link);
  });
};

// const renderCard = (data) => {
//   const cardElement = new Card(data, cardTemplateSelector, (name, link) => {
//     imagePreviewPopup.open(name, link);
//   });
  // section.addItem(cardElement.createCardElement());
// };

// Initialize UserInfo 
const userInfo = new UserInfo({
  userNameSelector: ".profile__name",
  userOccupationSelector: ".profile__occupation",
});
userInfo.setUserInfo();



// Initialise Places Container 
const section = new Section(
  {
    items: initialCards,
    renderer: (data) =>
      renderCard(data, placesList)
  },
  ".gallery__grid"
);

section.renderer();


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

openProfileModalButton.addEventListener("click", () => {
  // const profileData = userInfo.getUserInfo();
  // validateProfileForm.resetValidation();
  // titleInput.value = profileData.name;
  // descriptionInput.value = profileData.occupation;

  profilePopupForm.open();
});

closeProfileModalButton.addEventListener("click", () => {
  profilePopupForm.close();
});

// addCardPopup.addEventListener("submit", (evt) => {
//   handleCardFormSubmit(evt);
//   validatePlaceForm.disableButton();
//   validatePlaceForm.resetValidation();
// });

addCardButton.addEventListener("click", () => {
  placesPopupForm.open();
});

addCardModalCloseButton.addEventListener("click", () => {
  placesPopupForm.close();
});

previewModalCloseButton.addEventListener("click", () => {
  imagePreviewPopup.close();
});

// initialCards.forEach((card) => renderCard(card, placesList));
