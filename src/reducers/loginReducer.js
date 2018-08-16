import {
  NEW_USER,
  LOGIN_ERROR,
  LOGIN_SUCCESS} from '../constants/ActionTypes'

const initialState = {
  user: {},
  error: null,
  success: false
}

export const loginReducer = (state = initialState, action) => {

  switch (action.type) {
    case NEW_USER:
      return {
        ...state,
        user: action.user
      }
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.error
      }
      return action.error
    case LOGIN_SUCCESS:
      return {
        ...state,
        success: true
      }
    default:
      return state
  }

}
