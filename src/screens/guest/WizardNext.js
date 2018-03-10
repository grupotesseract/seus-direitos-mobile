import React from 'react'
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
    return this.props.navigation.navigate('GuestWizardNext')
  }

  handleGoToLogin () {
    return this.props.navigation.navigate('GuestLogin')
  }

  handleOpenCLT () {
    WebBrowser.openBrowserAsync('https://www.empregasaopaulo.sp.gov.br/IMO/aprendiz/pdf/CLT%20-%20Consolidacao%20das%20Leis%20Trabalhistas.pdf')
  }

  render () {

    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1 }}>
          <WebView source={{ uri: "https://www.youtube.com/embed/RJa4kG1N3d0" }} />
          <View style={{alignItems: 'center', padding: 24, flex: 1, flexDirection: 'column', justifyContent: 'space-around', backgroundColor: '#fafafa', width: '100%' }}>
            <View>
              <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 8, color: '#95989A' }}>
                Para entender mais sobre nossa missão veja o vídeo de introdução acima.
              </Text>
            </View>

            <View>
              <Text style={{ fontSize: 18, textAlign: 'center', color: '#95989A' }}>
                Para ver mais vídeos do Seus Direitos
              </Text>
              <Text
                style={{ color: '#6198D8', fontFamily: 'roboto-medium', textAlign: 'center',  }}
                onPress={this.handleGoToVideos}
              >
                CLIQUE AQUI
              </Text>
            </View>

            <View>
              <Text style={{ fontSize: 18, textAlign: 'center', color: '#95989A' }}>
                Para saber mais sobre o Seu Sindicato
              </Text>
              <Text
                style={{ color: '#6198D8', fontFamily: 'roboto-medium', textAlign: 'center',  }}
                onPress={this.handleGoToLogin}
              >
                CLIQUE AQUI
              </Text>
            </View>

            <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 8, color: '#95989A' }}>
              Além de todo este material você também pode
              <Text onPress={this.handleOpenCLT} style={{ color: '#6198D8', fontFamily: 'roboto-medium' }}> CONSULTAR SUA CLT </Text>
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

export default Wizard