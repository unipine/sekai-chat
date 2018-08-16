import {
  NEW_TOKEN,
  TOKEN_ERROR,
  TOKEN_SUCCESS,
  NEW_USER,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  ADD_USER,
  USERS_LOADING,
  USERS_ERROR,
  USERS_LOADED,
  NEW_CHANNEL,
  CHANNEL_ERROR,
  CHANNEL_SUCCESS,
  SET_CHANNEL,
  ADD_CHANNEL,
  CHANNELS_LOADING,
  CHANNELS_ERROR,
  CHANNELS_LOADED,
  SET_MEMBER,
  JOINED_ERROR,
  NEW_MEMBER,
  MEMBER_ERROR,
  MEMBER_SUCCESS,
  ADD_MEMBER,
  MEMBERS_LOADING,
  MEMBERS_ERROR,
  MEMBERS_LOADED,
  NEW_MESSAGE,
  MESSAGE_ERROR,
  MESSAGE_SUCCESS,
  ADD_MESSAGE,
  MESSAGES_LOADING,
  MESSAGES_ERROR,
  MESSAGES_LOADED} from '../constants/ActionTypes'


import { v4 } from 'node-uuid'


export const newToken = (token) => {
  return {
    type: NEW_TOKEN,
    token
  }
}

export const tokenError = (error) => {
  return { type: TOKEN_ERROR, error }
}

export const tokenSuccess = () => {
  return { type: TOKEN_SUCCESS }
}

export const newUser = (user) => {
  return {
    type: NEW_USER,
    user
  }
}

export const loginError = (error) => {
  return { type: LOGIN_ERROR, error }
}

export const loginSuccess = () => {
  return { type: LOGIN_SUCCESS }
}


export const addUser = (item) => {
  return {
    type: ADD_USER,
    item
  }
}

export const usersLoading = () => {
  return { type: USERS_LOADING }
}

export const usersError = (error) => {
  return { type: USERS_ERROR, error }
}

export const usersLoaded = () => {
  return { type: USERS_LOADED }
}


export const setChannel = (id) => {
  return {
    type: SET_CHANNEL,
    id
  }

}

export const newChannel = (channel) => {
  return {
    type: NEW_CHANNEL,
    channel
  }

}

export const channelError = (error) => {
  return { type: CHANNEL_ERROR, error }
}

export const channelSuccess = () => {
  return { type: CHANNEL_SUCCESS }
}


export const addChannel = (item) => {
  return {
    type: ADD_CHANNEL,
    item
  }
}
export const channelsLoading = () => {
  return { type: CHANNELS_LOADING }
}

export const channelsError = (error) => {
  return { type: CHANNELS_ERROR, error }
}

export const channelsLoaded = () => {
  return { type: CHANNELS_LOADED }
}

export const setMember = () => {
  return { type: SET_MEMBER }
}

export const joinedError = (error) => {
  return { type: JOINED_ERROR, error }
}

export const newMember = (member) => {
  return {
    type: NEW_MEMBER,
    member
  }

}

export const memberError = (error) => {
  return { type: MEMBER_ERROR, error }
}

export const memberSuccess = () => {
  return { type: MEMBER_SUCCESS }
}

export const addMember = (item) => {
  return {
    type: ADD_MEMBER,
    item
  }
}

export const membersLoading = () => {
  return { type: MEMBERS_LOADING }
}

export const membersError = (error) => {
  return { type: MEMBERS_ERROR, error }
}

export const membersLoaded = () => {
  return { type: MEMBERS_LOADED }
}


export const newMessage = (message) => {
  return {
    type: NEW_MESSAGE,
    message
  }
}

export const messageError = (error) => {
  return { type: MESSAGE_ERROR, error }
}

export const messageSuccess = () => {
  return { type: MESSAGE_SUCCESS }
}

export const addMessage = (item) => {
  return {
    type: ADD_MESSAGE,
    item
  }
}

export const messagesLoading = () => {
  return { type: MESSAGES_LOADING }
}

export const messagesError = (error) => {
  return { type: MESSAGES_ERROR, error }
}

export const messagesLoaded = () => {
  return { type: MESSAGES_LOADED }
}




export const postUser = creds => (dispatch, getState, api) =>

      api.postUsersAPI(creds).then(response => {
        dispatch(postAuth(response.token))
        dispatch(newUser(creds))
      }, error => {
        dispatch(loginError(error))
      }).then(() => {
        dispatch(loginSuccess())
      })

export const postAuth = creds => (dispatch, getState, api) =>

      api.postAuthAPI(creds).then(response => {
        console.log('Response: ', response)
        dispatch(newToken(response.token))
        dispatch(newUser(creds))
        dispatch(loginSuccess())
      })


export const postChannel = (name,token) => (dispatch, getState, api) => console.log('post name',name, 'token',token) ||
      api.postChannelsAPI(name,token).then(response => {
        console.log('Response postChannelAPI: ', response)
        dispatch(setChannel(response._id))
      })



