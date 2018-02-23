import fetch from 'cross-fetch'


//Synchronous actions
export function chooseTag(tag) {
  return {
    type: CHOOSE_TAG,
    tag
  }
}

function requestImages(tag) {
  return {
    type: REQUEST_IMAGES,
    tag
  }
}

function receiveImages(tag, json) {
  return {
    type: RECEIVE_IMAGES,
    tag,
    images: json.data.children.map(child => child.data),
  }
}


//Async actions
function fetchImages(tag) {
  return dispatch => {
    dispatch(requestImages(tag))
    return fetch(`https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${tag}`)
      .then(response => response.json())
      .then(json => dispatch(receiveImages(tag, json)))
  }
}
