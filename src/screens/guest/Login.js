import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, View } from 'react-native'
import SeuSindicato from '../../components/seu-sindicato'
import MainView from '../../components/main'
import LoginForm from '../../components/login-form'
import { Button, Text } from 'native-base'
import {login} from '../../thunks/auth'
import {WebBrowser} from 'expo'
import { withNavigation } from 'react-navigation'

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
    marginVertical: 24,
    textAlign: 'center',
    color: '#6198D8',
    width: '100%'
  },
  verVideos: {
    fontSize: 16,
    fontFamily: 'roboto-medium',
    marginVertical: 16,
    textAlign: 'center',
    color: '#D86161',
    width: '100%'
  },
  register: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    marginTop: 10
  },
})

class GuestLogin extends React.Component {
  handleSubmit = (values) => this.props.login(values, this.props.navigation)
  handleGoToVideos = () => this.props.navigation.navigate('GuestVideos')
  handleRegister = () => this.props.navigation.navigate('GuestRegister')
  handleClickClt = () => WebBrowser.openBrowserAsync('https://www.empregasaopaulo.sp.gov.br/IMO/aprendiz/pdf/CLT%20-%20Consolidacao%20das%20Leis%20Trabalhistas.pdf')

  render () {
    return (
      <MainView extraScroll={5}>
        <View style={styles.bordered}>
          <SeuSindicato noMargin />

          <View style={[styles.paddingH]}>
            <View style={styles.register}>
              <Text style={{ alignSelf: 'center' }}>Não possui uma conta?</Text>
              <Button transparent style={{ width: 100, alignSelf: 'center' }} onPress={this.handleRegister}>
                <Text style={{ fontFamily: 'roboto-medium', color: '#020F50', paddingLeft: 5, paddingRight: 0 }}>Cadastre-se!</Text>
              </Button>
            </View>
          </View>

          <LoginForm onSubmit={this.handleSubmit} />
        </View>

        <View style={[styles.paddingH, styles.mb]}>
          <Button
            transparent
            onPress={this.handleGoToVideos}
          >
            <Text style={styles.verVideos}>VER TODOS OS VIDEOS</Text>
          </Button>

          <Button
            transparent
            onPress={this.handleClickClt}
          >
            <Text style={styles.consultarClt}>CONSULTAR CLT</Text>
          </Button>
        </View>
      </MainView>
    )
  }
}

GuestLogin.navigationOptions = {
  header: null,
}

export default connect(null, {login})(withNavigation(GuestLogin))