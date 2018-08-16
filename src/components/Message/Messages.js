import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pullMessages } from '../../actions/Actions'
import { addMessage } from '../../actions/Actions'
import { getStateToken, getStateChannel, getStateMessages, getLoadingMsg, getLoadingMsgError } from '../../selectors/Selectors'
import MessagesList from './MessagesList'


class Messages extends Component {

 componentDidMount () {

   const { id, token, pullMessages, addMessage } = this.props
   this.client = pullMessages(id, token, 5000)
   this.client.start( newMessages => { newMessages.forEach(addMessage) } )

  }

  componentWillUnmount () {

    this.client.stop()

  }

  render () {

    const { messages, loading_msg, loading_msg_err } = this.props

    return (
      <div>
        {loading_msg && <div> Loading Messages... </div>}
        {!!loading_msg_err && <div> Loading Messages Error: {loading_msg_err} </div>}
        <MessagesList messages={messages}/>
      </div>

    )

  }

}


const mapStateToProps = state => ({
  token: getStateToken(state),
  id: getStateChannel(state),
  messages: getStateMessages(state),
  loading_msg: getLoadingMsg(state),
  loading_msg_err: getLoadingMsgError(state)
})

const mapDispatchToProps = {pullMessages, addMessage}


export default connect(mapStateToProps, mapDispatchToProps)(Messages)
