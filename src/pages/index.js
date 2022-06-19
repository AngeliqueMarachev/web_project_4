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


// Form Validation
const validateProfileForm = new FormValidator(settings, editProfilePopup);
validateProfileForm.enableValidation();
validateProfileForm.disableButton();

const validatePlaceForm = new FormValidator(settings, addCardPopup);
validatePlaceForm.enableValidation();
validatePlaceForm.disableButton();


// Popups
const profilePopupForm = new PopupWithForm(".popup_type_profile", (data) => {
  userInfo.setUserInfo(data.name, data.occupation);
  profilePopupForm.close();
});
profilePopupForm.setEventListeners();


const placesPopupForm = new PopupWithForm(".popup_type_add-card", (data) => {
 
  renderCard(data);
  validatePlaceForm.resetValidation();
  placesPopupForm.close();
 
});
placesPopupForm.setEventListeners();


const imagePreviewPopup = new PopupWithImage(".popup_type_preview");
imagePreviewPopup.setEventListeners();

// Create Card
const renderCard = (data) => {
  const cardElement = new Card(data, cardTemplateSelector, (name, link) => {
    imagePreviewPopup.open(name, link);
  });
  section.addItem(cardElement.createCardElement());
};


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
  },
  ".gallery__grid"
);
section.renderItems();


// Event Listeners
openProfileModalButton.addEventListener("click", () => {
  profilePopupForm.open();
  const info = userInfo.getUserInfo();
  titleInput.value = info.name;
  descriptionInput.value = info.occupation;
})

addCardButton.addEventListener("click", () => {
  placesPopupForm.open();
});





