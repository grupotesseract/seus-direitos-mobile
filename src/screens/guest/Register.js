import React from 'react'
import {connect} from 'react-redux'
import SeuSindicato from '../../components/seu-sindicato'
import MainView from '../../components/main'
import RegisterForm from '../../components/register-form'
import {getSindicates} from '../../api/selects'
import {Toast} from 'native-base'
import {register} from "../../thunks/auth"
import {STATUS_BAR_HEIGHT} from "../../utils/constants";

class GuestRegister extends React.Component {
  state = {
    sindicates: [],
  }

  async componentDidMount () {
    const sindicates = await getSindicates()

    this.setState({
      sindicates,
    })
  }

  handleSubmit = values => this.props.register(values)
  handleSubmitSuccess = () => {
    this.props.navigation.navigate('MemberIndex')
    Toast.show({
      text: 'Sua conta foi criada com sucesso! Seja bem-vindo aos Seu Sindicato!',
      buttonText: 'Fechar',
      position: 'top',
      type: 'success',
      duration: 4000
    })
  }

  render () {
    const {sindicates} = this.state

    return (
      <MainView padder extraScroll={85}>
        <SeuSindicato />
        <RegisterForm
          sindicates={sindicates}
          onSubmit={this.handleSubmit}
          onSubmitSuccess={this.handleSubmitSuccess}
        />
      </MainView>
    )
  }
}

GuestRegister.navigationOptions = {
  title: "Cadastro",
  headerMode: 'screen',
  headerStyle: {
    marginTop: -STATUS_BAR_HEIGHT,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: '#6198D8',
    borderBottomWidth: 0,
  },
  headerTintColor: 'white',
}

export default connect(null, {register})(GuestRegister)