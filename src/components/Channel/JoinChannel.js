import React, { Component } from 'react'
import { connect } from 'react-redux'
import { joinChannel } from '../../actions/Actions'
import { getStateToken, getStateChannel, getStateJoinedMember, getStateJoinedError} from '../../selectors/Selectors'

class JoinChannel extends Component {

 componentDidMount () {
    const { channel, token, joinChannel } = this.props
    console.log('JoinChannel',channel,token)
    joinChannel(channel,token)
  }

  render () {

    const {joined,error } = this.props

    console.log('joined',joined,'error',error)

    return (
      <div>
        {!!error && <div> Joaning Channel Error: {error} </div>}
        {!!joined ? <div> Joined {joined}!!! </div> : <div> Not Joined...</div>}
      </div>

    )
  }

}

const mapStateToProps = state => ({
  token: getStateToken(state),
  channel: getStateChannel(state),
  joined: getStateJoinedMember(state),
  error: getStateJoinedError(state)
})

const mapDispatchToProps = {joinChannel}

export default connect(mapStateToProps, mapDispatchToProps)(JoinChannel)
