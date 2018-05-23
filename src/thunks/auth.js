import {fetchAuthLogin, errorAuthLogin} from '../actions/auth'
import storage from '../utils/storage'
import {createUser, validateCredentials} from '../api/auth'
import {SubmissionError} from 'redux-form'
import _get from 'lodash/get'

export const login = (credentials) => async dispatch => {
  const response = await validateCredentials(credentials)

  const token = _get(response, 'success.token', null)
  if (!token || response.error) {
    dispatch(errorAuthLogin())
    throw new SubmissionError({ _error: 'Erro: Credenciais de acesso inválidas.' })
  }

  await storage.save('access_token', token)

  return dispatch(fetchAuthLogin(response.data))
}

export const logout = (nav) => async dispatch => {
  await storage.delete('access_token')
  dispatch(errorAuthLogin())

  return nav.navigate('GuestWizardNext')
}

export const register = (values) => async dispatch => {
  const data = {
    ...values,
    sindicato_id: values.sindicate.id,
    cidade_id: values.sindicate.cities.length === 1 ? values.sindicate.cities[0].id : values.city.id
  }

  const response = await createUser(data)

  if (response.error) {
    throw new SubmissionError(response.error)
  }

  await storage.save('access_token', response.success.token)
  dispatch(fetchAuthLogin(data))
}