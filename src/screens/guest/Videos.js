import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { Button, Text, H2 } from 'native-base'
import SeusDireitos from '../../components/seus-direitos'
import Title from '../../components/title'
import GuestRegister from "./Register";

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({

})

class Videos extends React.Component {
  render () {

    return (
      <View style={{ flex: 1, backgroundColor: 'white',  alignItems: 'center', flexDirection: 'column' }}>
        <View style={{ height: 200, margin: 50, alignItems: 'center', justifyContent: 'center' }}>
          <SeusDireitos />
        </View>
        <View style={{alignItems: 'center', padding: 24, flex: 1, flexDirection: 'column', justifyContent: 'space-around', backgroundColor: '#fafafa', width: '100%' }}>
          <FlatList

            />
        </View>
      </View>
    )
  }
}

Videos.navigationOptions = {
  title: "Lista de Vídeos",
  headerMode: 'screen',
  headerStyle: {
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: '#6198D8',
    borderBottomWidth: 0,
  },
  headerTintColor: 'white',
}

export default Videos