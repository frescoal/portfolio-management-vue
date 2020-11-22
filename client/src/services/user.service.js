import {host} from '../config/constants';

export const userService = {
  login,
  logout,
};

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email: username, password})
  };
  return fetch(`${host}/auth/sign_in`, requestOptions)
      .then((response) => {
        handleResponse(response)
        const authToken =
            {
              accessToken: response.headers.get("access-token"),
              client: response.headers.get("client"),
              expiry: response.headers.get("expiry"),
              uid: response.headers.get("uid"),
              tokenType: response.headers.get("token-type"),
            };
        if (authToken.accessToken) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('authToken', JSON.stringify(authToken));
          return authToken;
        }
        return null;
      });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('authToken');
}

function handleResponse(response) {
  if (!response.ok) {
    if (response.status === 401) {
      // auto logout if 401 response returned from api
      logout();
      location.reload(true);
    }

    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }
}
