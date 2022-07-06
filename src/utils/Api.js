class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    };

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        }).then(res => res.ok ? res.json() : Promise.reject(res.statusText));
    }
    
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.statusText));
    }

    editProfile({ name, about }) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name,
                about,
            })
        }).then(res => res.ok ? res.json() : Promise.reject(res.statusText));
    }

    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        }).then(res => res.ok ? res.json() : Promise.reject(res.statusText));
    }

    addCard({ name, link }) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name,
                link,
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.statusText));
    }

     likeCard(cardId) {
         return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
             method: 'PUT',
             headers: this._headers,
         }).then(res => res.ok ? res.json() : Promise.reject(res.statusText));
     }
    
     removeLike(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        }).then(res => res.ok ? res.json() : Promise.reject(res.statusText));
    }
    
     editAvatar(avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
          method: 'PATCH',
          headers: this._headers,
            body: JSON.stringify(avatar),
        }).then(res => res.ok ? res.json() : Promise.reject(res.statusText));
     }
    
     deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
          method: 'DELETE',
          headers: this._headers,
        }).then(res => res.ok ? res.json() : Promise.reject(res.statusText));
     }
};


    // other methods for working with the API
  
  
  // Connect API
export const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
    headers: {
      authorization: "9398a483-484e-4ebd-a374-b6b3b985e9c4",
      "Content-Type": "application/json"
    }
})
