export const initialCards = [
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
  
  export const settings = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  };

export const openProfileModalButton = document.querySelector(".profile__edit-button");
export const editProfilePopup = document.querySelector(".popup__form-edit");
export const addCardButton = document.querySelector(".profile__add-button");
export const profileName = document.querySelector(".profile__name");
export const profileOccupation = document.querySelector(".profile__occupation");
export const avatar = document.querySelector(".profile__avatar-container");
export const titleInput = editProfilePopup.querySelector(".popup__input_type_name");
export const descriptionInput = editProfilePopup.querySelector(
  ".popup__input_type_occupation"
);
export const profileModal = document.querySelector(".popup_type_profile");
export const addCardPopup = document.querySelector(".popup__form-create");
export const closeProfileModalButton = document.querySelector(".popup__close_profile");
export const placesList = document.querySelector(".gallery__grid");
export const cardTemplateSelector = "#gallery-template";

export const popupSelector = "popup_open";
export const previewModal = document.querySelector(".popup_type_preview");
export const popupImage = previewModal.querySelector(".popup__image");
export const popupTitle = previewModal.querySelector(".popup__text");

export const addAvatarPopup = document.querySelector(".popup_type_avatar-change");

export const logoImg = document.getElementById(".logo");

export const setImageSource = function (imageElement, source) {
  imageElement.src = source;
}

