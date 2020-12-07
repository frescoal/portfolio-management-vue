/**
 * Make the request and parse result
 * @param { string } url - Url to bind
 * @param { object } header - Header options
 * @returns {Promise<string|array>}
 * @private
 */
const _fetch = async (url, header) => {

  const httpRequest = await fetch(url, header).catch((error) => {
    handleHttpError(error);
  });

  if (httpRequest !== undefined) {
    if (httpRequest.status === 204) {
      return null;
    }

    const result = await httpRequest.json();

    if (httpRequest.status === 200) {
      return result;
    }

    // In case of fetch timeout
    if (httpRequest.status > 404) {
      handleHttpError(result.errors);
    }
  }

  return null;
};

const handleHttpError = (error) => {
  console.error(error);
}

/**
 * Set header credentials to communicate with server
 * @params [String] method
 * @params [Object] body
 * @return [Object] header
 * @private
 */
const setHeaders = async (method = 'GET', body = false, contentType = 'application/json') => {
  const credentials = await JSON.parse(localStorage.getItem('authToken'));
  const header = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': contentType,
      'access-token': credentials?.accessToken,
      'token-type': credentials?.tokenType,
      client: credentials?.client,
      uid: credentials?.uid,
      expiry: credentials?.expiry,
    },
  };

  if (method === 'POST' || method === 'PATCH' || method === 'PUT' || method === 'DELETE') {
    header.body = JSON.stringify(body);
  }
  return header;
};

export {
  setHeaders,
  _fetch,
};

