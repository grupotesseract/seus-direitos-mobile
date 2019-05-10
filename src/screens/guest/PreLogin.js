import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, View, ImageBackground } from 'react-native'
import SeuSindicato from '../../components/seu-sindicato'
import MainView from '../../components/main'
import { Button, Text } from 'native-base'
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
        width: '100%',
        paddingHorizontal: 30
    },
    texted: {
        fontFamily: 'Niramit',
        fontSize: 16
    }
})

class PreLogin extends React.Component {

    render () {
        return (
            <MainView style={{ flex: 1 }} extraScroll={5}>
                <ImageBackground style={styles.container} imageStyle={{resizeMode: 'stretch'}} source={require('../../../assets/img/LoginBG.jpg')}>
                    <View style={styles.bordered}>
                        <SeuSindicato noMargin />
                    </View>

                    <View style={[styles.bordered, styles.texted]}>
                        <Text>Todas as informações sobre</Text>
                        <Text style={{ backgroundColor: '#E43B10', color: '#FFE063' }}>sua categoria de trabalho,</Text>
                        <Text>em um mesmo lugar</Text>
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
