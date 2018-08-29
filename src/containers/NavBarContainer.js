import { connect } from 'react-redux'
import { isAuthenticated } from '../selectors/Selectors'
import Navbar from '../components/NavBar/NavBar'

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state)
})

export default connect(mapStateToProps)(Navbar)
