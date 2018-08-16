import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pullChannels } from '../../actions/Actions'
import { addChannel, getChannels } from '../../actions/Actions'
import { getStateToken, getStateChannels, getLoadingChn, getLoadingChnError } from '../../selectors/Selectors'
import ChannelsList from './ChannelsList'

class Channels extends Component {

 componentDidMount () {

    const { token, getChannels } = this.props

    getChannels(token);

/*
    this.client = pullChannels(token, 1000)
    this.client.start( newChannels => { newChannels.forEach(addChannel) })
*/
  }

  componentWillUnmount () {

/*    this.client.stop()
*/
  }


  render () {

    const { loading_chn, loading_chn_err, channels } = this.props

    return (
      <div>
        {loading_chn && <div> Loading Channels... </div>}
        {!!loading_chn_err && <div> Loading Channels Error: {loading_chn_err} </div>}
        {channels.length > 0 ? <ChannelsList channels={channels}/> : <div></div>}
      </div>

    )
  }

}


const mapStateToProps = state => ({
  token: getStateToken(state),
  channels: getStateChannels(state),
  loading_chn: getLoadingChn(state),
  loading_chn_err: getLoadingChnError(state)
})

const mapDispatchToProps = {getChannels}

export default connect(mapStateToProps, mapDispatchToProps)(Channels)
