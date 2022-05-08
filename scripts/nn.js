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
  const popupSelector = "popup_open";
  const popupList = document.querySelector('.popup');

  
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
  const titleInputValue = editProfilePopup.querySelector(".popup__input_type_name");
  const descriptionInputValue = editProfilePopup.querySelector(".popup__input_type_occupation");
  const nameInputValue = document.querySelector(".popup__input_type_title");
  const linkInputValue = document.querySelector(".popup__input_type_link");
  
  // Wrappers
  const placesList = document.querySelector(".gallery__grid");
  

// Popup 
function openPopup (popup) {
    popup.classList.add(popupSelector);
    addKeyDownListener();
   }
  
  function closePopup (popup) {
    popup.classList.remove(popupSelector);
    removeKeyDownListener();
  }

function openProfilePopup() {
    openPopup(profileModal);
    titleInputValue.value = profileName.textContent;
    descriptionInputValue.value = profileOccupation.textContent;
} 
  
  function handleProfileFormSubmit(event) {
    event.preventDefault();
    profileName.textContent = titleInputValue.value;
    profileOccupation.textContent = descriptionInputValue.value;
    closePopup(profileModal);
  }

  // Event handlers 
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
  
  // Close Escape Key
  function handleKeyDown(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector(`.${popupSelector}`);
      closePopup(openedPopup);
    }
  }
  
  function addKeyDownListener() {
    document.addEventListener('keydown', handleKeyDown);
  }
  
  function removeKeyDownListener() {
    document.removeEventListener('keydown', handleKeyDown);
  }

  // Close Click Key
  popupList.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
      if(evt.target.matches('.popup')) {
        const openedPopup = document.querySelector(`.${popupSelector}`);
        closePopup(openedPopup);
      }
    });
  });

  // Create Cards
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