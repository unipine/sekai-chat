import React from 'react'
import MessageItem from './MessageItem'

const MessagesList = ({messages}) => 
  <div>
    <h1>Messages:</h1>
    <ul className="list-group">
      {messages.map(msg => <MessageItem key={msg._id} username={msg.author.username} text={msg.text} />)}
    </ul>
  </div>

export default MessagesList
