import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const name = Cookies.get('user_name')

  if (name === undefined) {
    return <Redirect to="/pass" />
  }

  return <Route {...props} />
}

export default ProtectedRoute