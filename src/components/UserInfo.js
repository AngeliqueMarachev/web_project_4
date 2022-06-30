export default class UserInfo {
  constructor({
    userNameSelector,
    userOccupationSelector
  }) {
      this._profileName = document.querySelector(userNameSelector);
        this._profileOccupation = document.querySelector(userOccupationSelector);
    }
  
    getUserInfo() {
      return {
        user: this._profileName.textContent,
        occupation: this._profileOccupation.textContent,
      };
    }
  
  setUserInfo({ user, occupation }) {
      this._profileName.textContent = user;
      this._profileOccupation.textContent = occupation;
    }
};