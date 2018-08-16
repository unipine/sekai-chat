import {
  NEW_TOKEN,
  TOKEN_ERROR,
  TOKEN_SUCCESS} from '../constants/ActionTypes'

const initialState = {
  token: '',
  error: null,
  success: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_TOKEN:
      return {
        ...state,
        token: action.token
      }
    case TOKEN_ERROR:
      return {
        ...state,
        error: action.error
      }
    case TOKEN_SUCCESS:
      return {
        ...state,
        success: true
      }
    default:
      return state
  }

}
