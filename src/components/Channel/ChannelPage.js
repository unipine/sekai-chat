import React, {Component} from 'react'
import {connect} from 'react-redux'
import {SubmissionError} from 'redux-form'
import ChannelForm from './ChannelForm'
import {postChannel, getChannels} from '../../actions/Actions'
import {getStateToken} from '../../selectors/Selectors'


class ChannelPage extends Component {

  Submit = (values, dispatch, props) => {

    const {token, getChannels} = this.props

    dispatch(postChannel(values,token)).catch(
      err => {throw new SubmissionError({_error:err.message})}
    ).then(
      getChannels(token)
    )

  }

  render () {

    return <ChannelForm onSubmit={this.Submit} />

  }

}


const mapStateToProps = state => ({
  token: getStateToken(state)
})

const mapDispatchToProps = {
  getChannels
}
export default connect(mapStateToProps, mapDispatchToProps)(ChannelPage)
