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
        <View style={{ height: 200, margin: 50, alignItems: 'center', justifyContent: 'center' }}>
          <SeusDireitos />
        </View>
        <View style={{alignItems: 'center', padding: 24, flex: 1, flexDirection: 'column', justifyContent: 'space-around', backgroundColor: '#fafafa', width: '100%' }}>
          <View>
            <Title type="header" text="SEJA BEM-VINDO(A)" />
          </View>
          <View>
            <Text style={{ fontSize: 18, textAlign: 'center', color: '#95989A' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus, autem consequuntur explicabo nihil nisi quisquam reiciendis saepe voluptatem!
              Accusantium animi beatae debitis dicta dolorem eius, magnam maiores necessitatibus pariatur quae.
            </Text>
          </View>
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