import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getStateToken, getStateChannel, getStateJoinedMember } from './selectors/Selectors'
import LoginPage from './components/Login'
import {Channels, ChannelPage, JoinChannel} from './components/Channel'
import {Members} from './components/Member'
import {Messages, MessagePage} from './components/Message'


const App =  ( {token, channel, joined} ) => {


      if (!token) {

        console.log('Login Page Token', token)

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


        console.log('Chat App', channel)

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

export default connect(mapStateToProps, null)(App)
