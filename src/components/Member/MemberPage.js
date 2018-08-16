import React, { Component } from 'react'
import { SubmissionError } from 'redux-form'
import MemberForm from './MemberForm'
import { postMember } from '../../actions/Actions'

class MemberPage extends Component {

  Submit = (values,dispatch,props) => {

    console.log('Member Page',values)

    dispatch(postMember(values)).catch(err => {throw new SubmissionError({_error:err.message})})

  }

  render () {
    return <MemberForm onSubmit={this.Submit} />
  }

}

export default MemberPage
