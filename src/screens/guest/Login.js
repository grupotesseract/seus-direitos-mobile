import React from 'react'
import { StyleSheet, View } from 'react-native'
import MainView from '../../components/main'
import TextInput from '../../components/form/text'
import SeusDireitos from '../../components/seus-direitos'
import {Content, Text, Button} from 'native-base'
import { Field, reduxForm } from 'redux-form'
import {email, required} from '../../utils/validations'
import { withNavigation } from 'react-navigation'

const styles = StyleSheet.create({
  mt: {
    marginTop: 16
  },
  mt2: {
    marginTop: 32
  },
  paddingH: {
    paddingHorizontal: 16
  }
})


class Login extends React.Component {
  submit = values => {
    this.props.navigation.navigate('Auth')
  }

  render() {
    const { handleSubmit, pristine, invalid, submitting } = this.props

    return (
      <MainView>
        <Content>
          <SeusDireitos />

          <View style={styles.paddingH}>
            <Field
              name="login"
              label="Login"
              type="email-address"
              component={TextInput}
              normalize={value => value && value.toLowerCase()}
              validate={email}
            />

            <Field
              name="password"
              label="Senha"
              secure
              component={TextInput}
              validate={required}
            />

            <Button full primary style={styles.mt} onPress={handleSubmit(this.submit)} disabled={pristine || invalid || submitting}>
              <Text>ENTRAR</Text>
            </Button>

            <Button full bordered style={styles.mt2}>
              <Text>CONSULTAR CLT</Text>
            </Button>
          </View>
        </Content>
      </MainView>
    )
  }
}

Login.navigationOptions = {
  headerMode: 'screen',
  title: 'Minha Conta',
  headerStyle: {
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: '#6198D8',
    borderBottomWidth: 0,
  },
  headerTintColor: 'white',
}

export default withNavigation(reduxForm({
  form: 'loginForm'
})(Login))