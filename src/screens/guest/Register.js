import React from 'react'
import { StyleSheet } from 'react-native'
import SeusDireitos from '../../components/seus-direitos'
import MainView from '../../components/main'
import {createUser} from '../../api/auth'
import RegisterForm from '../../components/register-form'
import {getSindicates} from '../../api/selects'
import {SubmissionError} from 'redux-form'
import {Toast} from 'native-base'

const styles = StyleSheet.create({
  mt: {
    marginTop: 10,
  },
  mb: {
    marginBottom: 16
  },
  bordered: {
    padding: 16,
    margin: 16,
    borderRadius: 8,
    borderColor:'#ccc',
    borderWidth: 1,
  },
  paddingH: {
    paddingHorizontal: 16
  },
  white: {
    color: 'white'
  }
})

class GuestRegister extends React.Component {
  state = {
    cities: [],
    sindicates: [],
  }

  async componentDidMount () {
    const sindicates = await getSindicates()

    this.setState({
      sindicates,
    })
  }

  handleSubmit = values => {

    const data = {
      ...values,
      sindicato_id: values.sindicate.id,
      cidade_id: values.sindicate.cities.length === 1 ? values.sindicate.cities[0].id : values.city.id
    }

    return createUser(data)
      .then(res => {
        if (!res.data.success) {
          throw new Error("error!")
        }

        this.props.navigation.navigate('Auth')
        Toast.show({
          text: 'Sua conta foi criada com sucesso! Seja bem-vindo aos Seus Direitos!',
          buttonText: 'Fechar',
          position: 'top',
          type: 'success',
          duration: 4000
        })
      })
      .catch(err => {
        throw new SubmissionError({ email: "Este e-mail já está cadastrado." })
      })
  }

  render () {
    const {sindicates} = this.state

    return (
      <MainView padder extraScroll={55}>
        <SeusDireitos />

        <RegisterForm onSubmit={this.handleSubmit} sindicates={sindicates} />
      </MainView>
    )
  }
}

GuestRegister.navigationOptions = {
  title: "Cadastro",
  headerMode: 'screen',
  headerStyle: {
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: '#6198D8',
    borderBottomWidth: 0,
  },
  headerTintColor: 'white',
}

export default GuestRegister