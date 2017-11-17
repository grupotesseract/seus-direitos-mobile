import { StackNavigator } from 'react-navigation'
import GuestIndex from './guest/Index'
import GuestRegister from './guest/Register'
import AuthNavigator from './auth/AuthNavigator'

export default StackNavigator({
  GuestIndex: { screen: GuestIndex },
  GuestRegister: { screen: GuestRegister },
  Auth: { screen: AuthNavigator },
})