import React, { Component } from 'react'
import {connect} from 'react-redux'
import {SubmissionError} from 'redux-form'
import MessageForm from './MessageForm'
import { postMessage } from '../../actions/Actions'
import {getStateToken, getStateChannel} from '../../selectors/Selectors'

class MessagePage extends Component {

  Submit = (values, dispatch, props) => {

    console.log('Message Page',values)

    const {id, token, postMessage} = this.props

    dispatch(postMessage(id, token, values)).catch(
      err => {throw new SubmissionError({_error:err.message})}
    )

  }

  render () {

    return <MessageForm onSubmit={this.Submit} />

  }
}



const mapStateToProps = state => ({
  token: getStateToken(state),
  id: getStateChannel(state)
})

const mapDispatchToProps = {postMessage}

export default connect(mapStateToProps, mapDispatchToProps)(MessagePage)
