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

// Modals
const addCardModal = document.querySelector(".popup_type_add-card");
const previewModal = document.querySelector(".popup_type_preview");
const profileModal = document.querySelector(".popup_type_profile");

const editProfilePopup = document.querySelector(".popup__form-edit");
const addCardPopup = document.querySelector(".popup__form-create");

// Buttons
const addCardButton = document.querySelector(".profile__add-button");
const addCardModalCloseButton = document.querySelector(
  ".popup__close_add-card"
);
const previewModalCloseButton = document.querySelector(".popup__close_preview");
const closeProfileModalButton = document.querySelector(".popup__close_profile");
const openProfileModalButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");

// Form Data
const titleInputValue = editProfilePopup.querySelector(
  ".popup__input_type_name"
);
const descriptionInputValue = editProfilePopup.querySelector(
  ".popup__input_type_occupation"
);
const nameInputValue = document.querySelector(".popup__input_type_title");
const linkInputValue = document.querySelector(".popup__input_type_link");

// Wrappers
const placesList = document.querySelector(".gallery__grid");

/////////////
// Functions
////////////

function createCardElement(card) {
  const cardTemplate = document
    .querySelector("#gallery-template")
    .content.querySelector(".gallery__card");
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

function openProfilePopup() {
  profileName.textContent = titleInputValue.value;
  profileOccupation.textContent = descriptionInputValue.value;
  openProfilePopup(editProfilePopup);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = titleInputValue.value;
  profileOccupation.textContent = descriptionInputValue.value;
  toggleModalWindow(profileModal);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  renderCard(
    {
      name: nameInputValue.value,
      link: linkInputValue.value,
    },
    placesList
  );
  toggleModalWindow(addCardModal);

  addCardPopup.reset();
}

function openImagePreview(card) {
  const popupImage = previewModal.querySelector(".popup__image");
  const popupTitle = previewModal.querySelector(".popup__text");
  popupImage.src = card.link;
  popupImage.alt = nameInputValue;
  popupTitle.textContent = card.name;
  toggleModalWindow(previewModal);
}

function renderCard(card, wrapper) {
  wrapper.prepend(createCardElement(card));
}

function toggleModalWindow(modalWindow) {
  modalWindow.classList.toggle("popup_open");
}

///////////
// Event handlers
//////////

openProfileModalButton.addEventListener("click", function () {
  titleInputValue.value = profileName.textContent;
  descriptionInputValue.value = profileOccupation.textContent;
  toggleModalWindow(profileModal);
});

closeProfileModalButton.addEventListener("click", function () {
  toggleModalWindow(profileModal);
});

addCardButton.addEventListener("click", () => toggleModalWindow(addCardModal));

addCardModalCloseButton.addEventListener("click", () =>
  toggleModalWindow(addCardModal)
);

previewModalCloseButton.addEventListener("click", () =>
  toggleModalWindow(previewModal)
);

editProfilePopup.addEventListener("submit", handleProfileFormSubmit);
addCardPopup.addEventListener("submit", handleCardFormSubmit);

initialCards.forEach((card) => renderCard(card, placesList));
