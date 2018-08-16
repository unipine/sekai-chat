import React from 'react'

const MessageItem = ({username,text}) =>
  <li className="list-group-item">
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">Mensaje</h5>
        <h6 className="card-subtitle mb-2 text-muted">{username}</h6>
        <p className="card-text">{text}</p>
      </div>
    </div>
  </li>

export default MessageItem
