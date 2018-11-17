import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, View, WebView, Image, TouchableHighlight } from 'react-native'
import { Content, Container, Button, Text, H2 } from 'native-base'
import Title from '../../components/title'
import {WebBrowser} from 'expo'
import Menu from '../../components/menu'

class Wizard extends React.Component {
    constructor(props) {
        super(props)

        this.handleOpenCLT = this.handleOpenCLT.bind(this)
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

  handleOpenCLT () {
      WebBrowser.openBrowserAsync('https://www.empregasaopaulo.sp.gov.br/IMO/aprendiz/pdf/CLT%20-%20Consolidacao%20das%20Leis%20Trabalhistas.pdf')
  }

  handleOpenFacebook () {
      WebBrowser.openBrowserAsync('https://www.facebook.com/aquiseusdireitos/')
  }

  render () {
    const {featuredVideo} = this.props

    return (
        <Container>
            <Content contentContainerStyle={{ flex: 1 }}>
                <View style={{ height: 30, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    <Menu />
                </View>
                { Boolean(featuredVideo) && <WebView source={{ uri: "https://www.youtube.com/embed/" + featuredVideo.youtube_id }} /> }
                <View style={{alignItems: 'flex-end', paddingHorizontal: 24, flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: '#cccccc', width: '100%' }}>

                    <View style={{flexDirection:"row"}}>

                        <TouchableHighlight onPress={this.handleGoToVideos}>
                            <Image onClick={this.handleGoToLogin} source={require('../../../assets/icons/outros-videos.png')} style={{ width: 100, height: 80, resizeMode: Image.resizeMode.contain }} />
                        </TouchableHighlight>

                        <TouchableHighlight onPress={this.handleGoToLogin}>
                            <Image onClick={this.handleGoToLogin} source={require('../../../assets/icons/seu-sindicato.png')} style={{ width: 100, height: 80, resizeMode: Image.resizeMode.contain, marginHorizontal: 10 }} />
                        </TouchableHighlight>

                        <TouchableHighlight onPress={this.handleOpenFacebook}>
                            <Image onClick={this.handleGoToLogin} source={require('../../../assets/icons/facebook-icon.png')} style={{ width: 100, height: 60, resizeMode: Image.resizeMode.contain }} />
                        </TouchableHighlight>

                    </View>
                </View>
            </Content>
        </Container>
    )
  }
}

Wizard.navigationOptions = {
  header: null
}

function mapStateToProps(state) {
  return {
    featuredVideo: state.video.featured,
    user: state.auth.current
  }
}

export default connect(mapStateToProps)(Wizard)
