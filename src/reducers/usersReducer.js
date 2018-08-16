import {
  USERS_LOADING,
  USERS_LOADED,
  USERS_ERROR,
  ADD_USER} from '../constants/ActionTypes'

const initialState = {
  items: [],
  loading: false,
  error: null
}

export const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        items: [...state.items, action.item]
      }

    case USERS_LOADING:
      return {
        ...state,
        loading: true
      }
    case USERS_ERROR:
      return {
        ...state,
        error: action.error
      }
    case USERS_LOADED:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }

}
