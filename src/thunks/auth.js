import {fetchAuthLogin, errorAuthLogin} from '../actions/auth'
import storage from '../utils/storage'
import {createUser, getCurrentUser, validateCredentials} from '../api/auth'
import {SubmissionError} from 'redux-form'
import _get from 'lodash/get'

export const login = (credentials, nav) => async dispatch => {
  const response = await validateCredentials(credentials)

  const token = _get(response, 'success.token', null)
  if (!token) {
    dispatch(errorAuthLogin())
    throw new SubmissionError('Erro: Credenciais de acesso inválidas.')
  }

  await storage.save('access_token', token)

  const userResponse = await getCurrentUser()

  if (!userResponse) {
    await storage.delete('access_token')
    dispatch(errorAuthLogin())
    throw new SubmissionError('Erro: Credenciais de acesso inválidas.')
  }


  dispatch(fetchAuthLogin(userResponse))

  dispatch(nav.navigate('MemberIndex'))
}

export const logout = (nav) => async dispatch => {
  await storage.delete('access_token')
  dispatch(errorAuthLogin())

  dispatch(nav.navigate('GuestLogin'))
}

export const register = (values) => async dispatch => {
  const data = {
    ...values,
    sindicato_id: values.sindicate.id,
    cidade_id: values.sindicate.cities.length === 1 ? values.sindicate.cities[0].id : values.city.id
  }

  const response = await createUser(data)

  if (!response.success) {
    throw new SubmissionError('Erro: Houve um problema inesperado ao criar conta.')
  }

  await storage.save('access_token', response.access_token)
  dispatch(fetchAuthLogin(response))
}