import React from 'react'
import { StyleSheet, View } from 'react-native'
import SeuSindicato from '../../components/seu-sindicato'
import Video from '../../components/video'
import MainView from '../../components/main'
import LoginForm from '../../components/login-form'
import { Container, Content, Button, Text } from 'native-base'
import {validateCredentials} from '../../api/auth'
import {AUTH_FAILED} from '../../actions/types'
import {WebBrowser} from 'expo'

const styles = StyleSheet.create({
  mt: {
    marginTop: 16,
  },
  mb: {
    marginBottom: 16
  },
  bordered: {
    padding: 16,
    margin: 16,
  },
  paddingH: {
    paddingHorizontal: 16
  },
  consultarClt: {
    fontSize: 16,
    fontFamily: 'roboto-medium',
    marginVertical: 16,
    textAlign: 'center',
    color: '#6198D8'
  },
  verVideos: {
    fontSize: 16,
    fontFamily: 'roboto-medium',
    marginVertical: 16,
    textAlign: 'center',
    color: '#D86161'
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
  register: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    marginTop: 10
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
      <MainView extraScroll={5}>
        <View style={styles.bordered}>
          <SeuSindicato noMargin />

          <View style={[styles.paddingH]}>
            <View style={styles.register}>
              <Text style={{ alignSelf: 'center' }}>Não possui uma conta?</Text>
              <Button transparent style={{ width: 100, alignSelf: 'center' }} onPress={this.handleRegister}>
                <Text style={{ color: '#020F50', paddingLeft: 5, paddingRight: 0 }}>Cadastre-se!</Text>
              </Button>
            </View>
            { !!error &&
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>{error}</Text>
              </View>
            }
          </View>

          <LoginForm  onSubmit={this.handleSubmit} onChange={() => this.setState({ error: null })} />
        </View>

        <View style={[styles.paddingH, styles.mb]}>
          <Text
            style={styles.verVideos}
          >
            VER TODOS OS VIDEOS
          </Text>

          <Text
            style={styles.consultarClt}
            onPress={() => WebBrowser.openBrowserAsync('https://www.empregasaopaulo.sp.gov.br/IMO/aprendiz/pdf/CLT%20-%20Consolidacao%20das%20Leis%20Trabalhistas.pdf')}
          >
            CONSULTAR CLT
          </Text>
        </View>
      </MainView>
    )
  }
}

guestIndex.navigationOptions = {
  header: null,
}

export default guestIndex