import { StackNavigator } from 'react-navigation'
import GuestNavigator from './guest/GuestNavigator'
import AuthNavigator from './auth/AuthNavigator'

export default StackNavigator({
  Guest: { screen: GuestNavigator },
  Auth: { screen: AuthNavigator },
}, { headerMode: 'none' })