import React from 'react'
import {View} from 'react-native'

export default function mainView ({ children }) {
  return <View style={{ flex: 1, backgroundColor: 'white' }}>
    {children}
  </View>
}