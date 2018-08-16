import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
//import CreateMessage from './CreateMessage'
import UserList from './UserList'
import MessageList from './MessageList'

import {getUsername,
  getMessageText,
  getUsers,
  getMessages,
  changeMessage,
  newMessage,
  createMessage} from '../actions/Actions'

const ChatApp = ({username, messagetext, users, messages, changeMessage, newMessage, createMessage}) =>{

  return (

    <div>
      <section className="header">
        <h1>Chat App</h1>
      </section>
      <UsersList users={users}/>
      <ChannelsList channels={channels} />
      <MembersList members={members} />
      <MessagesList messages={messages}/>
    </div>

  )

}


const mapStateToProps = state => ({
  username: getUsername(state),
  messagetext: getMessageText(state),
  users: getUsers(state),
  messages: getMessages(state),
})

const mapDispatchToProps = dispatch => ({
  changeMessage: messagetext => dispatch(changeMessage(messagetext)),
  createMessage: (username,messagetext) => dispatch(createMessage(username,messagetext)),
  newMessage: messagetext => dispatch(newMessage(messagetext)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatApp)
