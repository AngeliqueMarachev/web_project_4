///////////////
// TEMPLATE
//////////////

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

const placesList = document.querySelector(".gallery__grid");


initialCards.forEach(card => {
  const cardTemplate = document.querySelector("#card-template").content.querySelector(".gallery__card");
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".gallery__item");
  const cardTitle = cardElement.querySelector(".gallery__text");

  cardImage.style.backgroundImage = `url(${card.link})`;
  cardTitle.textContent = card.name;

  placesList.append(cardElement);
});


///////////////////
//PROFILE MODAL
//////////////////

// Profile modal
const openModalButton = document.querySelector(".profile__edit-button");
const modal = document.querySelector(".popup");
const closeModalButton = document.querySelector(".popup__close-button");

// Profile form 
const inputName = document.querySelector(".popup__input_type_name");
const inputOccupation = document.querySelector(".popup__input_type_occupation");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
const form = document.querySelector(".popup__form");


// Profile open & close modal
openModalButton.addEventListener("click", function () {
  modal.classList.add("popup_open");

  const profileNameInput = profileName.textContent
  const profileOccupationInput = profileOccupation.textContent

  inputName.value = profileNameInput
  inputOccupation.value = profileOccupationInput 
});

closeModalButton.addEventListener("click", function () {
  modal.classList.remove("popup_open")
});


// Profile form submit
form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const inputNameValue = inputName.value
  const inputOccupationValue = inputOccupation.value

  profileName.textContent = inputNameValue
  profileOccupation.textContent = inputOccupationValue

  modal.classList.remove("popup_open")
});


//////////////
// NEW PLACE MODAL
//////////////




// TEM










 
