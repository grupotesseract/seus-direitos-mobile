import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, View, WebView, Image, Dimensions, TouchableHighlight } from 'react-native'
import { Content, Container, Button, Drawer, Header, Text, H2 } from 'native-base'
import Title from '../../components/title'
import {WebBrowser} from 'expo'
import SideBar from '../../components/menu'
import MainSlider from '../../components/main-slider'
import Icon from 'react-native-vector-icons/FontAwesome'

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

  closeDrawer = () => {
      this.drawer._root.close()
  };
  openDrawer = () => {
      this.drawer._root.open()
  };

  render () {
      const { featuredVideo, featuredPropagandas } = this.props

      const styles = StyleSheet.create({
          viewWrapper: {
              display: 'flex',
              height: 50,
              flexDirection: 'row',
              alignItems: 'center'
          },
          imgLogo: {
              width: 150,
              resizeMode: Image.resizeMode.contain,
              display: 'flex'
          },
          containerView: {
              alignItems: 'flex-start',
              justifyContent: 'center',
              display: 'flex',
              width: '100%',
              height: 40,
              flexDirection: 'column',
              backgroundColor: '#006699',
              paddingHorizontal: 30,
              paddingTop: 0
          },
      })

      const dimensions = Dimensions.get('window');
      const imageHeight = Math.round(dimensions.width * 9 / 16);
      const imageWidth = dimensions.width / 3;

      return (
          <Drawer
              ref={(ref) => { this.drawer = ref; }}
              content={<SideBar navigation={this.props.navigation} />}
              onClose={() => this.closeDrawer()}>
              <Container style={{ display: 'flex', width: '100%' }}>
                  <Header style={ styles.containerView }>
                      <Container style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', width: '180%' }}>
                          <View style={{ display: 'flex', width: '50%' }}>
                              <Image source={require('../../../assets/icons/app_icon_longo.png')} style={styles.imgLogo} />
                          </View>
                          <View style={{ display: 'flex', width: '50%', justifyContent: 'flex-end' }}>
                              <Icon onPress={() => this.openDrawer()} name="bars" size={30} color="#fff" />
                          </View>
                      </Container>
                  </Header>

                  <Container style={{ backgroundColor: '#DED9D5' }}>
                      <Content contentContainerStyle={{ flex: 1 }}>

                          <View style={ styles.viewWrapper }>
                              <View style={{ width: '20%', height: '100%', backgroundColor: '#ACC7D2', borderStyle: 'solid', borderRightWidth: 3, borderRightColor: 'white' }}></View>
                              <View style={{ width: '80%', height: '100%', backgroundColor: '#86D4DD', paddingHorizontal: 15, paddingVertical: 5 }}>
                                  <Text style={{ fontSize: 13, color: '#fff' }}>Conheça seus direitos: uma plataforma de informação, conhecimento e humanidade</Text>
                              </View>
                          </View>

                          <View style={{ display: 'flex', height: 150 }}>
                              <MainSlider propagandas={featuredPropagandas} />
                          </View>

                          <View style={{ paddingHorizontal: 10, paddingVertical: 10, flex: 1, height: 400 }}>
                              <View style={{ paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#fff', height: '100%' }}>
                                  { Boolean(featuredVideo) && <WebView source={{ uri: "https://www.youtube.com/embed/" + featuredVideo.youtube_id }} /> }
                              </View>
                          </View>

                          <View style={{alignItems: 'flex-end', paddingHorizontal: 24, paddingVertical: 12, flexDirection: 'row', justifyContent: 'center', backgroundColor: '#cccccc', width: '100%', height: 45, display: 'flex' }}>

                                  <View style={{ display: 'flex', width: '33.3%', height: '100%', justifyContent: 'center', paddingHorizontal: 0 }}>
                                      <TouchableHighlight onPress={this.handleGoToVideos}>
                                          <Image onClick={this.handleGoToLogin} source={require('../../../assets/icons/outros-videos.png')} style={{ width: '100%', height: '100%', resizeMode: Image.resizeMode.contain }} />
                                      </TouchableHighlight>
                                  </View>

                                  <View style={{ display: 'flex', width: '33.3%', height: '100%', justifyContent: 'center', borderStyle: 'solid', borderLeftWidth: 1, borderLeftColor: 'white', borderRightWidth: 1, borderRightColor: 'white', paddingHorizontal: 0 }}>
                                      <TouchableHighlight onPress={this.handleGoToLogin}>
                                          <Image onClick={this.handleGoToLogin} source={require('../../../assets/icons/seu-sindicato.png')} style={{ width: '100%', height: '100%', resizeMode: Image.resizeMode.contain }} />
                                      </TouchableHighlight>
                                  </View>

                                  <View style={{ display: 'flex', width: '33.3%', height: '100%', justifyContent: 'center', paddingHorizontal: 0 }}>
                                      <TouchableHighlight onPress={this.handleOpenFacebook}>
                                          <Image onClick={this.handleGoToLogin} source={require('../../../assets/icons/facebook-icon.png')} style={{ width: '100%', height: '100%', resizeMode: Image.resizeMode.contain }} />
                                      </TouchableHighlight>
                                  </View>

                          </View>

                      </Content>
                  </Container>

              </Container>
          </Drawer>
      )
  }
}

Wizard.navigationOptions = {
  header: null
}

function mapStateToProps(state) {
    return {
        featuredVideo: state.video.featured.video[0],
        featuredPropagandas: state.video.featured.propagandas,
        user: state.auth.current
    }
}

export default connect(mapStateToProps)(Wizard)
