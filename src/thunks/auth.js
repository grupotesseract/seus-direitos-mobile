import {fetchAuthLogin, errorAuthLogin} from '../actions/auth'
import storage from '../utils/storage'
import {createUser, validateCredentials} from '../api/auth'
import {SubmissionError} from 'redux-form'

export const login = (data, nav) => async dispatch => {
  // const response = await validateCredentials(data)
  const response = {
    data: {
      success: true,
      name: data.email,
      accepted: true,
      access_token: 'ba@m234iom5io3m234234asd25ymio4ym'
    }
  }

  if (!response.success) {
    dispatch(errorAuthLogin())
    throw new SubmissionError('Erro: Credenciais de acesso inválidas.')
  }

  await storage.save('access_token', response.access_token)

  dispatch(fetchAuthLogin(response))

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
    throw new SubmissionError('Erro ao criar conta')
  }

  await storage.save('access_token', response.access_token)
  dispatch(fetchAuthLogin(response))
}