import {
  NEW_MESSAGE,
  MESSAGE_SUCCESS,
  MESSAGE_ERROR} from '../constants/ActionTypes'

const initialState = {
  message: {},
  error: null,
  success: false
}

export const messageReducer = (state = initialState, action) => {

  switch (action.type) {
    case NEW_MESSAGE:
      return {
        ...state,
        user: action.message
      }
    case MESSAGE_ERROR:
      return {
        ...state,
        error: action.error
      }
    case MESSAGE_SUCCESS:
      return {
        ...state,
        success: true
      }
    default:
      return state
  }

}
