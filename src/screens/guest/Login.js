import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, View, ImageBackground } from 'react-native'
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
        width: '100%',
        display: 'flex',
        paddingHorizontal: 30
    },
    paddingH: {
        paddingHorizontal: 16,
        width: '100%',
        display: 'flex',
        paddingHorizontal: 30
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
        fontFamily: 'niramid-medium',
        textAlign: 'center',
        color: '#fff',
        width: '100%',
        display: 'flex',
        paddingHorizontal: 30
    },
    register: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        marginTop: 10
    },
    backLogin: {
        backgroundColor: '#F9B208'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        height: '100%',
        width: '100%'
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
            <MainView style={{ flex: 1 }} extraScroll={5}>
                <ImageBackground style={styles.container} imageStyle={{resizeMode: 'stretch'}} source={require('../../../assets/img/LoginBG.jpg')}>
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
                            style={styles.mb, styles.backLogin}
                            >
                            <Text style={styles.verVideos}>voltar para seus direitos</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </MainView>
        )
    }
}

GuestLogin.navigationOptions = {
  header: null,
}

export default connect(null, {login})(withNavigation(GuestLogin))
