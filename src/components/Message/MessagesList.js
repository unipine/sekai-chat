import React from 'react'
import MessageItem from './MessageItem'

const MessagesList = ({messages}) =>
  <div>
    <ul className="list-group">
      {messages.map(msg => <MessageItem key={msg._id} username={msg.author.username} messagetext={msg.text} />)}
    </ul>
  </div>

export default MessagesList
