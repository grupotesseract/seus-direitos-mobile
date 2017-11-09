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

function form ({ handleSubmit, pristine, invalid, submitting }) {
  return (
    <View>
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

export default reduxForm({
  form: 'loginForm'
})(form)