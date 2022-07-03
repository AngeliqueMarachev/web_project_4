class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    };

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        }).then(res => res.ok ? res.json() : Promise.reject(res.statusText));
        //    .catch(console.log);
    }
    
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.statusText));
        // .catch(console.log);
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
        //   .catch(console.log);
    }

    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        }).then(res => res.ok ? res.json() : Promise.reject(res.statusText));
        //   .catch(console.log);
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
            // .catch(console.log);
    }

     likeCard(id) {
         return fetch(`${this._baseUrl}/cards/likes/${id}`, {
             method: 'PUT',
             headers: this._headers,
         }).then(res => res.ok ? res.json() : Promise.reject(res.statusText));
        // .catch(console.log);
     }
    
     removeLike(id) {
        return fetch(`${this._baseUrl}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        }).then(res => res.ok ? res.json() : Promise.reject(res.statusText));
       // .catch(console.log);
    }
    
     updateAvatar({ avatar }) {
        return fetch(`${this._baseUrl}/users/me.avatar`, {
          method: 'PATCH',
          headers: thi._headers,
          body: JSON.stringify({ avatar: avatar }),
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
