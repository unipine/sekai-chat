import React, {Component} from 'react'
import MemberItem from './MemberItem'

const MembersList = ({members}) => console.log('MemberList',{members}) ||
       <div>
         <ul className="list-group">
           { members.map(member => <MemberItem key={member._id} username={member.username} email={member.email} />) }
         </ul>
       </div>

export default MembersList
