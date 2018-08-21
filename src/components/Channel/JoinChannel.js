import React, { Component } from 'react'
import { connect } from 'react-redux'
import { joinChannel } from '../../actions/Actions'
import { getStateToken, getStateChannel, getStateJoinedMember, getStateJoinedError} from '../../selectors/Selectors'

class JoinChannel extends Component {

 componentDidMount () {
    const { id, token, joinChannel } = this.props
    if (id) {
        console.log('JoinChannel',id,token)
        joinChannel(id,token)
    }
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
  id: getStateChannel(state),
  joined: getStateJoinedMember(state),
  error: getStateJoinedError(state)
})

const mapDispatchToProps = {joinChannel}

export default connect(mapStateToProps, mapDispatchToProps)(JoinChannel)
