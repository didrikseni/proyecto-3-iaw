function PostData(type, data) {
  let BaseUrl = 'http://127.0.0.1/api/'
  return new Promise((resolve, reject) => {
    fetch(BaseUrl + type, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        resolve(responseJson)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default PostData
