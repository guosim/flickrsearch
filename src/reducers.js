import { combineReducers } from 'redux'
import {
  CHOOSE_TAG,
  REQUEST_IMAGES,
  RECEIVE_IMAGES
} from './actions'

function chooseTag(state = '', action) {
  switch (action.type) {
    case CHOOSE_TAG:
      return action.tag
    default:
      return state
  }
}

function imagesByTag(state={isFetching:false, images:[]}, action) {
  switch (action.type) {
    case REQUEST_IMAGES:
      return {
        ...state,
        isFetching:true
      }
    case RECEIVE_IMAGES:
      return {
        isFetching:false,
        images:action.images
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  chooseTag,
  imagesByTag
})

export default rootReducer;