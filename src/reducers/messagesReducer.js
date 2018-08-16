import {
  MESSAGES_LOADING,
  MESSAGES_LOADED,
  MESSAGES_ERROR,
  ADD_MESSAGE} from '../constants/ActionTypes'

const initialState = {
  items: [],
  loading: false,
  error: null
}

export const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        items: [...state.items, action.item]
      }

    case MESSAGES_LOADING:
      return {
        ...state,
        loading: true
      }
    case MESSAGES_ERROR:
      return {
        ...state,
        error: action.error
      }
    case MESSAGES_LOADED:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }

}
