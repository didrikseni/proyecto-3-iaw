//const BaseUrl = 'http://127.0.0.1:8000/api/';
const BaseUrl = 'https://portal-uns.herokuapp.com/api/'

function postData(type, data, auth = '') {
  let init;
  auth === ''
    ? (init = {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    : (init = {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: 'Bearer ' + auth },
        body: JSON.stringify(data),
      });

  try {
    return fetch(BaseUrl + type, init);
  } catch (error) {
    console.error(error);
  }
}

export { postData };
