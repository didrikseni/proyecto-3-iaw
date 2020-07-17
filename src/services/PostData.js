var BaseUrl = 'http://127.0.0.1:8000/api/';
//var BaseUrl = 'https://portal-uns.herokuapp.com/api/'

function postData(type, data) {
  try {
    return fetch(BaseUrl + type, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error);
  }
}

function postDataAuth(type, data, auth) {
  try {
    return fetch(BaseUrl + type, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + auth,
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error);
  }
}

export { postData, postDataAuth };
