import React from 'react'
import { connect } from 'react-redux'
import { getStateToken, getStateChannel, getStateJoinedMember } from '../selectors/Selectors'
import LoginPage from '../pages/LoginPage'
import {Channels, ChannelPage, JoinChannel} from './Channel'
import {Members} from './Member'
import {Messages, MessagePage} from './Message'


const ChatApp =  ( {token, channel, joined} ) => {


      if (!token) {

        return (
          <div className="container">
            <LoginPage />
          </div>
        )

      } else if (!!token && !channel) {

        return (
          <div className="container">
            <Channels />
            <ChannelPage />
            <JoinChannel />
          </div>
        )

      } else if (!!token && !!channel) {


        return (
            <div className="container">
              <Members />
              <Messages />
              <MessagePage />
            </div>
        )

      }

}

const mapStateToProps = state => ({
  token: getStateToken(state),
  channel: getStateChannel(state),
  joined: getStateJoinedMember(state)
})

export default connect(mapStateToProps, null)(ChatApp)
