import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, Platform } from 'react-native';
import {WebBrowser} from 'expo'
import MainView from '../../components/main'
import { Content, View, Button, Text, Toast, Icon } from 'native-base';
import {requestSindicateBenefits, toggleContribution} from "../../thunks/benefit";
import {STATUS_BAR_HEIGHT} from "../../utils/constants";

const styles = StyleSheet.create({
  mt: {
    marginVertical: 8
  },
  paddingH: {
    paddingHorizontal: 16
  },
  white: {
    color: 'white',
    textAlign: 'center',
  },
  icon: {
    color: 'green',
    fontSize: Platform.OS === 'ios' ? 50 : 35,
    marginRight: 5
  },
  font: {
    fontFamily: 'roboto-medium',
    fontSize: 18,
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  btn: {
    fontSize: 16,
    fontFamily: 'roboto-medium',
    textAlign: 'center',
    color: 'white',
    width: '100%'
  },
})

class MemberSindicalAuthorization extends React.Component {
  componentDidMount () {
    this.props.requestSindicateBenefits(this.props.sindicateId)
  }

  handlePress = () => {
    const {toggleContribution, navigation, authorized} = this.props

    toggleContribution(authorized)
    navigation.goBack()

    const text = authorized ?
      'Cancelamento da contribuição realizado com sucesso!' : 'Aceite da contribuição realizado com sucesso!'

    Toast.show({
      text,
      buttonText: 'Fechar',
      position: 'top',
      type: 'success',
      duration: 4000
    })
  }

  handleClick = () => {
    return WebBrowser.openBrowserAsync('https://www.seusindicato.com.br/carteirinha/' + this.props.userId)
  }

  renderBenefits (benefits) {
    return benefits.map((benefit, key) => {
      return <View style={styles.item} key={'benefit-id-'+ key}>
        <Icon ios='ios-checkmark' android="md-checkmark" style={styles.icon}/>
        <Text style={styles.font}>{benefit.nome}</Text>
      </View>
    })
  }

  render () {
    const {benefits, fetching, error} = this.props

    if (fetching || error) {
      return (
        <View style={{ flex: 1, alignItems: 'center', height: '100%', justifyContent: 'center' }}>
          <Text>Carregando...</Text>
        </View>
      )
    }

    const renderedBenefits = this.renderBenefits(benefits)

    return (
      <MainView>
        <Content style={[styles.paddingH, styles.mt]}>
          {renderedBenefits}

          <View style={{ marginTop: 16, textAlign: 'center' }}>
            <Button onPress={this.handleClick}>
              <Text uppercase style={styles.btn}>Acesse Aqui sua carteirinha digital</Text>
            </Button>
          </View>
        </Content>
      </MainView>
    )
  }
}

MemberSindicalAuthorization.navigationOptions = {
  headerMode: 'auto',
  title: 'Por quê contribuir?',
  headerStyle: {
    marginTop: -STATUS_BAR_HEIGHT,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: '#6198D8',
    borderBottomWidth: 0,
  },
  headerTintColor: 'white',
}

function mapStateToProps(state) {
  return {
    userId: state.auth.current.id,
    authorized: state.auth.current.aceitou_contribuicao,
    sindicateId: state.auth.current.sindicato_id,
    benefits: state.benefit.list.data,
    fetching: state.benefit.list.fetching,
    error: state.benefit.list.error,
  }
}

export default connect(mapStateToProps, {requestSindicateBenefits, toggleContribution})(MemberSindicalAuthorization)