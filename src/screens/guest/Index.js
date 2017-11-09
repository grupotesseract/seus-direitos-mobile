import React from 'react'
import { StyleSheet, View } from 'react-native'
import SeusDireitos from '../../components/seus-direitos'
import Title from '../../components/title'
import Video from '../../components/video'
import MainView from '../../components/main'
import LoginForm from '../../components/login-form'
import { Container, Content, Button, Text } from 'native-base';

const styles = StyleSheet.create({
  mt: {
    marginTop: 10,
  },
  mb: {
    marginBottom: 16
  },
  bordered: {
    padding: 16,
    margin: 16,
    borderRadius: 8,
    borderColor:'#ccc',
    borderWidth: 1,
  },
  paddingH: {
    paddingHorizontal: 16
  },
  white: {
    color: 'white'
  }
})

function guestIndex (props) {
  const handleSubmit = values => {
    props.navigation.navigate('Auth')
  }

  return (
    <MainView>
      <Content>
        <View style={styles.mt}>
          <Title align="center" text="Não conhece nossa missão?" />
          <Title align="center" text="Veja nosso vídeo de apresentação"  gutterBottom />
          <Video uri='http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' />
        </View>

        <View style={styles.bordered}>
          <SeusDireitos noMargin />

          <View style={[styles.paddingH, styles.mt]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>
                Não possui uma conta?
              </Text>
              <Button transparent style={{ height: 30 }} onPress={() => props.navigation.navigate('Auth')}>
                <Text style={{ paddingLeft: 5 }}>Cadastre-se!</Text>
              </Button>
            </View>

            <LoginForm  onSubmit={handleSubmit} />
          </View>
        </View>

        <View style={[styles.paddingH, styles.mb]}>
          <Button
            block
            rounded
            primary
            onPress={() => props.navigation.navigate('Login')}
          >
            <Text style={styles.white}>CONSULTAR CLT</Text>
          </Button>
        </View>
      </Content>
    </MainView>
  )
}

guestIndex.navigationOptions = {
  header: null,
}

export default guestIndex