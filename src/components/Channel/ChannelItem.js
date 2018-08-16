import { connect } from 'react-redux'
import { joinChannel } from '../../actions/Actions'
import { getStateToken } from '../../selectors/Selectors'
import React from 'react'

const ChannelItem = ({ id, topic, token,joinChannel }) =>
  <li className="list-group-item">
      <div className="view">
        <a href="" onClick={(event) => {
          event.preventDefault()
          joinChannel(id,token)
        }}>{topic}</a>
      </div>
  </li>

const mapStateToProps = state => ({
  token: getStateToken(state)
})

const mapDispatchToProps = {
  joinChannel
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelItem)
