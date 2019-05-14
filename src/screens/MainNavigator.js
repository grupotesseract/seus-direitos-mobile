import { createStackNavigator, createAppContainer } from 'react-navigation'
import GuestWizard from './guest/Wizard'
import GuestWizardNext from './guest/WizardNext'
import GuestLogin from './guest/Login'
import PreLogin from './guest/PreLogin'
import GuestRegister from './guest/Register'
import GuestVideos from './guest/Videos'
import MemberSindicalAuthorization from './member/MemberSindicalAuthorization'
import MemberIndex from './member/Index'

export default ({ loggedIn = false }) => createAppContainer(
    createStackNavigator ({
      GuestWizard: { screen: GuestWizard },
      GuestWizardNext: { screen: GuestWizardNext },
      GuestLogin: { screen: GuestLogin },
      PreLogin: { screen: PreLogin }
      GuestRegister: { screen: GuestRegister },
      GuestVideos: { screen: GuestVideos },
      MemberIndex: { screen: MemberIndex },
      MemberSindicalAuthorization: { screen: MemberSindicalAuthorization },
    }, {
      initialRouteName: loggedIn ? 'GuestWizardNext' : 'GuestWizard'
    })
)
