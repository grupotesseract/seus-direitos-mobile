import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, H2 } from 'native-base'
import SeusDireitos from '../../components/seus-direitos'
import Title from '../../components/title'

class Wizard extends React.Component {
  constructor(props) {
    super(props)

    this.handlePress = this.handlePress.bind(this)
  }

  handlePress () {
    this.props.navigation.navigate('GuestWizardNext')
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: 'white',  alignItems: 'center', flexDirection: 'column' }}>
        <View style={{ height: 200, alignItems: 'center', justifyContent: 'center' }}>
          <SeusDireitos />
        </View>
        <View style={{alignItems: 'center', padding: 24, flex: 1, flexDirection: 'column', backgroundColor: '#fafafa', width: '100%' }}>
          <Title type="header" text="SEJA BEM-VINDO(A)" />
          <Text style={{ fontSize: 18, marginVertical: 40, textAlign: 'center', color: '#95989A' }}>
            Neste aplicativo você assiste vídeos e animações sobre as leis que regulam o seu dia a dia.
            Acesse área exclusiva onde estão disponíveis os Seus Direitos e Benefícios conquistados pela sua categoria de trabalho.
          </Text>
        </View>
        <Button block large onPress={this.handlePress}>
          <Text uppercase>próximo</Text>
        </Button>
      </View>
    )
  }
}

Wizard.navigationOptions = {
  header: null
}

export default Wizard
