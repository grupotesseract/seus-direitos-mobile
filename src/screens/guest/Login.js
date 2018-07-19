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
    marginBottom: 12
  },
  bordered: {
    margin: 16,
  },
  paddingH: {
    paddingHorizontal: 16
  },
  consultarClt: {
    fontSize: 16,
    fontFamily: 'roboto-medium',
    textAlign: 'center',
    color: '#D86161',
    width: '100%'
  },
  verVideos: {
    fontSize: 16,
    fontFamily: 'roboto-medium',
    textAlign: 'center',
    color: '#fff',
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
  handleSubmit = (values) => this.props.login(values)
  handleSubmitSuccess = (result, dispatch, props) => {
    props.destroy()
    this.props.navigation.navigate('MemberIndex')
  }
  handleGoToVideos = () => this.props.navigation.navigate('GuestWizardNext')
  handleRegister = () => this.props.navigation.navigate('GuestRegister')
  handleClickClt = () => WebBrowser.openBrowserAsync('https://www.empregasaopaulo.sp.gov.br/IMO/aprendiz/pdf/CLT%20-%20Consolidacao%20das%20Leis%20Trabalhistas.pdf')

  render () {
    return (
      <MainView extraScroll={5}>
        <View style={styles.bordered}>
          <SeuSindicato noMargin />

          <LoginForm
            onSubmit={this.handleSubmit}
            onSubmitSuccess={this.handleSubmitSuccess}
          />
        </View>

        <View style={[styles.paddingH, styles.mb]}>
          <Button
            onPress={this.handleGoToVideos}
            style={styles.mb}
          >
            <Text style={styles.verVideos}>VOLTAR PARA SEUS DIREITOS</Text>
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