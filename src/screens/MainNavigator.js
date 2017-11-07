import { StackNavigator } from 'react-navigation'
import GuestIndex from './guest/Index'
import Login from './guest/Login'
import AuthNavigator from './auth/AuthNavigator'

export default StackNavigator({
  GuestIndex: { screen: GuestIndex },
  Login: { screen: Login },
  Auth: { screen: AuthNavigator },
})