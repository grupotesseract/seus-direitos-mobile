import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, View, ImageBackground } from 'react-native'
import SeuSindicato from '../../components/seu-sindicato'
import MainView from '../../components/main'
import { Button, Text } from 'native-base'
import {WebBrowser} from 'expo'
import { withNavigation } from 'react-navigation'

const styles = StyleSheet.create({
    mtCinco: {
        marginTop: 5,
    },
    mtDez: {
        marginTop: 10,
    },
    mt25: {
        marginTop: 25
    },
    mb: {
        marginBottom: 12
    },
    bordered: {
        width: '100%',
        display: 'flex',
        paddingHorizontal: 60
    },
    paddingH: {
        paddingHorizontal: 16,
        width: '100%',
        display: 'flex',
        paddingHorizontal: 30
    },
    alignedCenter: {
        alignItems: 'center'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        height: '100%',
        width: '100%'
    },
    textStyle: {
        fontFamily: 'niramid-medium',
        fontSize: 18
    },
    textLittle: {
        fontSize: 14
    },
    textBold: {
        fontWeight: 'bold'
    },
    textColored: {
        backgroundColor: '#E43B10',
        color: '#FFE063',
        width: 'auto'
    },
    textBlueList: {
        color: '#0195C5',
    },
    bluePreBtn: {
        backgroundColor: '#0195C5',
        color: '#fff',
        fontFamily: 'niramid-medium',
        width: '100%',
        textTransform: 'lowercase',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
        paddingVertical: 5
    }
})

class PreLogin extends React.Component {
    constructor(props) {
        super(props);

        this.handleGoToLogin = this.handleGoToLogin.bind(this);
    }

    handleGoToLogin() {
        return this.props.navigation.navigate('GuestLogin')
    }

    render () {
        return (
            <MainView style={{ flex: 1 }} extraScroll={5}>
                <ImageBackground style={styles.container} imageStyle={{resizeMode: 'stretch'}} source={require('../../../assets/img/LoginBG.jpg')}>
                    <View style={styles.bordered}>
                        <SeuSindicato noMargin />
                    </View>

                    <View style={[styles.bordered]}>
                        <Text style={[styles.textStyle, styles.textBold]}>Todas as informações sobre</Text>
                        <Text style={[styles.textColored, styles.textStyle, styles.textBold]}>sua categoria de trabalho,</Text>
                        <Text style={[styles.textStyle, styles.textBold]}>em um mesmo lugar</Text>
                    </View>

                    <View style={[styles.bordered, styles.mt25]}>
                        <Text style={[styles.textStyle, styles.textBlueList, styles.textBold]}>LEIA NOTÍCIA</Text>
                        <Text style={[styles.textStyle, styles.textBlueList, styles.textBold]}>CONHEÇA BENEFÍCIOS</Text>
                        <Text style={[styles.textStyle, styles.textBlueList, styles.textBold]}>FALE COM REPRESENTANTES DA SUA CATEGORIA</Text>
                        <Text style={[styles.textStyle, styles.textBlueList, styles.textBold]}>UTILIZE A CARTEIRINHA VIRTUAL</Text>
                    </View>

                    <View style={[styles.bordered, styles.mt25, styles.alignedCenter]}>
                        <Text style={[styles.textStyle, styles.textLittle]}>Ja é cadastrado?</Text>
                        <Text onPress={this.handleGoToLogin} style={[styles.bluePreBtn, styles.textStyle]}> { 'entrar'.toLowerCase() } </Text>

                        <Text style={[styles.textStyle, styles.textLittle, styles.mtCinco]}>Ainda não é cadastrado?</Text>
                        <Text style={[styles.textStyle, styles.textLittle]}>Solicite o seu acesso:</Text>
                        <Text style={[styles.textStyle, styles.mtCinco, styles.textBlueList]}>canalseusdireitos@gmail.com</Text>
                        <Text style={[styles.textStyle, styles.textBlueList]}>14 99137-0503</Text>
                    </View>
                </ImageBackground>
            </MainView>
        )
    }
}

PreLogin.navigationOptions = {
  header: null,
}

export default connect(null)(withNavigation(PreLogin))
