import { StackNavigator } from 'react-navigation'
import GuestIndex from './guest/Index'
import AuthNavigator from './auth/AuthNavigator'

export default StackNavigator({
  GuestIndex: { screen: GuestIndex },
  Auth: { screen: AuthNavigator },
})