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

const editForm = document.querySelector(".popup_form-edit");
const createForm = document.querySelector(".popup_form-create");

// Buttons
const addCardButton = document.querySelector(".profile__add-button");
const addCardModalCloseButton = document.querySelector(".popup_close_add-card");
const previewModalCloseButton = document.querySelector(".popup_close_preview");
const closeModalButton = document.querySelector(".popup_close_profile");
const openModalButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");

// Form Data
const titleInputValue = editForm.querySelector(".popup_input_type_name");
const descriptionInputValue = editForm.querySelector(
  ".popup_input_type_occupation"
);
const nameInputValue = document.querySelector(".popup_input_type_title");
const linkInputValue = document.querySelector(".popup_input_type_link");

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

  cardImage.addEventListener("click", () => onImagePreview(card));

  function toggleLikeButton(cardLikeButton) {
    if (!cardLikeButton.classList.contains("gallery__heart-icon_clicked")) {
    }
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

function editFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = titleInputValue.value;
  profileOccupation.textContent = descriptionInputValue.value;
  toggleModalWindow(profileModal);
}

function createFormSubmitHandler(evt) {
  evt.preventDefault();

  renderCard(
    {
      name: nameInputValue.value,
      link: linkInputValue.value,
    },
    placesList
  );
  toggleModalWindow(addCardModal);
}

const onImagePreview = (card) => {
  const popupImage = previewModal.querySelector(".popup__image");
  const popupTitle = previewModal.querySelector(".popup__text");
  popupImage.src = card.link;
  popupTitle.textContent = card.name;
  toggleModalWindow(previewModal);
};

function renderCard(card, wrapper) {
  wrapper.prepend(createCardElement(card));
}

function toggleModalWindow(modalWindow) {
  if (!modalWindow.classList.contains("popup_open")) {
    titleInputValue.value = profileName.textContent;
    descriptionInputValue.value = profileOccupation.textContent;
  }

  modalWindow.classList.toggle("popup_open");
}

///////////
// Event handlers
//////////

addCardButton.addEventListener("click", () => toggleModalWindow(addCardModal));

addCardModalCloseButton.addEventListener("click", () =>
  toggleModalWindow(addCardModal)
);

previewModalCloseButton.addEventListener("click", () =>
  toggleModalWindow(previewModal)
);

editForm.addEventListener("submit", editFormSubmitHandler);
createForm.addEventListener("submit", createFormSubmitHandler);

openModalButton.addEventListener("click", () =>
  toggleModalWindow(profileModal)
);

closeModalButton.addEventListener("click", () =>
  toggleModalWindow(profileModal)
);

initialCards.forEach((card) => renderCard(card, placesList));
