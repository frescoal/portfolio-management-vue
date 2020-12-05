import {host} from '../config/constants';

const login = (username, password) => {
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

const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('authToken');
}

const loggedIn = () => {
  const authToken = localStorage.getItem('authToken');
  if(authToken === null) return false;

  const {uid, expiry} = JSON.parse(authToken);
  if(expiry * 1000 < Date.now()) logout();

  return uid != null;
}

const  handleResponse = (response) => {
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

export const userService = {
  login,
  logout,
  loggedIn,
};

