import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { Header } from 'react-native-elements'
import { STATUS_BAR_HEIGHT, SECONDARY_COLOR } from '../../utils/constants';
import { Video, Constants } from 'expo';
import Test from './test'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
})

export default class GuestIndex extends React.Component {
  static navigationOptions = () => ({
    title: 'Seus Direitos',
    headerStyle: {
      height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
      backgroundColor: '#fff',
      borderBottomColor: SECONDARY_COLOR
    },
    headerTitleStyle: {
      marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
      color: SECONDARY_COLOR
    },
  });

  render () {
    return (
      <View style={styles.container}>
        <Test />
        <Header
          centerComponent={{ text: 'Seus Direitos' }}
        />
        <View style={styles.container}>
          <Video
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
            rate={1.0}
            volume={1.0}
            muted={false}
            resizeMode="cover"
            style={{ width: 300, height: 300 }}
          />
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </View>
    )
  }
}

