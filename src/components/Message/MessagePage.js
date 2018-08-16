import React, { Component } from 'react'
import { SubmissionError } from 'redux-form'
import MessageForm from './MessageForm'
import { postMessage } from '../../actions/Actions'

class MessagePage extends Component {

  Submit = (values, dispatch, props) => {

    console.log('Message Page',values)

    dispatch(postMessage(values)).catch(err => {throw new SubmissionError({_error:err.message})})

  }

  render () {

    return <MessageForm onSubmit={this.Submit} />

  }
}

export default MessagePage
