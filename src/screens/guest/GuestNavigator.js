import { StackNavigator } from 'react-navigation'
import GuestWizard from './Wizard'
import GuestWizardNext from './WizardNext'
import GuestLogin from './Login'
import GuestRegister from './Register'
import GuestVideos from './Videos'
import MemberNavigator from '../member/MemberNavigator'

export default ({ loggedIn = false }) => StackNavigator({
  GuestWizard: { screen: loggedIn ? GuestWizardNext : GuestWizard },
  GuestWizardNext: { screen: GuestWizardNext },
  GuestLogin: { screen: GuestLogin },
  GuestRegister: { screen: GuestRegister },
  GuestVideos: { screen: GuestVideos },
  MemberNavigator: { screen: MemberNavigator },
})