function PostData(type, data, auth = '') {
    let BaseUrl = 'http://127.0.0.1:8000/api/';
    //let BaseUrl = 'https://portal-uns.herokuapp.com/api/'

    let init = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    if (auth !== '') {
        init.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + auth,
        };
    }

    try {
        return fetch(BaseUrl + type, init);
    } catch (error) {
        console.error(error);
    }
}

export default PostData;
