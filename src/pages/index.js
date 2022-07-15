import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import { api } from "../utils/Api.js";

import {
  settings,
  openProfileModalButton,
  editProfilePopup,
  addCardButton,
  cardTemplateSelector,
  addCardPopup,
  titleInput,
  descriptionInput,
  addAvatarPopup,
  avatar,
} from "../utils/constants.js";

let userId;

// UserInfo
const userInfo = new UserInfo({
  userNameSelector: ".profile__name",
  userOccupationSelector: ".profile__occupation",
  userAvatarSelector: ".profile__avatar",
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    userId = userData._id;

    userInfo.setUserInfo({ user: userData.name, occupation: userData.about });
    userInfo.setUserAvatar(userData.avatar);
    section.renderItems(initialCards);
  })
  .then(() => userInfo.setAvatarVisible())
  .catch(console.log);

// Form Validation
const validateProfileForm = new FormValidator(settings, editProfilePopup);
validateProfileForm.enableValidation();

const validatePlaceForm = new FormValidator(settings, addCardPopup);
validatePlaceForm.enableValidation();

const validateAvatarForm = new FormValidator(settings, addAvatarPopup);
validateAvatarForm.enableValidation();

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
      confirmDeletePopup.open(cardElement);
      // when you open this popup, you call it with the card from PopupWithSubmit,
      // and if person confirms delete, your handleFormSubmit function from PopupWithSubmit event listeners
      // will be called with the instance of the card
    },

    () => {
      if (cardElement.isLiked()) {
        api
          .removeLike(cardElement.getId())
          .then((res) => {
            cardElement.setLikes(res.likes);
          })
          .catch(console.log);
      } else {
        api
          .likeCard(cardElement.getId())
          .then((res) => {
            cardElement.setLikes(res.likes);
          })
          .catch(console.log);
      }
    }
  );
  section.addItem(cardElement.createCardElement());
};

// // Places Container
const section = new Section(
  {
    renderer: renderCard,
  },
  ".gallery__grid"
);

// Popups
const imagePreviewPopup = new PopupWithImage(".popup_type_preview");

const profilePopupForm = new PopupWithForm(".popup_type_profile", (data) => {
  profilePopupForm.changeButtonText("Saving...");
  api
    .editProfile({ name: data.user, about: data.occupation })
    .then((res) => {
      userInfo.setUserInfo({ user: res.name, occupation: res.about });
      profilePopupForm.close();
    })
    .catch(console.log)
    .finally(() => {
      profilePopupForm.changeButtonText("Save");
    });
});

const placesPopupForm = new PopupWithForm(".popup_type_add-card", (data) => {
  placesPopupForm.changeButtonText("Saving...");
  api
    .addCard({ name: data.name, link: data.link })
    .then((res) => {
      renderCard(res);
      placesPopupForm.close();
    })
    .catch(console.log)
    .finally(() => {
      placesPopupForm.changeButtonText("Save");
    });
});

const avatarChangePopup = new PopupWithForm(
  ".popup_type_avatar-change",
  (avatar) => {
    avatarChangePopup.changeButtonText("Saving...");
    api
      .editAvatar(avatar)
      .then((res) => {
        userInfo.setUserAvatar(res.avatar);
        avatarChangePopup.close();
      })
      .catch(console.log)
      .finally(() => {
        avatarChangePopup.changeButtonText("Save");
      });
  }
);

const confirmDeletePopup = new PopupWithSubmit({
  popupSelector: ".popup_type_confirm-delete",

  handleFormSubmit: (card) => {
    // takes handleFormSubmit as argument, which calls card from PopupWithSubmit class
    api
      .deleteCard(card.getId())
      .then(() => {
        card.removeCard();
        confirmDeletePopup.close();
      })
      .catch(console.log)
  },
});

// Events
openProfileModalButton.addEventListener("click", () => {
  profilePopupForm.open();
  const info = userInfo.getUserInfo();
  titleInput.value = info.user;
  descriptionInput.value = info.occupation;
  validateProfileForm.resetValidation();
  validateProfileForm.disableButton();
});

addCardButton.addEventListener("click", () => {
  placesPopupForm.open();
  validatePlaceForm.resetValidation();
  validatePlaceForm.disableButton();
});

avatar.addEventListener("click", () => {
  avatarChangePopup.open();
  validateAvatarForm.resetValidation();
});

profilePopupForm.setEventListeners();
placesPopupForm.setEventListeners();
imagePreviewPopup.setEventListeners();
avatarChangePopup.setEventListeners();
confirmDeletePopup.setEventListeners();
