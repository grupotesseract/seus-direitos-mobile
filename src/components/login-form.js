import React from 'react'
import { StyleSheet, View } from 'react-native'
import TextInput from '../components/form/text'
import {Content, Text, Button} from 'native-base'
import { Field, reduxForm } from 'redux-form'
import {email, required} from '../utils/validations'

const styles = StyleSheet.create({
  mt: {
    marginTop: 16
  },
})

class LoginForm extends React.Component {
  render () {
    const {handleSubmit, pristine, invalid, submitting} = this.props
    return (
      <View>
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

        <Text style={{ textAlign: 'right', marginVertical: 12 }}>Esqueceu sua senha?</Text>

        <Button full
                primary
                style={styles.mt}
                onPress={handleSubmit}
                disabled={pristine || invalid || submitting}>
          <Text>ENTRAR</Text>
        </Button>
      </View>
    )
  }
}

export default reduxForm({
  form: 'loginForm'
})(LoginForm)