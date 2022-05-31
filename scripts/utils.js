export const popupSelector = "popup_open";
export const previewModal = document.querySelector(".popup_type_preview");
export const popupImage = previewModal.querySelector(".popup__image");
export const popupTitle = previewModal.querySelector(".popup__text");

// Universal Popup
export const openPopup = (modalWindow) => {
  modalWindow.classList.add(popupSelector);
  addKeyDownListener();
};

export const closePopup = (modalWindow) => {
  modalWindow.classList.remove(popupSelector);
  removeKeyDownListener();
  escEvent();
};

//Close Popup by Escape Event
const handleKeyDown = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(`.${popupSelector}`);
    closePopup(openedPopup);
  }
};

const addKeyDownListener = () => {
  document.addEventListener("keydown", handleKeyDown);
};

const removeKeyDownListener = () => {
  document.removeEventListener("keydown", handleKeyDown);
};

// Close Popup by Click Event
const escEvent = () => {
  document.addEventListener("mousedown", (evt) => {
    if (evt.target.matches(".popup")) {
      const openedPopup = document.querySelector(`.${popupSelector}`);
      closePopup(openedPopup);
    }
  });
};
