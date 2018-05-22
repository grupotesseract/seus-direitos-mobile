import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, View, WebView } from 'react-native'
import { Content, Container, Button, Text, H2 } from 'native-base'
import Title from '../../components/title'
import {WebBrowser} from 'expo'

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

  render () {
    const {featuredVideo} = this.props

    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1 }}>
          { Boolean(featuredVideo) && <WebView source={{ uri: "https://www.youtube.com/embed/" + featuredVideo.youtube_id }} /> }
          <View style={{alignItems: 'center', padding: 24, flex: 1, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fafafa', width: '100%' }}>

            <Text  style={{ fontSize: 18, textAlign: 'center', color: '#95989A' }}>
              <Text
                style={{ fontSize: 18, color: '#6198D8' }}
                onPress={this.handleGoToVideos}
              > Vídeos/Animações Anteriores </Text>
            </Text>

            <Text style={{ fontSize: 18, textAlign: 'center', color: '#95989A' }}>
              Os direitos da sua categoria estão
              <Text
                style={{ fontSize: 18, color: '#6198D8' }}
                onPress={this.handleGoToLogin}
              > aqui </Text>
            </Text>

            <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 8, color: '#95989A' }}>
              Consulte a nova CLT
              <Text onPress={this.handleOpenCLT} style={{ fontSize: 18, color: '#6198D8' }}> aqui </Text>
            </Text>
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