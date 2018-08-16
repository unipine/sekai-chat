import React, {Component} from 'react'
import UserItem from './UserItem'

const UsersList = ({users}) =>
       <div>
         <ul className="list-group">
           {users.map(user => <UserItem key={user.id} username={user.username} email={user.email} />)}
         </ul>
       </div>

export default UsersList
