import React, {Component} from 'react'
import { connect } from 'react-redux'
import { pullUsers } from '../../actions/Actions'
import { addUser} from '../../actions/Actions'
import { getStateToken, getStateUsers, getLoadingUsr, getLoadingUsrError } from '../../selectors/Selectors'
import UsersList from './UsersList'

class Users extends Component {

 componentDidMount () {

    const { token, pullUsers, addUsers } = this.props
    this.client = pullUsers(token, 5000)
    this.client.start( newUsers => { newUsers.forEach(addUser) } )

  }

  componentWillUnmount () {

    this.client.stop()

  }

  render () {

    const { loading_usr, loading_usr_err, users } = this.props

    return (
      <div>
        {loading_usr && <div> Loading Users... </div>}
        {!!loading_usr_err && <div> Loading Users Error: {loading_usr_err} </div>}
        <UsersList users={users}/>
      </div>

    )

  }

}


const mapStateToProps = state => ({
  token: getStateToken(state),
  users: getStateUsers(state),
  loading_usr: getLoadingUsr(state),
  loading_usr_err: getLoadingUsrError(state)
})

const mapDispatchToProps = {pullUsers, addUser}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
