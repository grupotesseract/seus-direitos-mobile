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
import {getFeaturedVideo} from "./src/api/video";

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
    currentUser: null,
    featuredVideo: null,
  }

  async componentDidMount () {
    await Font.loadAsync({
      'roboto': require('./assets/fonts/Roboto.ttf'),
      'roboto-medium': require('./assets/fonts/Roboto_medium.ttf'),
      'roboto-mono-bold': require('./assets/fonts/Roboto_Mono_Bold.ttf'),
    })

    const userResponse = await getCurrentUser()
    console.log(userResponse)
    const videoResponse = await getFeaturedVideo()

    return this.setState({
      currentUser: userResponse ? userResponse : null,
      featuredVideo: videoResponse.data ? videoResponse.data[0] : null,
      isReady: true,
    })
  }

  render () {
    const {isReady, currentUser, featuredVideo} = this.state

    if (!isReady) return <AppLoading />

    const store = createStore({
      auth: { current: currentUser },
      video: {
        list: {
          data: [],
          fetching: false,
          error: null,
          hasMore: true,
        },
        featured: featuredVideo
      }
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
