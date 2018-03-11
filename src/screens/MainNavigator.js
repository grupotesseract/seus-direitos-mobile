import { StackNavigator } from 'react-navigation'
import GuestNavigator from './guest/GuestNavigator'
import MemberNavigator from './member/MemberNavigator'

export default ({ loggedIn = false }) => StackNavigator({
  GuestNavigator: { screen: GuestNavigator },
  MemberNavigator: { screen: MemberNavigator },
}, {
  headerMode: 'none',
  initialRouteName : loggedIn ? 'MemberNavigator' : 'GuestNavigator'
})