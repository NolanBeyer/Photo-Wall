import App from '../App'
import { connect } from 'react-redux'
function mapStateToProps(state) {
  return {
    posts: state,
  }
}

const Main = connect(mapStateToProps)(App)

export default Main
