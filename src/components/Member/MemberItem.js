import React from 'react'

const MemberItem = ({ username, email }) =>
  <li className="list-group-item">
    <div className="view">
      <label> {username} , {email}</label>
    </div>
  </li>


export default MemberItem