export const joinChannel = (id,token) => (dispatch, getState, api) => console.log('join id',id, 'token',token) ||
        api.postMembersAPI(id,token).then(response => {
          console.log('Response postJoinChannelAPI: ', response)
          dispatch(setChannel(id))
        })


export const postMember = (id,token) => (dispatch, getState, api) => console.log('member id',id, 'token',token) ||
      api.postMembersAPI(id,token).then(response => {
        console.log('Response postMembersAPI: ', response)
        dispatch(newMember(response))
      })



export const postMessage = (channel,token,text) => (dispatch, getState, api) =>

  api.postMessagesAPI(channel,token,text).then(response => {
        dispatch(newMessage(response))
      }, error => {
        dispatch(messageError(error))
      }).then(() => {
        dispatch(messageSuccess())
      })


export const getUsers = (token) => (dispatch, getState, api) => {

      dispatch(usersLoading())

      console.log('getUsers',token)

      return api.getUsersAPI(token).then(users => {
        users.forEach(user => dispatch(addUser))
      }, error => {
        dispatch(usersError(error))
      }).then(() => {
        dispatch(usersLoaded())
      })


}

export const getChannels = (token) => (dispatch, getState, api) => {

      dispatch(channelsLoading())

      console.log('getChannels',token)

      return api.getChannelsAPI(token).then(channels => {
        console.log('Channels:',channels)
        channels.forEach(channel => dispatch(addChannel(channel)))
      }, error => {
        dispatch(channelsError(error))
      }).then(() => {
        dispatch(channelsLoaded())
      })

}


export const getMembers = (id,token) => (dispatch, getState, api) => {

      dispatch(membersLoading())

      console.log('getMembers',id)

      return api.getMembersAPI(id,token).then(members => {
        members.forEach(member => dispatch(addMember))
      }, error => {
        dispatch(membersError(error))
      }).then(() => {
        dispatch(membersLoaded())
      })


}


export const getMessages = (id,since,token) => (dispatch, getState, api) => {

      dispatch(messagesLoading())

      console.log('getMessages',id)

      return api.getMessagesAPI(id,since,token).then(messages => {
        messages.forEach(message => dispatch(addMessage))
      }, error => {
        dispatch(messagesError(error))
      }).then(() => {
        dispatch(messagesLoaded())
      })


}






export const pullUsers =  (token, ms = 5000) => (dispatch, getState, api) => {
  let listener = null
  let running = false
  let interval = null

  const start = fn => {
    listener = fn
    running = true
    dispatch(usersLoading())
    loop()
  }

  const stop = () => {
    clearInterval(interval)
    running = false
  }

  function loop () {

    interval = setTimeout(() => {

      api.getUsersAPI(token).then(data => {
          if (running) {
            if (data.length) {
              listener(data)
            }
            loop()
          }
        }, error => {
          dispatch(usersError(error))
        }).then(() => {
          dispatch(usersLoaded())
        })
    }, ms)

  }

  return { start, stop }
}



export const pullChannels = (token, ms = 1000) => (dispatch, getState, api) => {
  let listener = null
  let running = false
  let interval = null

  const start = fn => {
    listener = fn
    running = true
    dispatch(channelsLoading())
    loop()
  }

  const stop = () => {
    clearInterval(interval)
    running = false
  }

  function loop () {

    interval = setTimeout(() => {

      api.getChannelsAPI(token).then(data => {

          if (running) {

            if (data.length) {
              listener(data)
            }

            loop()
          }

        })

    }, ms)

  }

  return { start, stop }
}



export const pullMembers = (id, token, ms = 5000) => (dispatch, getState, api) => {
  let listener = null
  let running = false
  let interval = null

  const start = fn => {
    listener = fn
    running = true
    dispatch(membersLoading())
    loop()
  }

  const stop = () => {
    clearInterval(interval)
    running = false
  }

  function loop () {
    interval = setTimeout(() => {

      api.getMembersAPI(id,token).then(data => {
          if (running) {
            if (data.length) {
              listener(data)
            }
            loop()
          }
        }, error => {
          dispatch(membersError(error))
        }).then(() => {
          dispatch(membersLoaded())
        })
    }, ms)
  }

  return { start, stop }

}



export const pullMessages = (id,token, ms = 1000) => (dispatch, getState, api) => {
  let listener = null
  let running = false
  let interval = null
  let lastId = null

  const start = fn => {
    listener = fn
    running = true
    dispatch(messagesLoading())
    loop()
  }

  const stop = () => {
    clearInterval(interval)
    running = false
  }

  function loop () {
    interval = setTimeout(() => {

      api.getMessagesAPI(id,lastId,token).then(data => {
          if (running) {
            if (data.length) {
              lastId = data[data.length - 1]._id
              listener(data)
            }
            loop()
          }
        }, error => {
          dispatch(messagesError(error))
        }).then(() => {
          dispatch(messagesLoaded())
        })

    }, ms)
  }

  return { start, stop }
}