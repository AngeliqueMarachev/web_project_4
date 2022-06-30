class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    };

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        }).then(res => res.ok ? res.json() : Promise.reject(res.statusText))
           .catch(console.log);
    }
    
    getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers
    })
        .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
        .catch(console.log);
    }
    
    createCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data)
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
            .catch(console.log);
    }

    editProfile({ name, about }) {
        return fetch(`${this._baseUrl}/users/me`, {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({
                  name,
                  about,
                })
        }).then(res => res.ok ? res.json() : Promise.reject(res.statusText))
          .catch(console.log);
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
