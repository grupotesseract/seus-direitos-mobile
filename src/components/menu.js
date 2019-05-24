import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native'
import {WebBrowser} from 'expo'

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    sidebarContainer: {
        backgroundColor: '#000',
        height: '100%'
    },
    menuItem: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

class SideBar extends Component {
    constructor(props) {
        super(props)

        this.handleGoToLogin = this.handleGoToLogin.bind(this)
        this.handleGoToVideos = this.handleGoToVideos.bind(this)
        this.handleCloseMenu = this.handleCloseMenu.bind(this)
    }

    handleCloseMenu () {
        return this.props.close()
    }

    handleGoToVideos () {
        return this.props.navigation.navigate('GuestVideos')
    }

    handleGoToLogin () {
        if (this.props.user) {
            return this.props.navigation.navigate('MemberIndex')
        }

        return this.props.navigation.navigate('PreLogin')
    }

    handleOpenFacebook () {
        WebBrowser.openBrowserAsync('https://www.facebook.com/aquiseusdireitos/')
    }

    render() {
        return (
                <View style={[ styles.sidebarContainer, { backgroundColor: '#fff' } ]}>
                    <TouchableHighlight onPress={this.handleCloseMenu}>
                        <View style={{ backgroundColor: '#FFFFFF', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../assets/icons/app-loading.png')} style={{ width: 200, height: 130, resizeMode: 'contain' }} />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.handleGoToVideos}>
                        <View style={{ backgroundColor: '#ECEFF6', width: '100%', alignItems: 'center', justifyContent: 'center', paddingVertical: 20 }}>
                            <Text style={ styles.menuItem }>Mais vídeos</Text>
                            <Image source={require('../../assets/icons/mais-videos-icon.png')} style={{ width: 50, height: 60, resizeMode: 'contain' }} />
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={this.handleOpenFacebook}>
                        <View style={{ backgroundColor: '#D5E1F1', width: '100%', alignItems: 'center', justifyContent: 'center', paddingVertical: 20 }}>
                            <Text style={ styles.menuItem }>Facebook</Text>
                            <Image source={require('../../assets/icons/face-icon.png')} style={{ width: 50, height: 50, marginTop: 10, resizeMode: 'contain' }} />
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={this.handleGoToLogin}>
                        <View style={{ backgroundColor: '#B3CEE9', width: '100%', alignItems: 'center', justifyContent: 'center', paddingVertical: 20 }}>
                            <Text style={ styles.menuItem }>Visite o app</Text>
                            <Image source={require('../../assets/icons/seu-sindicato.png')} style={{ width: 135, height: 50, marginTop: 10, resizeMode: 'contain' }} />
                        </View>
                    </TouchableHighlight>
                </View>
               );
    }
};

export default SideBar;
