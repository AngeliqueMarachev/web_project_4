class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        }).then(res => res.ok ? res.json() : Promise.reject(res.statusText))
          .catch(err => console.log(err));
          }
      }
    
  
    // other methods for working with the API
  
  
  // Connect API
export const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
    headers: {
      authorization: "9398a483-484e-4ebd-a374-b6b3b985e9c4",
      "Content-Type": "application/json"
    }
})