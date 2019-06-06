import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, View, WebView, Image, Dimensions, TouchableHighlight, Linking } from 'react-native'
import { Content, Container, Button, Drawer, Header, Text, H2 } from 'native-base'
import Title from '../../components/title'
import {WebBrowser} from 'expo'
import SideBar from '../../components/menu'
import MainSlider from '../../components/main-slider'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ScrollView } from 'react-native-gesture-handler';

class Wizard extends React.Component {
    constructor(props) {
        super(props)

        this.handleOpenCLT = this.handleOpenCLT.bind(this)
        this.handleGoToLogin = this.handleGoToLogin.bind(this)
        this.handleGoToVideos = this.handleGoToVideos.bind(this)
        this.closeDrawer = this.closeDrawer.bind(this)
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
              height: 90,
              display: 'flex',
              flexDirection: 'row'
          },
          seuSindicatoBtnWrapper: {
              display: 'flex',
              flexDirection: 'row',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'flex-end',
              position: 'relative',
          },
          seuSindicatoBtnArrow: {
              backgroundColor: '#E95B11',
              color: '#F9B308',
              paddingHorizontal: 12,
              textAlign: 'center',
              paddingVertical: 31,
              position: 'absolute',
              right: -30
          },
          seuSindicatoBtnText: {
              fontFamily: 'niramid-medium',
              fontSize: 16,
              lineHeight: 18,
              marginLeft: 25,
              marginRight: 10,
              textAlign: 'right',
          },
          orangeText: {
              color: '#E95B11',
          },
          borderedText: {
              borderColor: '#006699',
              borderWidth: 1,
              borderRadius: 4,
              marginTop: 3,
              width: 170,
              start: 10,
              paddingVertical: 1,
              textAlign: 'center'
          },
          blueText: {
              color: '#006699'
          }
      })

      const dimensions = Dimensions.get('window');
      const imageHeight = Math.round(dimensions.width * 9 / 16);
      const imageWidth = dimensions.width / 3;

      return (
          <Drawer
              side="right"
              ref={(ref) => { this.drawer = ref; }}
              content={<SideBar navigation={this.props.navigation} close={this.closeDrawer} />}
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

                        <ScrollView>
                          <View style={ styles.viewWrapper }>
                              <View style={{ width: '100%', height: '100%', backgroundColor: '#006599', paddingHorizontal: 15, paddingVertical: 5 }}>
                                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#006599', backgroundColor: '#fff', width: 260, paddingVertical: 5, textAlign: 'center', fontStyle: 'italic' }}>Seu canal de INFORMAÇÃO</Text>
                                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', backgroundColor: '#006599', borderColor: '#fff', borderWidth: 2, width: 220, paddingVertical: 5, textAlign: 'center', fontStyle: 'italic', position: 'absolute', right: 20, bottom: -27 }}>sobre leis, direitos e deveres</Text>
                              </View>
                          </View>

                          <View style={{ paddingHorizontal: 20, paddingVertical: 10, flex: 1, height: 280, marginTop: 45, backgroundColor: '#003E6F' }}>
                              <View style={{ paddingVertical: 5, height: 220 }}>
                                  { Boolean(featuredVideo) && <WebView source={{ uri: "https://www.youtube.com/embed/" + featuredVideo.youtube_id + "?rel=0&controls=1&showinfo=0&loop=1" }} /> }
                              </View>

                              <View style={{ paddingVertical: 0, height: 30, width: 140, textAlign: 'center', bottom: 2, right: 20, position: 'absolute' }}>
                                  <TouchableHighlight onPress={this.handleGoToVideos}>
                                      <Text style={{ color: '#003E6F', backgroundColor: '#fff', textAlign: 'center', fontWeight: 'bold' }}>MAIS VÍDEOS ></Text>
                                  </TouchableHighlight>
                              </View>
                          </View>

                          <View style={{ display: 'flex', backgroundColor: '#10253A', height: 170, paddingVertical: 20, paddingHorizontal: 20 }}>
                              <MainSlider propagandas={featuredPropagandas} />
                          </View>
                          <View style={ styles.seuSindicatoBtnContainer }>

                              <TouchableHighlight onPress={this.handleGoToLogin}>
                                  <View style={ styles.seuSindicatoBtnWrapper }>
                                      <Image source={require('../../../assets/icons/seu-sindicato.png')} style={{ width: 135, resizeMode: 'contain', start: -5 }} />
                                      <View style={{ marginRight: 10 }}>
                                          <Text style={[styles.seuSindicatoBtnText]}>Conheça o Seu Sindicato</Text>
                                          <Text style={[styles.seuSindicatoBtnText, styles.orangeText, styles.borderedText]}>O app do trabalhador</Text>
                                          <Text style={[styles.seuSindicatoBtnText, styles.blueText]}>acesse aqui</Text>
                                      </View>
                                      <View style={ styles.seuSindicatoBtnArrow }>
                                          <Image source={require('../../../assets/icons/right_arrow.png')} style={{ width: 15 }} />
                                      </View>
                                  </View>
                              </TouchableHighlight>

                          </View>
                        </ScrollView>
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
