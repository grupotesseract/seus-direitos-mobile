import React from 'react'
import { StyleSheet, View } from 'react-native'
import SeusDireitos from '../../components/seus-direitos'
import Title from '../../components/title'
import Video from '../../components/video'
import MainView from '../../components/main'
import { Container, Content, Button, Text } from 'native-base';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: 10,
  },
  mt: {
    marginTop: 10
  },
  paddingH: {
    paddingHorizontal: 16
  },
  white: {
    color: 'white'
  }
})

function GuestIndex (props) {
  return (
    <MainView>
      <SeusDireitos />

      <View>
        <Title align="center" text="Não conhece nossa missão?" />
        <Title align="center" text="Veja nosso vídeo de apresentação" />
      </View>

      <View style={styles.mt}>
        <Video uri='http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' />
      </View>

      <View style={styles.paddingH}>
        <Button
          full
          bordered
          style={{ marginVertical: 16 }}
        >
          <Text>QUERO ME CADASTRAR</Text>
        </Button>

        <Button
          full
          primary
          onPress={() => props.navigation.navigate('Login')}
        >
          <Text style={styles.white}>ACESSAR MINHA CONTA</Text>
        </Button>
      </View>
    </MainView>
  )
}

GuestIndex.navigationOptions = {
  header: null,
}

export default GuestIndex