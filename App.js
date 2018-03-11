import React from 'react'
import { Font, AppLoading} from 'expo'
import { Provider } from 'react-redux'
import {StatusBar, View, StyleSheet} from 'react-native'
import createStore from './src/utils/store'
import MainNavigator from './src/screens/MainNavigator'
import {STATUS_BAR_HEIGHT} from './src/utils/constants'
import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'
import { StyleProvider, Root } from 'native-base'
import {getCurrentUser} from "./src/api/auth"

const styles = StyleSheet.create({
  statusBar: {
    height: STATUS_BAR_HEIGHT,
  }
})

const CustomStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)

export default class App extends React.Component {
  state = {
    isReady: false,
    error: null,
    currentUser: null
  }

  async componentWillMount () {
    await Font.loadAsync({
      'roboto': require('./assets/fonts/Roboto.ttf'),
      'roboto-medium': require('./assets/fonts/Roboto_medium.ttf'),
      'roboto-mono-bold': require('./assets/fonts/Roboto_Mono_Bold.ttf'),
    })

    const response = await getCurrentUser()
    const currentUser = {
      success: true,
      name: 'teste@teste.com',
      accepted: true,
      access_token: 'ba@m234iom5io3m234234asd25ymio4ym'
    }

    return this.setState({
      // currentUser: response.data ? response.data : null,
      currentUser: null,
      // currentUser,
      isReady: true,
    })
  }

  render () {
    const {isReady, currentUser} = this.state

    if (!isReady) return <AppLoading />

    const store = !currentUser ? createStore() : createStore({
      auth: { current: currentUser }
    })

    const RenderedMainNavigator = MainNavigator({ loggedIn: Boolean(currentUser) })

    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(material)}>
          <Root>
            <CustomStatusBar barStyle="light-content" backgroundColor="#3F51B5" translucent />
            <RenderedMainNavigator />
          </Root>
        </StyleProvider>
      </Provider>
    )
  }
}
