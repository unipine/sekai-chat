
export const isAuthenticated = (state) => {
   return !state.auth.token ? false: true
 }

export const getStateToken = (state) => { return state.auth.token}

export const getLogin = (state) => { return state.login.user}

export const getStateUsers = (state) => { return state.users.items}

export const getStateChannel = (state) => { return state.channel.id}

export const getStateChannelId = (state) => {return state.channel._id}

export const getStateChannels = (state) => { return state.channels.items}

export const getStateJoinedMember = (state) => { return state.member.joined}

export const getStateJoinedError = (state) => { return state.member.error}

export const getStateMembers = (state) => { return state.members.items}

export const getStateMessages = (state) => { return state.messages.items}

export const getLoadingUsr = (state) => {return state.users.loading}

export const getLoadingUsrError = (state) => {return state.users.error}

export const getLoadingMmb = (state) => {return state.members.loading}

export const getLoadingMmbError = (state) => {return state.members.error}

export const getLoadingChn = (state) => {return state.channels.loading}

export const getLoadingChnError = (state) => {return state.channels.error}

export const getLoadingMsg = (state) => {return state.messages.loading}

export const getLoadingMsgError = (state) => {return state.messages.error}
