import React from 'react'

const UserItem = ({ username, email }) =>
  <li className="list-group-item">
    <div>
      <label> username: {username} , email: {email} </label>
    </div>
  </li>

export default UserItem
