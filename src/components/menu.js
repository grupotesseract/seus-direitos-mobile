import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, Platform, TouchableHighlight } from 'react-native'
import { Container, Content, Drawer, Header, Button } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import {WebBrowser} from 'expo'

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    sidebarContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    menuItem: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 8
    }
})

class SideBar extends Component {
    constructor(props) {
        super(props)

        this.handleGoToLogin = this.handleGoToLogin.bind(this)
        this.handleGoToVideos = this.handleGoToVideos.bind(this)
    }

    handleGoToVideos () {
        return this.props.navigation.navigate('GuestVideos')
    }

    handleGoToLogin () {
        if (this.props.user) {
            return this.props.navigation.navigate('MemberIndex')
        }

        return this.props.navigation.navigate('GuestLogin')
    }

    handleOpenFacebook () {
        WebBrowser.openBrowserAsync('https://www.facebook.com/aquiseusdireitos/')
    }

    render() {
        return (
                <View style={[ styles.sidebarContainer, { backgroundColor: '#fff' } ]}>
                    <TouchableHighlight onPress={this.handleGoToVideos}>
                        <Text style={ styles.menuItem }>OUTROS VÍDEOS</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={this.handleGoToLogin}>
                        <Text style={ styles.menuItem }>SEU SINDICATO</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={this.handleOpenFacebook}>
                        <Text style={ styles.menuItem }>FACEBOOK</Text>
                    </TouchableHighlight>
                </View>
               );
    }
};

export default SideBar;
