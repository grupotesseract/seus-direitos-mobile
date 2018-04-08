import { StackNavigator } from 'react-navigation'
import GuestWizard from './guest/Wizard'
import GuestWizardNext from './guest/WizardNext'
import GuestLogin from './guest/Login'
import GuestRegister from './guest/Register'
import GuestVideos from './guest/Videos'
import MemberNavigator from './member/MemberNavigator'

export default ({ loggedIn = false }) => StackNavigator({
  GuestWizard: { screen: GuestWizard },
  GuestWizardNext: { screen: GuestWizardNext },
  GuestLogin: { screen: GuestLogin },
  GuestRegister: { screen: GuestRegister },
  GuestVideos: { screen: GuestVideos },
  MemberNavigator: { screen: MemberNavigator },
}, {
  headerMode: 'none',
  initialRouteName: loggedIn ? 'GuestWizardNext' : 'GuestWizard'
})