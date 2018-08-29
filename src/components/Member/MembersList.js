import React from 'react'
import MemberItem from './MemberItem'

const MembersList = ({members}) =>
       <div>
        <h1> Members: </h1>
         <ul className="list-group">
           { members.map(member => <MemberItem key={member._id} username={member.username} email={member.email} />) }
         </ul>
       </div>

export default MembersList
