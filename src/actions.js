//import fetch from 'cross-fetch';
import fetchJsonp from 'fetch-jsonp';


export const CHOOSE_TAG = 'CHOOSE_TAG';
export const REQUEST_IMAGES = 'REQUEST_IMAGES';
export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';

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
    images: json.data.children.map(child => child.data)
  }
}


//Async actions
export function fetchImages(tag="") {
  return dispatch => {
    dispatch(requestImages(tag))
    return fetchJsonp(`https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${tag}`)
      .then(response => dispatch(receiveImages(tag, response)))
      .catch (err => console.log(err))
  }
}
