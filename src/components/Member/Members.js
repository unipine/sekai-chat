import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pullMembers } from '../../actions/Actions'
import { addMember} from '../../actions/Actions'
import { getStateToken, getStateChannel, getStateMembers, getLoadingMmb, getLoadingMmbError } from '../../selectors/Selectors'
import MembersList from './MembersList'

class Members extends Component {

 componentDidMount () {

    const { id, token, pullMembers, addMember } = this.props
    this.client = pullMembers(id,token, 5000)
    this.client.start( newMembers => { newMembers.forEach(addMember) } )

  }

  componentWillUnmount () {

    this.client.stop()

  }

  render () {

    const { loading_mmb, loading_mmb_err, members } = this.props

    return (
      <div>
        {loading_mmb && <div> Loading Members... </div>}
        {!!loading_mmb_err && <div> Loading Members Error: {loading_mmb_err} </div>}
        <MembersList members={members}/>
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

const mapDispatchToProps = {pullMembers, addMember}

export default connect(mapStateToProps, mapDispatchToProps)(Members)
