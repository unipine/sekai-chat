import React from 'react'
import ChannelItem from './ChannelItem'

const ChannelsList = ({ channels}) =>
       <div>
        <h1> Channels: </h1>
         <ul className="list-group">
           {channels.map(channel => <ChannelItem key={channel._id} id={channel._id} topic={channel.topic}/>)}
         </ul>
       </div>

export default ChannelsList
