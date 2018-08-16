import {
  CHANNELS_LOADING,
  CHANNELS_LOADED,
  CHANNELS_ERROR,
  ADD_CHANNEL} from '../constants/ActionTypes'

const initialState = {
  items: [],
  loading: false,
  error: null
}

export const channelsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_CHANNEL:
      return {
        ...state,
        items: [...state.items, action.item]
      }

    case CHANNELS_LOADING:
      return {
        ...state,
        items: [],
        loading: true
      }
    case CHANNELS_ERROR:
      return {
        ...state,
        error: action.error
      }
    case CHANNELS_LOADED:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }

}
