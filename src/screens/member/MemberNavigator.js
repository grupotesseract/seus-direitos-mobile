import { StackNavigator } from 'react-navigation'
import MemberIndex from './Index'
import MemberSindicalAuthorization from './MemberSindicalAuthorization'

export default StackNavigator({
  MemberIndex: { screen: MemberIndex },
  MemberSindicalAuthorization: { screen: MemberSindicalAuthorization },
})