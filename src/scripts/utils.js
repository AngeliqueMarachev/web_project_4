export const popupSelector = "popup_open";
export const previewModal = document.querySelector(".popup_type_preview");
export const popupImage = previewModal.querySelector(".popup__image");
export const popupTitle = previewModal.querySelector(".popup__text");

// Universal Popup
export const openPopup = (modalWindow) => {
  modalWindow.classList.add(popupSelector);
  setEventListeners();
};

export const closePopup = (modalWindow) => {
  modalWindow.classList.remove(popupSelector);
  removeEventListeners();
};

// Close Popup by Click Event
const handleClickEvent = (evt) => {
  if (evt.target.matches('.popup')) {
    closePopup(evt.target);
  }
};

//Close Popup by Escape Event
const handleKeyDown = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(`.${popupSelector}`);
    closePopup(openedPopup);
  }
};

// Event Listeners
  const setEventListeners = () => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener('mousedown', handleClickEvent);
};

const removeEventListeners = () => {
  document.removeEventListener("keydown", handleKeyDown);
  document.removeEventListener('mousedown', handleClickEvent);
};