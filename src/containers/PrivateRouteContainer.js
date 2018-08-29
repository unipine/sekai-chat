import { connect } from 'react-redux'
import PrivateRoute from '../components/PrivateRoute'
import { isAuthenticated } from '../selectors/Selectors'

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state)
})

export default connect(mapStateToProps)(PrivateRoute)
