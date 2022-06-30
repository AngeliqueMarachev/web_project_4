import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import { api } from "../utils/Api.js";

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

api
  .getInitialCards()
  .then((res) => {
    section.renderItems(res);
  })
  .catch(console.log);

// api.getUserInfo()
//   .then(res => {
//     userInfo.setUserInfo({
//       user: res.name, occupation: res.about
//     });
//   })
// .catch(console.log)

// Form Validation
const validateProfileForm = new FormValidator(settings, editProfilePopup);
validateProfileForm.enableValidation();
validateProfileForm.disableButton();

const validatePlaceForm = new FormValidator(settings, addCardPopup);
validatePlaceForm.enableValidation();
validatePlaceForm.disableButton();

// UserInfo
const userInfo = new UserInfo({
  userNameSelector: ".profile__name",
  userOccupationSelector: ".profile__occupation",
});

// Create Card
const renderCard = (data) => {
  const cardElement = new Card(data, cardTemplateSelector, (name, link) => {
    imagePreviewPopup.open(name, link);
  });
  section.addItem(cardElement.createCardElement());
};



// // Places Container 
const section = new Section(
  {
    renderer: (data) => renderCard(data),
  },
  ".gallery__grid"
);


const imagePreviewPopup = new PopupWithImage(".popup_type_preview");
imagePreviewPopup.setEventListeners();

// Popups
const profilePopupForm = new PopupWithForm(".popup_type_profile", (data) => {
  api.editProfile(data)
    .then(() => {
      userInfo.getUserInfo();
      userInfo.setUserInfo(data.name, data.about);
    })
    .catch(console.log)
    .finally(() => {
      profilePopupForm.close();
    })
});
profilePopupForm.setEventListeners();


const placesPopupForm = new PopupWithForm(".popup_type_add-card", (data) => {
  renderCard(data);
  validatePlaceForm.resetValidation();
  placesPopupForm.close();
});
placesPopupForm.setEventListeners();


openProfileModalButton.addEventListener("click", () => {
  profilePopupForm.open();
  const info = userInfo.getUserInfo();
  titleInput.value = info.user;
  descriptionInput.value = info.occupation;
});

addCardButton.addEventListener("click", () => {
  placesPopupForm.open();
});

