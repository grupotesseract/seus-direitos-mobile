import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { WebBrowser } from 'expo'
import MainView from '../../components/main'
import {Button, Text, Toast} from 'native-base';
import hands from '../../../assets/icons/hands.png'
import news from '../../../assets/icons/news.png'
import talk from '../../../assets/icons/talk.png'
import vacation from '../../../assets/icons/vacation.png'
import {getUserFromToken, logout} from "../../thunks/auth"
import _get from 'lodash/get'

const styles = StyleSheet.create({
  mt: {
    marginVertical: 10
  },
  paddingH: {
    paddingHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  white: {
    color: 'white',
    textAlign: 'center',
  },
  primary: {
    color: '#020F50',
    textAlign: 'center',
    paddingVertical: 20
  },
  button: {
    flexDirection: 'column',
    marginVertical: 16,
    backgroundColor: '#020F50',
    paddingVertical: 12
  }
})

class MemberIndex extends React.Component {
  componentDidMount() {
    this.props.getUserFromToken()
  }

  handleLogout = () => this.props.logout(this.props.navigation)
  handleClickBenefits = () => this.props.navigation.navigate('MemberSindicalAuthorization')
  handlePressFeatures = () => Toast.show({
    text: 'Esta função será liberada em breve!',
    duration: 4000
  })
  handleClickConvencoes = () => WebBrowser.openBrowserAsync('https://www.seusindicato.com.br/sindicatos/'+ this.props.user.sindicato_id + '/convencoes')
  handleClickNoticias = () => WebBrowser.openBrowserAsync('https://www.seusindicato.com.br/sindicatos/'+ this.props.user.sindicato_id + '/noticias')
  handleTalkToUs = () => WebBrowser.openBrowserAsync('https://www.seusindicato.com.br/faleconosco/'+ this.props.user.sindicato_id )

  render () {
    const {user} = this.props

    const sindicateName = _get(user, 'sindicato.nome', null)

    return (
      <MainView>
        <View style={[styles.paddingH, styles.mt]}>
          { sindicateName && <Text uppercase style={styles.primary}>{sindicateName}</Text> }
          <Button
            full
            primary
            onPress={this.handleClickBenefits}
            style={styles.button}
          >
            <Text uppercase style={styles.white}>Benefícios e Carteirinha</Text>
          </Button>
          <View style={{ flexDirection: 'row', marginTop: 16 }}>
            <TouchableOpacity
              onPress={this.handleClickNoticias}
              style={{flex: 1, borderColor: 'red', borderWidth: 1, borderTopLeftRadius: 8, alignItems: 'center'}}>
              <Image source={news} style={{width: 140, height: 140, resizeMode: Image.resizeMode.contain}}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.handlePressFeatures}
              style={{flex: 1, borderColor: 'orange', borderWidth: 1, borderTopRightRadius: 8, alignItems: 'center'}}>
              <Image source={vacation} style={{width: 140, height: 140, resizeMode: Image.resizeMode.contain}}/>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={this.handleTalkToUs}
              style={{flex: 1, borderColor: 'purple', borderWidth: 1, borderBottomLeftRadius: 8, alignItems: 'center'}}>
              <Image source={talk} style={{width: 140, height: 140, resizeMode: Image.resizeMode.contain}}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.handleClickConvencoes}
              style={{flex: 1, borderColor: 'green', borderWidth: 1, borderBottomRightRadius: 8, alignItems: 'center'}}>
              <Image source={hands} style={{width: 140, height: 140, resizeMode: Image.resizeMode.contain}}/>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 16 }}>
          <Text>Seu Sindicato - Presente na sua Vida</Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <Button
            transparent
            block
            onPress={this.handleLogout}
          >
            <Text>SAIR</Text>
          </Button>
        </View>
      </MainView>
    )
  }
}

MemberIndex.navigationOptions = {
  header: null,
}

const mapStateToProps = state => ({
  user: state.auth.current
})

export default connect(mapStateToProps, {getUserFromToken, logout})(MemberIndex)