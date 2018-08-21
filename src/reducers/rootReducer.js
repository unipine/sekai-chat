import {loginReducer} from './loginReducer'
import {authReducer} from './authReducer'
import {usersReducer} from './usersReducer'
import {channelsReducer} from './channelsReducer'
import {channelReducer} from './channelReducer'
import {memberReducer} from './memberReducer'
import {messagesReducer} from './messagesReducer'
import {messageReducer} from './messageReducer'
import {combineReducers} from 'redux'
import {reducer as formReducer } from 'redux-form'
import {itemReducerCreator} from './itemReducerCreator'

import {
  MEMBERS_LOADING,
  MEMBERS_LOADED,
  MEMBERS_ERROR,
  ADD_MEMBER} from '../constants/ActionTypes'


const rootReducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
  users: usersReducer,
  channel: channelReducer,
  channels: channelsReducer,
  member: memberReducer,
  members: itemReducerCreator({add_item: ADD_MEMBER, item_loading: MEMBERS_LOADING, item_error: MEMBERS_ERROR, item_loaded: MEMBERS_LOADED}),
  message: messageReducer,
  messages: messagesReducer,
  form: formReducer,
})

export default rootReducer
