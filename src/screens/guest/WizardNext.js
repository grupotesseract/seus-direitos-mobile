import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, View, WebView, Image, Dimensions, TouchableHighlight, Linking } from 'react-native'
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

      return this.props.navigation.navigate('PreLogin')
  }

  handleOpenCLT () {
      WebBrowser.openBrowserAsync('https://www.empregasaopaulo.sp.gov.br/IMO/aprendiz/pdf/CLT%20-%20Consolidacao%20das%20Leis%20Trabalhistas.pdf')
  }

  handleOpenFacebook () {
      Linking.canOpenURL("fb://facewebmodal/f?href=https://www.facebook.com/aquiseusdireitos/").then(supported => {
          if (supported) {
              return Linking.openURL("fb://facewebmodal/f?href=https://www.facebook.com/aquiseusdireitos/");
          } else {
              return Linking.openURL("https://www.facebook.com/aquiseusdireitos/");
          }
      })
      // WebBrowser.openBrowserAsync('https://www.facebook.com/aquiseusdireitos/')
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
              resizeMode: 'contain',
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
          seuSindicatoBtnContainer: {
              paddingHorizontal: 0,
              paddingVertical: 0,
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: '#FABB20',
              width: '100%',
              height: 100,
              display: 'flex',
              flexDirection: 'row'
          },
          seuSindicatoBtnWrapper: {

          },
          seuSindicatoBtnArrow: {
              backgroundColor: '#E95B11',
              color: '#F9B308',
              height: '100%'
          }
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

                  <Container style={{ backgroundColor: '#006599' }}>
                      <Content contentContainerStyle={{ flex: 1 }}>

                          <View style={ styles.viewWrapper }>
                              <View style={{ width: '100%', height: '100%', backgroundColor: '#006599', paddingHorizontal: 15, paddingVertical: 5 }}>
                                  <Text style={{ fontSize: 13, color: '#006599', backgroundColor: '#fff' }}>Seu canal de informação</Text>
                                  <Text style={{ fontSize: 13, color: '#fff', backgroundColor: '#006599', borderColor: '#fff', borderWidth: 2 }}>sobre leis, direitos e deveres</Text>
                              </View>
                          </View>

                          <View style={{ paddingHorizontal: 10, paddingVertical: 10, flex: 1, height: 350 }}>
                              <View style={{ paddingHorizontal: 10, paddingVertical: 10, height: 200 }}>
                                  { Boolean(featuredVideo) && <WebView source={{ uri: "https://www.youtube.com/embed/" + featuredVideo.youtube_id + "?rel=0&controls=1&showinfo=0&loop=1" }} /> }
                              </View>

                              <View style={{ paddingHorizontal: 10, paddingVertical: 10, height: 50 }}>
                                  <TouchableHighlight onPress={this.handleGoToLogin}>
                                      <Text style={{ color: '#003E6F', backgroundColor: '#fff' }}>Mais Vídeos ></Text>
                                  </TouchableHighlight>
                              </View>
                          </View>

                          <View style={{ display: 'flex', backgroundColor: '#10253A', height: 250, paddingVertical: 20, paddingHorizontal: 30 }}>
                              <MainSlider propagandas={featuredPropagandas} />
                          </View>


                          <View style={ styles.seuSindicatoBtnContainer }>

                              <TouchableHighlight onPress={this.handleGoToLogin}>
                                  <View style={ styles.seuSindicatoBtnWrapper }>
                                      <Image onClick={this.handleGoToLogin} source={require('../../../assets/icons/seu-sindicato.png')} style={{ width: 45, height: 45, resizeMode: Image.resizeMode.contain }} />
                                      <Text></Text>
                                      <Text style={ styles.seuSindicatoBtnArrow }>></Text>
                                  </View>
                              </TouchableHighlight>

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
