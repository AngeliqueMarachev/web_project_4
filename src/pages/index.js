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
  addAvatarPopup,
  avatar
} from "../utils/constants.js";

let userId;

// UserInfo
const userInfo = new UserInfo({
  userNameSelector: ".profile__name",
  userOccupationSelector: ".profile__occupation",
  userAvatarSelector: ".profile__avatar",
});

Promise.all([api.getUserInfo(), api.getInitialCards()]).then(
  ([userData, initialCards]) => {
    userId = userData._id;
    userInfo.setUserInfo({ user: userData.name, occupation: userData.about }); // could I just write userData?
    section.renderItems(initialCards);
  }
);

// Form Validation
const validateProfileForm = new FormValidator(settings, editProfilePopup);
validateProfileForm.enableValidation();
validateProfileForm.disableButton();

const validatePlaceForm = new FormValidator(settings, addCardPopup);
validatePlaceForm.enableValidation();
validatePlaceForm.disableButton();

const validateAvatarForm = new FormValidator(settings, addAvatarPopup);
validateAvatarForm.enableValidation();
validateAvatarForm.disableButton();



// Create Card
const renderCard = (data) => {
  const cardElement = new Card(
    data,
    cardTemplateSelector,
    userId,
    (name, link) => {
      imagePreviewPopup.open(name, link);
    },
    () => {
      if (cardElement.isLiked()) {
        api.removeLike(cardElement.getId()).then((res) => {
          cardElement.setLikes(res.likes);
        });
      } else {
        api.likeCard(cardElement.getId()).then((res) => {
          cardElement.setLikes(res.likes);
        });
      }
    }
  );
  section.addItem(cardElement.createCardElement());
};

// // Places Container
const section = new Section(
  {
    renderer: renderCard,
    // renderer: (data) => renderCard(data),
  },
  ".gallery__grid"
);

const handleAvatarSubmit = (data) => {
  api.editAvatar(data.link)
    .then((res) => {
    userInfo.setUserInfo(res);
  });
};

// Popups
const imagePreviewPopup = new PopupWithImage(".popup_type_preview");

const profilePopupForm = new PopupWithForm(".popup_type_profile", (data) => {
  api
    .editProfile({ name: data.user, about: data.occupation })
    .then((res) => {
      userInfo.setUserInfo({ user: res.name, occupation: res.about });
    })
    .catch(console.log)
    .finally(() => {
      profilePopupForm.close();
    });
});

const placesPopupForm = new PopupWithForm(".popup_type_add-card", (data) => {
  api
    .addCard({ name: data.name, link: data.link })
    .then((res) => {
      renderCard(res);
    })
    .catch(console.log);

  validatePlaceForm.resetValidation();
  placesPopupForm.close();
});

const avatarChangePopup = new PopupWithForm(
  ".popup_type_avatar-change",
  handleAvatarSubmit
);



openProfileModalButton.addEventListener("click", () => {
  profilePopupForm.open();
  const info = userInfo.getUserInfo();
  titleInput.value = info.user;
  descriptionInput.value = info.occupation;
});

addCardButton.addEventListener("click", () => {
  placesPopupForm.open();
});

avatar.addEventListener("click", () => {
  avatarChangePopup.open();
});

profilePopupForm.setEventListeners();
placesPopupForm.setEventListeners();
imagePreviewPopup.setEventListeners();
avatarChangePopup.setEventListeners();
