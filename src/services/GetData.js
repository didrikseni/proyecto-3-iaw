const BaseUrl = 'http://127.0.0.1:8000/api/';
//const BaseUrl = 'https://portal-uns.herokuapp.com/api/'

function getData(type, auth = '') {
  try {
    let init = { method: 'GET', headers: { Accept: 'application/json', 'Content-Type': 'application/json' } };
    if (auth !== '') {
      init = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth,
        },
      };
    }
    return fetch(BaseUrl + type, init);
  } catch (error) {
    console.error(error);
  }
}

export { getData };
