import { StackNavigator } from 'react-navigation'
import AuthIndex from './Index'
import AuthSindicalAuthorization from './AuthSindicalAuthorization'

export default StackNavigator({
  AuthIndex: { screen: AuthIndex },
  AuthSindicalAuthorization: { screen: AuthSindicalAuthorization },
}, {
  headerMode: 'none',
})