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
  <View style={[styles.statusBar, { backgroundColor: '#3F51B5' }]}>
    <StatusBar barStyle="light-content" translucent backgroundColor="#3F51B5" {...props} />
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
          'niramid-regular': require('./assets/fonts/Niramit-Regular.ttf'),
          'niramid-medium': require('./assets/fonts/Niramit-Medium.ttf'),
          'niramid-bold': require('./assets/fonts/Niramit-Bold.ttf'),
      })

      const userResponse = await getCurrentUser()
      const videoResponse = await getFeaturedVideo()

      this.setState({
          currentUser: userResponse.email ? userResponse : null,
          featuredVideo: videoResponse.data ? videoResponse.data : null,
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
                      <CustomStatusBar  />
                      <RenderedMainNavigator />
                  </Root>
              </StyleProvider>
          </Provider>
      )
  }
}
