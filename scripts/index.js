// Modal
const openModalButton = document.querySelector(".profile__edit-button");
const modal = document.querySelector(".popup");
const closeModalButton = document.querySelector(".popup__close_button");

// Form 
const inputName = document.querySelector(".popup__input_type_name");
const inputOccupation = document.querySelector(".popup__input_type_occupation");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
const form = document.querySelector(".popup__form");

// Open Modal
openModalButton.addEventListener("click", function () {
  modal.classList.add("popup_open");

  const profileNameInput = profileName.textContent
  const profileOccupationInput = profileOccupation.textContent

  inputName.value = profileNameInput
  inputOccupation.value = profileOccupationInput 
});

// Submit Form
form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const inputNameValue = inputName.value
  const inputOccupationValue = inputOccupation.value

  profileName.textContent = inputNameValue
  profileOccupation.textContent = inputOccupationValue

  modal.classList.remove("popup_open")
});

// Close Modal
closeModalButton.addEventListener("click", function () {
  modal.classList.remove("popup_open")
});



