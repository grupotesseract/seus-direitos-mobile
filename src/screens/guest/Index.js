import React from 'react'
import { StyleSheet, View } from 'react-native'
import SeusDireitos from '../../components/seus-direitos'
import Title from '../../components/title'
import Video from '../../components/video'
import MainView from '../../components/main'
import LoginForm from '../../components/login-form'
import { Container, Content, Button, Text } from 'native-base'
import {stopSubmit, SubmissionError} from 'redux-form'
import {validateCredentials} from '../../api/auth'
import {AUTH_FAILED} from '../../actions/types'

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
  },
  errorBox: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 20,
    paddingVertical: 12
  },
  errorText: {
    color: '#721C2A',
  }
})

class guestIndex extends React.Component {
  state = {
    error: null
  }

  handleSubmit = (values, dispatch) => {
    return validateCredentials(values)
      .then(res => {
        if (!res.data.success) {
          throw new Error()
        }

        return this.props.navigation.navigate('Auth')
      })
      .catch(err => {
        dispatch({ type: AUTH_FAILED })
        return this.setState({ error: "E-mail e/ou Senha inválido(s)." })
      })
  }

  handleRegister = () => this.props.navigation.navigate('GuestRegister')

  render () {
    const {error} = this.state
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
                <Button transparent style={{ height: 30 }} onPress={this.handleRegister}>
                  <Text style={{ paddingLeft: 5 }}>Cadastre-se!</Text>
                </Button>
              </View>
              { !!error &&
                <View style={styles.errorBox}>
                  <Text style={styles.errorText}>{error}</Text>
                </View>
              }
              <LoginForm  onSubmit={this.handleSubmit} onChange={() => this.setState({ error: null })} />
            </View>
          </View>

          <View style={[styles.paddingH, styles.mb]}>
            <Button
              block
              rounded
              primary
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text style={styles.white}>CONSULTAR CLT</Text>
            </Button>
          </View>
        </Content>
      </MainView>
    )
  }
}

guestIndex.navigationOptions = {
  header: null,
}

export default guestIndex