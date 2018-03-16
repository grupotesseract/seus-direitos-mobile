import React from 'react'
import { StyleSheet, View } from 'react-native'
import TextInput from '../components/form/text'
import {Content, Text, Button} from 'native-base'
import { Field, reduxForm } from 'redux-form'
import {email, required} from '../utils/validations'

const styles = StyleSheet.create({
  submitBtn: {
    backgroundColor: '#020F50',
    marginTop: 16,
  },
  errorBox: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 20,
    paddingVertical: 12
  },
  errorText: {
    color: '#721C2A',
  },
  forgotPass: { textAlign: 'right', marginVertical: 12 }
})

class LoginForm extends React.Component {
  render () {
    const {error, handleSubmit, submitting} = this.props
    console.log(error)
    return (
      <View>
        { !!error &&
        <View style={styles.errorBox}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
        }

        <Field
          name="email"
          label="E-mail"
          type="email-address"
          component={TextInput}
          normalize={value => value && value.toLowerCase()}
          validate={[required, email]}
        />

        <Field
          name="password"
          label="Senha"
          secure
          component={TextInput}
          validate={required}
        />

        <Text style={styles.forgotPass}>
          Esqueceu sua senha?
        </Text>

        <Button
          full
          primary
          style={styles.submitBtn}
          onPress={handleSubmit}
          disabled={submitting}
        >
          <Text>ENTRAR</Text>
        </Button>
      </View>
    )
  }
}

export default reduxForm({
  form: 'loginForm'
})(LoginForm)