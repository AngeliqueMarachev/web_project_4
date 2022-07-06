import { avatar } from "../utils/constants";

export default class UserInfo {
  constructor({ userNameSelector, userOccupationSelector, userAvatarSelector }) {
    this._profileName = document.querySelector(userNameSelector);
    this._profileOccupation = document.querySelector(userOccupationSelector);
    // this._avatarElement = document.querySelector(`${userAvatarSelector}`);
    this._avatarElement = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    return {
      user: this._profileName.textContent,
      occupation: this._profileOccupation.textContent,
      avatar: this._avatarElement.src,
    };
  }

  setUserInfo({ user, occupation, avatar }) {
    this._profileName.textContent = user || this._name;;
    this._profileOccupation.textContent = occupation || this._occupation;;
   
  }

  setUserAvatar(avatar) {
      this._avatarElement.src = avatar || this._avatar;
  }

  setAvatarVisible() {
    this._avatarElement.style.visibility = "visible";
  }
}

