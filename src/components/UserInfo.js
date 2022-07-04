export default class UserInfo {
  constructor({ userNameSelector, userOccupationSelector, userAvatarSelector }) {
    this._profileName = document.querySelector(userNameSelector);
    this._profileOccupation = document.querySelector(userOccupationSelector);
    // this._avatarElement = document.querySelector(".profile__avatar");
    this._avatarElement = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    return {
      user: this._profileName.textContent,
      occupation: this._profileOccupation.textContent,
    };
  }

  setUserInfo({ user, occupation, avatar }) {
    this._profileName.textContent = user;
    this._profileOccupation.textContent = occupation;
    this._avatarElement.src = `url(${avatar})`;
  }
}