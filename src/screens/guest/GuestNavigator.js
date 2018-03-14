import { StackNavigator } from 'react-navigation'
import GuestWizard from './Wizard'
import GuestWizardNext from './WizardNext'
import GuestLogin from './Login'
import GuestRegister from './Register'
import GuestVideos from './Videos'

export default StackNavigator({
  GuestLogin: { screen: GuestLogin },
  GuestWizard: { screen: GuestWizard },
  GuestWizardNext: { screen: GuestWizardNext },
  GuestRegister: { screen: GuestRegister },
  GuestVideos: { screen: GuestVideos },
})