!function(){"use strict";function e(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class t{constructor(t,s,i){let{title:o,link:n}=t;e(this,"_toggleLikeButton",(()=>{this._cardLikeButton.classList.toggle("gallery__heart-icon_clicked")})),e(this,"_deleteCard",(()=>{this._cardElement.remove(),this._cardElement=null})),e(this,"_addEventListeners",(()=>{this._cardLikeButton.addEventListener("click",(()=>this._toggleLikeButton())),this._deleteCardButton.addEventListener("click",(()=>this._deleteCard())),this._cardImage.addEventListener("click",(()=>this._handleCardClick(this._title,this._link)))})),e(this,"createCardElement",(()=>{const e=document.querySelector(this._cardTemplateSelector).content.querySelector(".gallery__card");return this._cardElement=e.cloneNode(!0),this._cardImage=this._cardElement.querySelector(".gallery__item"),this._cardTitle=this._cardElement.querySelector(".gallery__text"),this._cardLikeButton=this._cardElement.querySelector(".gallery__heart-icon"),this._deleteCardButton=this._cardElement.querySelector(".gallery__delete-button"),this._cardImage.src=this._link,this._cardImage.alt="".concat(this._title),this._cardTitle.textContent=this._title,this._addEventListeners(),this._cardElement})),this._title=o,this._link=n,this._cardTemplateSelector=s,this._handleCardClick=i}}function s(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class i{constructor(e,t){s(this,"_showInputError",((e,t)=>{const{inputErrorClass:s,errorClass:i}=this._settings,o=this._formEl.querySelector("#".concat(e.id,"-error"));e.classList.add(i),o.classList.add(s),o.textContent=t})),s(this,"_hideInputError",(e=>{const{inputErrorClass:t,errorClass:s}=this._settings,i=this._formEl.querySelector("#".concat(e.id,"-error"));e.classList.remove(s),i.classList.remove(t),i.textContent=""})),s(this,"_checkInputValidity",(e=>{e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)})),s(this,"_toggleButton",(()=>{this._isFormValid()?this._enableButton():this.disableButton()})),s(this,"disableButton",(()=>{this._submitButton.classList.add(this._settings.inactiveButtonClass),this._submitButton.disabled=!0})),s(this,"_enableButton",(()=>{this._submitButton.classList.remove(this._settings.inactiveButtonClass),this._submitButton.disabled=!1})),s(this,"_isFormValid",(()=>this._inputList.every((e=>e.validity.valid)))),s(this,"_setEventListeners",(()=>{this._inputList.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this._toggleButton()}))}))})),this._settings=e,this._formEl=t,this._inputList=Array.from(this._formEl.querySelectorAll(this._settings.inputSelector)),this._submitButton=this._formEl.querySelector(this._settings.submitButtonSelector)}resetValidation(){this._inputList.forEach((e=>{this._hideInputError(e)})),this._toggleButton()}enableValidation(){this._formEl.addEventListener("submit",(e=>e.preventDefault())),this._setEventListeners()}}function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class n{constructor(e){o(this,"_handleEscClose",(e=>{"Escape"===e.key&&this.close()})),o(this,"_handleOverlayClose",(e=>{e.target.classList.contains("popup_open")&&this.close()})),this._popupElement=document.querySelector(e)}open(){this._popupElement.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose),document.addEventListener("mousedown",this._handleOverlayClose)}close(){this._popupElement.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("mousedown",this._handleOverlayClose)}setEventListeners(){this._popupElement.querySelector(".popup__close").addEventListener("mousedown",(()=>{this.close()}))}}class r extends n{constructor(e,t){super(e),this._form=this._popupElement.querySelector(".popup__form"),this._handleFormSubmit=t,this._inputs=Array.from(this._form.querySelectorAll(".popup__input"))}_getInputValues(){const e={};return this._inputs.forEach((t=>{const s=t.name,i=t.value;e[s]=i})),e}setEventListeners(){super.setEventListeners(),this._form.addEventListener("submit",(e=>{e.preventDefault(),this._handleFormSubmit(this._getInputValues())}))}close(){this._form.reset(),super.close()}}const l={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},a=document.querySelector(".profile__edit-button"),c=document.querySelector(".popup__form-edit"),u=document.querySelector(".profile__add-button"),_=(document.querySelector(".profile__name"),document.querySelector(".profile__occupation"),c.querySelector(".popup__input_type_name")),p=c.querySelector(".popup__input_type_occupation"),d=(document.querySelector(".popup_type_profile"),document.querySelector(".popup__form-create")),h=(document.querySelector(".popup__close_profile"),document.querySelector(".gallery__grid"),document.querySelector(".popup_type_preview"));h.querySelector(".popup__image"),h.querySelector(".popup__text"),new class{constructor(e,t){this._baseUrl=e,this._headers=t}getInitialCards(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((e=>e.ok?e.json():Promise.reject(e.statusText))).catch((e=>console.log(e)))}}({baseUrl:"https://around.nomoreparties.co/v1/cohort-3-en",headers:{authorization:"9398a483-484e-4ebd-a374-b6b3b985e9c4","Content-Type":"application/json"}}).getInitialCards().then((e=>{console.log("res",e)}));const m=new i(l,c);m.enableValidation(),m.disableButton();const y=new i(l,d);y.enableValidation(),y.disableButton();const g=new r(".popup_type_profile",(e=>{f.setUserInfo(e.name,e.occupation),g.close()}));g.setEventListeners();const E=new r(".popup_type_add-card",(e=>{v(e),y.resetValidation(),E.close()}));E.setEventListeners();const b=new class extends n{constructor(e){super(e),this._image=this._popupElement.querySelector(".popup__image"),this._imageCaption=this._popupElement.querySelector(".popup__text")}open(e,t){super.open(),this._image.src=t,this._image.alt=e,this._imageCaption.textContent=e}}(".popup_type_preview");b.setEventListeners();const v=e=>{const s=new t(e,"#gallery-template",((e,t)=>{b.open(e,t)}));L.addItem(s.createCardElement())},f=new class{constructor(e){let{userNameSelector:t,userOccupationSelector:s}=e;this._profileName=document.querySelector(t),this._profileOccupation=document.querySelector(s)}getUserInfo(){return{name:this._profileName.textContent,occupation:this._profileOccupation.textContent}}setUserInfo(e,t){this._profileName.textContent=e,this._profileOccupation.textContent=t}}({userNameSelector:".profile__name",userOccupationSelector:".profile__occupation"}),L=new class{constructor(e,t){let{items:s,renderer:i}=e;this._items=s,this._renderer=i,this._container=document.querySelector(t)}renderItems(){this._items.forEach((e=>{this._renderer(e)}))}addItem(e){this._container.prepend(e)}}({items:[{title:"Yosemite Valley",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{title:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{title:"Bald Mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{title:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{title:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{title:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}],renderer:e=>v(e)},".gallery__grid");L.renderItems(),a.addEventListener("click",(()=>{g.open();const e=f.getUserInfo();_.value=e.name,p.value=e.occupation})),u.addEventListener("click",(()=>{E.open()}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTZ0IsY0FDdEIxQyxFQUFXTCxNQUFReUQsRUFBSzFELEtBQ3hCTyxFQUFpQk4sTUFBUXlELEVBQUt4QixjQUdoQzdCLEVBQWNuRixpQkFBaUIsU0FBUyxLQUN0Q2lILEVBQWdCaEQsVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvdXRpbHMvQXBpLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKHsgdGl0bGUsIGxpbmsgfSwgY2FyZFRlbXBsYXRlU2VsZWN0b3IsIGhhbmRsZUNhcmRDbGljaykge1xuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5fbGluayA9IGxpbms7XG4gICAgdGhpcy5fY2FyZFRlbXBsYXRlU2VsZWN0b3IgPSBjYXJkVGVtcGxhdGVTZWxlY3RvcjtcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XG4gIH1cblxuICBfdG9nZ2xlTGlrZUJ1dHRvbiA9ICgpID0+IHtcbiAgICB0aGlzLl9jYXJkTGlrZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiZ2FsbGVyeV9faGVhcnQtaWNvbl9jbGlja2VkXCIpO1xuICB9O1xuXG4gIF9kZWxldGVDYXJkID0gKCkgPT4ge1xuICAgIHRoaXMuX2NhcmRFbGVtZW50LnJlbW92ZSgpO1xuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gbnVsbDtcbiAgfTtcblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgdGhpcy5fY2FyZExpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgICB0aGlzLl90b2dnbGVMaWtlQnV0dG9uKClcbiAgICApO1xuICAgIFxuICAgIHRoaXMuX2RlbGV0ZUNhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgdGhpcy5fZGVsZXRlQ2FyZCgpXG4gICAgKTtcblxuICAgIHRoaXMuX2NhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh0aGlzLl90aXRsZSwgdGhpcy5fbGluaykpO1xuICB9O1xuXG4gIGNyZWF0ZUNhcmRFbGVtZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkVGVtcGxhdGVTZWxlY3RvcilcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsbGVyeV9fY2FyZFwiKTtcbiAgICAgIFxuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gY2FyZFRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIHRoaXMuX2NhcmRJbWFnZSA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsbGVyeV9faXRlbVwiKTtcbiAgICB0aGlzLl9jYXJkVGl0bGUgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGxlcnlfX3RleHRcIik7XG4gICAgdGhpcy5fY2FyZExpa2VCdXR0b24gPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuZ2FsbGVyeV9faGVhcnQtaWNvblwiXG4gICAgKTtcbiAgICB0aGlzLl9kZWxldGVDYXJkQnV0dG9uID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLmdhbGxlcnlfX2RlbGV0ZS1idXR0b25cIlxuICAgICk7XG5cbiAgICB0aGlzLl9jYXJkSW1hZ2Uuc3JjID0gdGhpcy5fbGluaztcbiAgICB0aGlzLl9jYXJkSW1hZ2UuYWx0ID0gYCR7dGhpcy5fdGl0bGV9YDtcbiAgICB0aGlzLl9jYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICByZXR1cm4gdGhpcy5fY2FyZEVsZW1lbnQ7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm1FbCkge1xuICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybUVsO1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fc2V0dGluZ3MuaW5wdXRTZWxlY3RvcikpO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbiA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgdGhpcy5fc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3JcbiAgICApOyAgXG4gIH1cblxuICBfc2hvd0lucHV0RXJyb3IgPSAoaW5wdXRFbCwgZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgY29uc3QgeyBpbnB1dEVycm9yQ2xhc3MsIGVycm9yQ2xhc3MgfSA9IHRoaXMuX3NldHRpbmdzO1xuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApO1xuICAgIGlucHV0RWwuY2xhc3NMaXN0LmFkZChlcnJvckNsYXNzKTtcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZChpbnB1dEVycm9yQ2xhc3MpO1xuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcbiAgfTtcblxuICBfaGlkZUlucHV0RXJyb3IgPSAoaW5wdXRFbCkgPT4ge1xuICAgIGNvbnN0IHsgaW5wdXRFcnJvckNsYXNzLCBlcnJvckNsYXNzIH0gPSB0aGlzLl9zZXR0aW5ncztcblxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApO1xuICAgIGlucHV0RWwuY2xhc3NMaXN0LnJlbW92ZShlcnJvckNsYXNzKTtcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShpbnB1dEVycm9yQ2xhc3MpO1xuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH07XG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eSA9IChpbnB1dEVsKSA9PiB7XG4gICAgaWYgKCFpbnB1dEVsLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsLCBpbnB1dEVsLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbCk7XG4gICAgfVxuICB9O1xuXG4gIF90b2dnbGVCdXR0b24gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuX2lzRm9ybVZhbGlkKCkpIHtcbiAgICAgIHRoaXMuX2VuYWJsZUJ1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc2FibGVCdXR0b24oKTtcbiAgICB9XG4gIH07XG5cbiAgZGlzYWJsZUJ1dHRvbiA9ICgpID0+IHtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLl9zZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICB9O1xuXG4gIF9lbmFibGVCdXR0b24gPSAoKSA9PiB7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIH07XG5cbiAgX2lzRm9ybVZhbGlkID0gKCkgPT4ge1xuICAgIHJldHVybiAgdGhpcy5faW5wdXRMaXN0LmV2ZXJ5KChpbnB1dEVsKSA9PiBpbnB1dEVsLnZhbGlkaXR5LnZhbGlkKTtcbiAgfTtcblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWwpID0+IHtcbiAgICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWwpO1xuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b24oKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0KTtcbiAgICB9KTtcbiAgICB0aGlzLl90b2dnbGVCdXR0b24oKTtcbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4gZXZ0LnByZXZlbnREZWZhdWx0KCkpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xuICAgIH1cbiAgXG4gICAgX2hhbmRsZUVzY0Nsb3NlID0gKGV2dCkgPT4ge1xuICAgICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9oYW5kbGVPdmVybGF5Q2xvc2UgPSAoZXZ0KSA9PiB7XG4gICAgICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcHVwX29wZW5cIikpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgb3BlbigpIHtcbiAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicG9wdXBfb3BlblwiKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuX2hhbmRsZU92ZXJsYXlDbG9zZSk7XG4gICAgfVxuICBcbiAgICBjbG9zZSgpIHtcbiAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfb3BlblwiKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuX2hhbmRsZU92ZXJsYXlDbG9zZSk7XG4gICAgfVxuXG4gIFxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgY29uc3QgcG9wdXBDbG9zZSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jbG9zZVwiKTtcbiAgICAgIHBvcHVwQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0KSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG5cbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XG4gICAgdGhpcy5faW5wdXRzID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX2lucHV0XCIpKTtcbiAgfVxuXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICBjb25zdCBpbnB1dFZhbHVlcyA9IHt9O1xuXG4gICAgdGhpcy5faW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBpbnB1dC5uYW1lO1xuICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgIGlucHV0VmFsdWVzW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpbnB1dFZhbHVlcztcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fZm9ybS5yZXNldCgpO1xuICAgIHN1cGVyLmNsb3NlKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiWW9zZW1pdGUgVmFsbGV5XCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3lvc2VtaXRlLmpwZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiTGFrZSBMb3Vpc2VcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFrZS1sb3Vpc2UuanBnXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJCYWxkIE1vdW50YWluc1wiLFxuICAgICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9iYWxkLW1vdW50YWlucy5qcGdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkxhdGVtYXJcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGF0ZW1hci5qcGdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlZhbm9pc2UgTmF0aW9uYWwgUGFya1wiLFxuICAgICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS92YW5vaXNlLmpwZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiTGFnbyBkaSBCcmFpZXNcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFnby5qcGdcIixcbiAgICB9LFxuICBdO1xuICBcbiAgZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGlucHV0U2VsZWN0b3I6IFwiLnBvcHVwX19pbnB1dFwiLFxuICAgIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5wb3B1cF9fYnV0dG9uXCIsXG4gICAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJwb3B1cF9fYnV0dG9uX2Rpc2FibGVkXCIsXG4gICAgaW5wdXRFcnJvckNsYXNzOiBcInBvcHVwX19pbnB1dF90eXBlX2Vycm9yXCIsXG4gICAgZXJyb3JDbGFzczogXCJwb3B1cF9fZXJyb3JfdmlzaWJsZVwiLFxuICB9O1xuXG5leHBvcnQgY29uc3Qgb3BlblByb2ZpbGVNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIik7XG5leHBvcnQgY29uc3QgZWRpdFByb2ZpbGVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm0tZWRpdFwiKTtcbmV4cG9ydCBjb25zdCBhZGRDYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGQtYnV0dG9uXCIpO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uYW1lXCIpO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVPY2N1cGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19vY2N1cGF0aW9uXCIpO1xuZXhwb3J0IGNvbnN0IHRpdGxlSW5wdXQgPSBlZGl0UHJvZmlsZVBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2lucHV0X3R5cGVfbmFtZVwiKTtcbmV4cG9ydCBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZWRpdFByb2ZpbGVQb3B1cC5xdWVyeVNlbGVjdG9yKFxuICBcIi5wb3B1cF9faW5wdXRfdHlwZV9vY2N1cGF0aW9uXCJcbik7XG5leHBvcnQgY29uc3QgcHJvZmlsZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF90eXBlX3Byb2ZpbGVcIik7XG5leHBvcnQgY29uc3QgYWRkQ2FyZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybS1jcmVhdGVcIik7XG5leHBvcnQgY29uc3QgY2xvc2VQcm9maWxlTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jbG9zZV9wcm9maWxlXCIpO1xuZXhwb3J0IGNvbnN0IHBsYWNlc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGxlcnlfX2dyaWRcIik7XG5leHBvcnQgY29uc3QgY2FyZFRlbXBsYXRlU2VsZWN0b3IgPSBcIiNnYWxsZXJ5LXRlbXBsYXRlXCI7XG5cbmV4cG9ydCBjb25zdCBwb3B1cFNlbGVjdG9yID0gXCJwb3B1cF9vcGVuXCI7XG5leHBvcnQgY29uc3QgcHJldmlld01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF90eXBlX3ByZXZpZXdcIik7XG5leHBvcnQgY29uc3QgcG9wdXBJbWFnZSA9IHByZXZpZXdNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZVwiKTtcbmV4cG9ydCBjb25zdCBwb3B1cFRpdGxlID0gcHJldmlld01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX3RleHRcIik7XG5cbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanNcIjtcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XG5cbmltcG9ydCB7XG4gIGluaXRpYWxDYXJkcyxcbiAgc2V0dGluZ3MsXG4gIG9wZW5Qcm9maWxlTW9kYWxCdXR0b24sXG4gIGVkaXRQcm9maWxlUG9wdXAsXG4gIGFkZENhcmRCdXR0b24sXG4gIGNhcmRUZW1wbGF0ZVNlbGVjdG9yLFxuICBhZGRDYXJkUG9wdXAsXG4gIHRpdGxlSW5wdXQsXG4gIGRlc2NyaXB0aW9uSW5wdXRcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xuXG5pbXBvcnQgQXBpIGZyb20gXCIuLi91dGlscy9BcGkuanNcIlxuXG4vLyBDb25uZWN0IEFQSVxuY29uc3QgYXBpID0gbmV3IEFwaSh7XG4gIGJhc2VVcmw6IFwiaHR0cHM6Ly9hcm91bmQubm9tb3JlcGFydGllcy5jby92MS9jb2hvcnQtMy1lblwiLFxuICBoZWFkZXJzOiB7XG4gICAgYXV0aG9yaXphdGlvbjogXCI5Mzk4YTQ4My00ODRlLTRlYmQtYTM3NC1iNmIzYjk4NWU5YzRcIixcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICB9XG59KTtcblxuYXBpLmdldEluaXRpYWxDYXJkcygpXG4gIC50aGVuKHJlcyA9PiB7XG4gIGNvbnNvbGUubG9nKCdyZXMnLCByZXMpXG59KVxuXG4vLyBGb3JtIFZhbGlkYXRpb25cbmNvbnN0IHZhbGlkYXRlUHJvZmlsZUZvcm0gPSBuZXcgRm9ybVZhbGlkYXRvcihzZXR0aW5ncywgZWRpdFByb2ZpbGVQb3B1cCk7XG52YWxpZGF0ZVByb2ZpbGVGb3JtLmVuYWJsZVZhbGlkYXRpb24oKTtcbnZhbGlkYXRlUHJvZmlsZUZvcm0uZGlzYWJsZUJ1dHRvbigpO1xuXG5jb25zdCB2YWxpZGF0ZVBsYWNlRm9ybSA9IG5ldyBGb3JtVmFsaWRhdG9yKHNldHRpbmdzLCBhZGRDYXJkUG9wdXApO1xudmFsaWRhdGVQbGFjZUZvcm0uZW5hYmxlVmFsaWRhdGlvbigpO1xudmFsaWRhdGVQbGFjZUZvcm0uZGlzYWJsZUJ1dHRvbigpO1xuXG5cbi8vIFBvcHVwc1xuY29uc3QgcHJvZmlsZVBvcHVwRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKFwiLnBvcHVwX3R5cGVfcHJvZmlsZVwiLCAoZGF0YSkgPT4ge1xuICB1c2VySW5mby5zZXRVc2VySW5mbyhkYXRhLm5hbWUsIGRhdGEub2NjdXBhdGlvbik7XG4gIHByb2ZpbGVQb3B1cEZvcm0uY2xvc2UoKTtcbn0pO1xucHJvZmlsZVBvcHVwRm9ybS5zZXRFdmVudExpc3RlbmVycygpO1xuXG5cbmNvbnN0IHBsYWNlc1BvcHVwRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKFwiLnBvcHVwX3R5cGVfYWRkLWNhcmRcIiwgKGRhdGEpID0+IHtcbiBcbiAgcmVuZGVyQ2FyZChkYXRhKTtcbiAgdmFsaWRhdGVQbGFjZUZvcm0ucmVzZXRWYWxpZGF0aW9uKCk7XG4gIHBsYWNlc1BvcHVwRm9ybS5jbG9zZSgpO1xuIFxufSk7XG5wbGFjZXNQb3B1cEZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuXG5jb25zdCBpbWFnZVByZXZpZXdQb3B1cCA9IG5ldyBQb3B1cFdpdGhJbWFnZShcIi5wb3B1cF90eXBlX3ByZXZpZXdcIik7XG5pbWFnZVByZXZpZXdQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuXG4vLyBDcmVhdGUgQ2FyZFxuY29uc3QgcmVuZGVyQ2FyZCA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gbmV3IENhcmQoZGF0YSwgY2FyZFRlbXBsYXRlU2VsZWN0b3IsICh0aXRsZSwgbGluaykgPT4ge1xuICAgIGltYWdlUHJldmlld1BvcHVwLm9wZW4odGl0bGUsIGxpbmspO1xuXG4gIH0pO1xuICBzZWN0aW9uLmFkZEl0ZW0oY2FyZEVsZW1lbnQuY3JlYXRlQ2FyZEVsZW1lbnQoKSk7XG59O1xuXG5cbi8vIFVzZXJJbmZvXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XG4gIHVzZXJOYW1lU2VsZWN0b3I6IFwiLnByb2ZpbGVfX25hbWVcIixcbiAgdXNlck9jY3VwYXRpb25TZWxlY3RvcjogXCIucHJvZmlsZV9fb2NjdXBhdGlvblwiLFxufSk7XG5cblxuLy8gUGxhY2VzIENvbnRhaW5lclxuY29uc3Qgc2VjdGlvbiA9IG5ldyBTZWN0aW9uKFxuICB7XG4gICAgaXRlbXM6IGluaXRpYWxDYXJkcyxcbiAgICByZW5kZXJlcjogKGRhdGEpID0+IHJlbmRlckNhcmQoZGF0YSksXG4gIH0sXG4gIFwiLmdhbGxlcnlfX2dyaWRcIlxuKTtcbnNlY3Rpb24ucmVuZGVySXRlbXMoKTtcblxuXG4vLyBFdmVudCBMaXN0ZW5lcnNcbm9wZW5Qcm9maWxlTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcHJvZmlsZVBvcHVwRm9ybS5vcGVuKCk7XG4gIGNvbnN0IGluZm8gPSB1c2VySW5mby5nZXRVc2VySW5mbygpO1xuICB0aXRsZUlucHV0LnZhbHVlID0gaW5mby5uYW1lO1xuICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gaW5mby5vY2N1cGF0aW9uO1xufSlcblxuYWRkQ2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwbGFjZXNQb3B1cEZvcm0ub3BlbigpO1xufSk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpIHtcbiAgICBjb25zdHJ1Y3RvcihiYXNlVXJsLCBoZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuX2Jhc2VVcmwgPSBiYXNlVXJsO1xuICAgICAgICB0aGlzLl9oZWFkZXJzID0gaGVhZGVycztcbiAgICB9XG4gIFxuICAgIGdldEluaXRpYWxDYXJkcygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzYCwge1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyc1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5vayA/IHJlcy5qc29uKCkgOiBQcm9taXNlLnJlamVjdChyZXMuc3RhdHVzVGV4dCkpIC8vIDIwMFxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgIH1cbiAgICB9XG4gIFxuICAgIC8vIG90aGVyIG1ldGhvZHMgZm9yIHdvcmtpbmcgd2l0aCB0aGUgQVBJXG4gIFxuICBcbiAgIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faW1hZ2UgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1hZ2VcIik7XG4gICAgdGhpcy5faW1hZ2VDYXB0aW9uID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX3RleHRcIik7XG4gIH1cblxuICBvcGVuKHRpdGxlLCBsaW5rKSB7XG4gICAgc3VwZXIub3BlbigpO1xuICAgXG4gICAgdGhpcy5faW1hZ2Uuc3JjID0gbGluaztcbiAgICB0aGlzLl9pbWFnZS5hbHQgPSB0aXRsZTtcbiAgICB0aGlzLl9pbWFnZUNhcHRpb24udGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgdXNlck5hbWVTZWxlY3RvcixcbiAgICB1c2VyT2NjdXBhdGlvblNlbGVjdG9yXG4gIH0pIHtcbiAgICAgIHRoaXMuX3Byb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1c2VyTmFtZVNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5fcHJvZmlsZU9jY3VwYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVzZXJPY2N1cGF0aW9uU2VsZWN0b3IpO1xuICAgIH1cbiAgXG4gICAgZ2V0VXNlckluZm8oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiB0aGlzLl9wcm9maWxlTmFtZS50ZXh0Q29udGVudCxcbiAgICAgICAgb2NjdXBhdGlvbjogdGhpcy5fcHJvZmlsZU9jY3VwYXRpb24udGV4dENvbnRlbnQsXG4gICAgICB9O1xuICAgIH1cbiAgXG4gICAgc2V0VXNlckluZm8obmFtZSwgb2NjdXBhdGlvbikge1xuICAgICAgdGhpcy5fcHJvZmlsZU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgdGhpcy5fcHJvZmlsZU9jY3VwYXRpb24udGV4dENvbnRlbnQgPSBvY2N1cGF0aW9uO1xuICAgIH1cbiAgfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGl0ZW1zLCByZW5kZXJlciB9LCBjb250YWluZXJTZWxlY3Rvcikge1xuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcbiAgfVxuXG4gIHJlbmRlckl0ZW1zKCkge1xuICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSXRlbShpdGVtKSB7XG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoaXRlbSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDYXJkIiwiY29uc3RydWN0b3IiLCJjYXJkVGVtcGxhdGVTZWxlY3RvciIsImhhbmRsZUNhcmRDbGljayIsInRpdGxlIiwibGluayIsInRoaXMiLCJfY2FyZExpa2VCdXR0b24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJfY2FyZEVsZW1lbnQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiX3RvZ2dsZUxpa2VCdXR0b24iLCJfZGVsZXRlQ2FyZEJ1dHRvbiIsIl9kZWxldGVDYXJkIiwiX2NhcmRJbWFnZSIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfdGl0bGUiLCJfbGluayIsImNhcmRUZW1wbGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIl9jYXJkVGVtcGxhdGVTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfY2FyZFRpdGxlIiwic3JjIiwiYWx0IiwidGV4dENvbnRlbnQiLCJfYWRkRXZlbnRMaXN0ZW5lcnMiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWwiLCJpbnB1dEVsIiwiZXJyb3JNZXNzYWdlIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9zZXR0aW5ncyIsImVycm9yRWxlbWVudCIsIl9mb3JtRWwiLCJpZCIsImFkZCIsInZhbGlkaXR5IiwidmFsaWQiLCJfaGlkZUlucHV0RXJyb3IiLCJfc2hvd0lucHV0RXJyb3IiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9pc0Zvcm1WYWxpZCIsIl9lbmFibGVCdXR0b24iLCJkaXNhYmxlQnV0dG9uIiwiX3N1Ym1pdEJ1dHRvbiIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJkaXNhYmxlZCIsIl9pbnB1dExpc3QiLCJldmVyeSIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvbiIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dFNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJyZXNldFZhbGlkYXRpb24iLCJpbnB1dCIsImVuYWJsZVZhbGlkYXRpb24iLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsIl9zZXRFdmVudExpc3RlbmVycyIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsImtleSIsImNsb3NlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJfcG9wdXBFbGVtZW50Iiwib3BlbiIsIl9oYW5kbGVFc2NDbG9zZSIsIl9oYW5kbGVPdmVybGF5Q2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJQb3B1cFdpdGhGb3JtIiwiaGFuZGxlRm9ybVN1Ym1pdCIsInN1cGVyIiwiX2Zvcm0iLCJfaGFuZGxlRm9ybVN1Ym1pdCIsIl9pbnB1dHMiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJpbnB1dFZhbHVlcyIsIm5hbWUiLCJ2YWx1ZSIsInJlc2V0Iiwib3BlblByb2ZpbGVNb2RhbEJ1dHRvbiIsImVkaXRQcm9maWxlUG9wdXAiLCJhZGRDYXJkQnV0dG9uIiwidGl0bGVJbnB1dCIsImRlc2NyaXB0aW9uSW5wdXQiLCJhZGRDYXJkUG9wdXAiLCJwcmV2aWV3TW9kYWwiLCJiYXNlVXJsIiwiaGVhZGVycyIsIl9iYXNlVXJsIiwiX2hlYWRlcnMiLCJnZXRJbml0aWFsQ2FyZHMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0Iiwic3RhdHVzVGV4dCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImF1dGhvcml6YXRpb24iLCJ2YWxpZGF0ZVByb2ZpbGVGb3JtIiwidmFsaWRhdGVQbGFjZUZvcm0iLCJwcm9maWxlUG9wdXBGb3JtIiwiZGF0YSIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJvY2N1cGF0aW9uIiwicGxhY2VzUG9wdXBGb3JtIiwicmVuZGVyQ2FyZCIsImltYWdlUHJldmlld1BvcHVwIiwiX2ltYWdlIiwiX2ltYWdlQ2FwdGlvbiIsImNhcmRFbGVtZW50Iiwic2VjdGlvbiIsImFkZEl0ZW0iLCJjcmVhdGVDYXJkRWxlbWVudCIsInVzZXJOYW1lU2VsZWN0b3IiLCJ1c2VyT2NjdXBhdGlvblNlbGVjdG9yIiwiX3Byb2ZpbGVOYW1lIiwiX3Byb2ZpbGVPY2N1cGF0aW9uIiwiZ2V0VXNlckluZm8iLCJjb250YWluZXJTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwicmVuZGVySXRlbXMiLCJpdGVtIiwicHJlcGVuZCIsImluZm8iXSwic291cmNlUm9vdCI6IiJ9