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
  cardTemplateSelector,
  addCardPopup,
  titleInput,
  descriptionInput,

} from "../utils/constants.js";

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
  const cardElement = new Card(data, cardTemplateSelector, (title, link) => {
    imagePreviewPopup.open(title, link);
  });
  section.addItem(cardElement.createCardElement());
};


// UserInfo
const userInfo = new UserInfo({
  userNameSelector: ".profile__name",
  userOccupationSelector: ".profile__occupation",
});


// Places Container
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