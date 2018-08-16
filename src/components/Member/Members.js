import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMembers} from '../../actions/Actions'
import { getStateToken, getStateChannel, getStateMembers, getLoadingMmb, getLoadingMmbError } from '../../selectors/Selectors'
import MembersList from './MembersList'

class Members extends Component {

 componentDidMount () {

    const { id, token, getMembers } = this.props

    console.log(' getMembers id',id,'token',token)

    getMembers(id,token)

    /*
    this.client = pullMembers(id,token, 5000)
    this.client.start( newMembers => { newMembers.forEach(addMember) } )
    */

  }

  componentWillUnmount () {

/*
    this.client.stop()
*/

  }

  render () {

    const { loading_mmb, loading_mmb_err, members } = this.props

    return (
      <div>
        {loading_mmb && <div> Loading Members... </div>}
        {!!loading_mmb_err && <div> Loading Members Error: {loading_mmb_err} </div>}
        {members.length > 0 ? <MembersList members={members}/> : <div></div>}
      </div>

    )
  }

}


const mapStateToProps = state => ({
  token: getStateToken(state),
  id: getStateChannel(state),
  members: getStateMembers(state),
  loading_mmb: getLoadingMmb(state),
  loading_mbm_err: getLoadingMmbError(state)
})

const mapDispatchToProps = {getMembers}

export default connect(mapStateToProps, mapDispatchToProps)(Members)
