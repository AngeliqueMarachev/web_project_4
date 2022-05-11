///////////
//Declarations
///////////

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

import { disableButton } from "./validate.js";

// Modals
const addCardModal = document.querySelector(".popup_type_add-card");
const previewModal = document.querySelector(".popup_type_preview");
const profileModal = document.querySelector(".popup_type_profile");

const editProfilePopup = document.querySelector(".popup__form-edit");
const addCardPopup = document.querySelector(".popup__form-create");
const popupSelector = "popup_open";

// Buttons
const addCardButton = document.querySelector(".profile__add-button");
const addCardModalCloseButton = document.querySelector(
  ".popup__close_add-card"
);
const previewModalCloseButton = document.querySelector(".popup__close_preview");
const closeProfileModalButton = document.querySelector(".popup__close_profile");
const openProfileModalButton = document.querySelector(".profile__edit-button");

const button = document.querySelector(".popup__button");

const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");

// Form Data
const titleInput = editProfilePopup.querySelector(".popup__input_type_name");
const descriptionInput = editProfilePopup.querySelector(".popup__input_type_occupation");
const nameInput = document.querySelector(".popup__input_type_title");
const linkInput = document.querySelector(".popup__input_type_link");

// Wrappers
const placesList = document.querySelector(".gallery__grid");


/////////////
// Functions
////////////

// Universal Popup
function openPopup(modalWindow) {
  modalWindow.classList.add(popupSelector);
  addKeyDownListener();
}

function closePopup(modalWindow) {
  modalWindow.classList.remove(popupSelector);
  removeKeyDownListener();
}

// Profile Popup Form
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = titleInput.value;
  profileOccupation.textContent = descriptionInput.value;
  closePopup(profileModal);
}


// Add New Card
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
  // toggleButton(button);
  disableButton(button, settings);
}


// Open Image Popup
function openImagePreview(card) {
  const popupImage = previewModal.querySelector(".popup__image");
  const popupTitle = previewModal.querySelector(".popup__text");
  popupImage.src = card.link;
  popupImage.alt = nameInput;
  popupTitle.textContent = card.name;
  openPopup(previewModal);
}

function renderCard(card, wrapper) {
  wrapper.prepend(createCardElement(card));
}


///////////
// Event handlers //
//////////

openProfileModalButton.addEventListener("click", function () {
  titleInput.value = profileName.textContent;
  descriptionInput.value = profileOccupation.textContent;
  openPopup(profileModal);
}); 

//
closeProfileModalButton.addEventListener("click", function () {
  closePopup(profileModal);
});

addCardButton.addEventListener("click", () => openPopup(addCardModal));


addCardModalCloseButton.addEventListener("click", () =>
  closePopup(addCardModal)
);

previewModalCloseButton.addEventListener("click", () =>
  closePopup(previewModal)
);

editProfilePopup.addEventListener("submit", handleProfileFormSubmit);
addCardPopup.addEventListener("submit", handleCardFormSubmit);

initialCards.forEach((card) => renderCard(card, placesList));


// Close Popup by Click Event
document.addEventListener("mousedown", function (evt) {
  if (evt.target.matches(".popup")) {
    const openedPopup = document.querySelector(`.${popupSelector}`);
    closePopup(openedPopup);
  }
});


//Close Popup by Escape Key Event
function handleKeyDown(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(`.${popupSelector}`);
    closePopup(openedPopup);
  }
}

function addKeyDownListener() {
  document.addEventListener("keydown", handleKeyDown);
}

function removeKeyDownListener() {
  document.removeEventListener("keydown", handleKeyDown);
}


////////////
// Cards
///////////

function createCardElement(card) {
  const cardTemplate = document.querySelector("#gallery-template").content.querySelector(".gallery__card");
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".gallery__item");
  const cardTitle = cardElement.querySelector(".gallery__text");
  const cardLikeButton = cardElement.querySelector(".gallery__heart-icon");
  const cardDeleteButton = cardElement.querySelector(".gallery__delete-button");

  cardImage.style.backgroundImage = `url(${card.link})`;
  cardTitle.textContent = card.name;

  cardImage.addEventListener("click", () => openImagePreview(card));

  function toggleLikeButton(cardLikeButton) {
    cardLikeButton.classList.toggle("gallery__heart-icon_clicked");
  }

  cardLikeButton.addEventListener("click", () =>
    toggleLikeButton(cardLikeButton)
  );

  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  return cardElement;
}


// // DISABLE BUTTON ON OPEN

// function disableButton(button, config) {
//   button.classList.add(config.disableButtonClass)
//   button.disabled = 'disabled'
// }
// disableButton();

// function enableButton(button, config) {
//   button.classList.remove(config.disableButtonClass)
//   button.disabled = false
// }
// enableButton();


// OR
//   const inputList = [...document.querySelectorAll(".popup__input")];
//   const inactiveButtonClass = ".popup__button_disabled";
//   const newCardSubmitButton = document.querySelector(".popup__form.popup__button");
// // const addButton = document.querySelector(".popup__button");

// button.addEventListener("click", () => {
//   openPopup(modalWindow);
//   toggleButton(inputList, newCardSubmitButton, { inactiveButtonClass });
// });


// OR 
// const formData = [...document.querySelectorAll(".popup__input")];
// const disableButton = document.querySelector(".popup__button_disabled");


// function stateHandle(disableButton) {
//   if (formData.querySelector(popupSelector).value === "") {
//     disableButton.classList.toggle(toggleButton);
//   } 
// }

// disableButton.addEventListener("change", () =>
//   stateHandle(disableButton)
// ); 



