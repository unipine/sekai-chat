import React from 'react'

const MessageItem = ({username,text}) =>
<li className="list-group-item">
  <div className="view">
    <label> {username}: {text}</label>
  </div>
</li>

export default MessageItem
