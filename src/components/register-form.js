import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import {connect} from 'react-redux'
import { View } from 'react-native'
import { Button, Text } from 'native-base'
import {required, email, confirm, min6} from '../utils/validations'
import TextInput from '../components/form/text'
import SelectInput from '../components/form/select'
import PickerInput from '../components/form/picker'

class RegisterForm extends React.Component {
  render () {
    const {sindicates, hasMoreCities, handleSubmit, sindicateCities, pristine, invalid, submitting, change, untouch, touch} = this.props

    return (
      <View style={{marginTop: 10}}>
        <Field
          name="name"
          label="Nome"
          component={TextInput}
          validate={required}
        />

        <Field
          name="email"
          label="E-mail"
          type="email-address"
          component={TextInput}
          normalize={value => value && value.toLowerCase()}
          validate={email}
        />

        <Field
          name="sindicate"
          type="text"
          label="Sindicato"
          options={sindicates}
          component={SelectInput}
          onChange={(event, newValue, oldValue) => {
            touch('sindicate')
            if (newValue !== oldValue && hasMoreCities) {
              untouch('city')
              change('city', null)
            }

            return newValue
          }}
          validate={required}
        />

        { hasMoreCities &&
        <Field
          name="city"
          label="Selecione a Cidade"
          options={sindicateCities}
          component={PickerInput}
          validate={required}
        />
        }

        <Field
          name="password"
          label="Senha"
          secure
          component={TextInput}
          validate={[required, min6]}
        />

        <Field
          name="password_confirm"
          label="Confirmar Senha"
          secure
          component={TextInput}
          validate={confirm}
        />

        <Button full
          primary
          style={{marginTop: 16, marginBottom: 16 }}
          onPress={handleSubmit}
          disabled={pristine || invalid || submitting}
        >
          <Text>CRIAR MINHA CONTA</Text>
        </Button>
      </View>
    )
  }
}


const form = 'guestRegister'

RegisterForm = reduxForm({
  form
})(RegisterForm)

const selector = formValueSelector(form)

function mapStateToProps(state) {
  const sindicate = selector(state, 'sindicate')

  const sindicateCities = !!sindicate && sindicate.cities
  const hasMoreCities = sindicateCities && sindicateCities.length > 1

  return {
    hasMoreCities,
    sindicateCities
  }
}

export default connect(mapStateToProps)(RegisterForm)
