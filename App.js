import React from 'react'
import { Font } from 'expo'
import { Provider } from 'react-redux'
import {StatusBar, View, StyleSheet} from 'react-native'
import createStore from './src/utils/store'
import MainNavigator from './src/screens/MainNavigator'
import {STATUS_BAR_HEIGHT} from './src/utils/constants'

const store = createStore()

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    loaded: false
  }

  async componentWillMount() {
    await Font.loadAsync({
      'roboto': require('./assets/fonts/Roboto.ttf'),
      'roboto-medium': require('./assets/fonts/Roboto_medium.ttf'),
      'roboto-mono-bold': require('./assets/fonts/Roboto_Mono_Bold.ttf'),
    })

    this.setState({ loaded: true });
  }

  render () {
    const {loaded} = this.state

    if (!loaded) return null

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <CustomStatusBar barStyle="light-content" backgroundColor="#3F51B5" translucent  />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}

