// Modal
const openModalButton = document.querySelector(".profile__edit-button");
const modal = document.querySelector(".popup");
const overlay = document.querySelector(".popup__content");

openModalButton.addEventListener("click", function () {
  modal.style.display = "flex";
  overlay.style.display = "block";
});

// Profile
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");

// Form
const profileForm = document.forms.popup__form;
const profileFormNameInput = profileForm.elements.name;
const profileFormOccupationInput = profileForm.elements.occupation;

profileForm.addEventListener("submit", function (event) {
  profileName.textContent = profileFormNameInput.value;
  profileOccupation.textContent = profileFormOccupationInput.value;
  modal.style.display = "none";
  overlay.style.display = "none";
  event.preventDefault();
});
