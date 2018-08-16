import {
  SET_MEMBER,
  JOINED_ERROR} from '../constants/ActionTypes'

const initialState = {
  joined: false,
  error: null
}

export const memberReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_MEMBER:
      return {
        ...state,
        joined: true
      }
    case JOINED_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }

}
