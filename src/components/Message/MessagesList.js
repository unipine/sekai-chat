import React from 'react'
import MessageItem from './MessageItem'

const MessagesList = ({messages}) => console.log('MessagesList',{messages}) ||
  <div>
    <ul className="list-group">
      {messages.map(msg => <MessageItem key={msg._id} username={msg.author.username} text={msg.text} />)}
    </ul>
  </div>

export default MessagesList
