import {
  MEMBERS_LOADING,
  MEMBERS_LOADED,
  MEMBERS_ERROR,
  ADD_MEMBER} from '../constants/ActionTypes'

const initialState = {
  items: [],
  loading: false,
  error: null
}

export const membersReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MEMBER:
      return {
        ...state,
        items: [...state.items, action.item]
      }

    case MEMBERS_LOADING:
      return {
        ...state,
        loading: true
      }
    case MEMBERS_ERROR:
      return {
        ...state,
        error: action.error
      }
    case MEMBERS_LOADED:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }

}
