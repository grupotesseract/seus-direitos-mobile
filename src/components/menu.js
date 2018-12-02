import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, Platform, TouchableHighlight } from 'react-native'
import { Container, Content, Drawer, Header, Button } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import {WebBrowser} from 'expo'

const styles = StyleSheet.create({
    img: {
        width: 150,
        resizeMode: Image.resizeMode.contain,
        display: 'flex'
    },
    container: {
        width: '100%'
    },
    sidebarContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

class SideBar extends Component {
    handleGoToVideos () {
        return this.props.navigation.navigate('GuestVideos')
    }

    handleGoToLogin () {
        if (this.props.user) {
            return this.props.navigation.navigate('MemberIndex')
        }

        return this.props.navigation.navigate('GuestLogin')
    }

    handleOpenCLT () {
        WebBrowser.openBrowserAsync('https://www.empregasaopaulo.sp.gov.br/IMO/aprendiz/pdf/CLT%20-%20Consolidacao%20das%20Leis%20Trabalhistas.pdf')
    }

    handleOpenFacebook () {
        WebBrowser.openBrowserAsync('https://www.facebook.com/aquiseusdireitos/')
    }

    render() {
        return (
                <View style={[ styles.sidebarContainer, { backgroundColor: '#fff' } ]}>
                    <TouchableHighlight onPress={this.handleOpenFacebook}>
                        <Text>Outros Vídeos</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={this.handleOpenFacebook}>
                        <Text>Seu Sindicato</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={this.handleOpenFacebook}>
                        <Text>Facebook</Text>
                    </TouchableHighlight>
                </View>
               );
    }
};

export default SideBar;
