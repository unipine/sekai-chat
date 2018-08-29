import { connect } from 'react-redux'
import Logout from '../components/Login/Logout'
import { logout } from '../actions/Actions'

const mapDispatchToProps = { logout }

export default connect(null, mapDispatchToProps)(Logout)
