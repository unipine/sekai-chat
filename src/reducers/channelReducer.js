import {SET_CHANNEL} from '../constants/ActionTypes'

const initialState = {
  id: ''
}

export const channelReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_CHANNEL:
      return {
        id: action.id
      }
    default:
      return state
  }

}
