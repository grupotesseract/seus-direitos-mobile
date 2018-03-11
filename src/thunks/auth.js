import {fetchAuthLogin, errorAuthLogin} from '../actions/auth'
import storage from '../utils/storage'
import {validateCredentials} from '../api/auth'
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

  if (!response.data.success) {
    dispatch(errorAuthLogin())
    throw new SubmissionError('Erro: Credenciais de acesso inválidas.')
  }

  await storage.save('access_token', response.data.access_token)

  dispatch(fetchAuthLogin(response.data))

  dispatch(nav.navigate('MemberIndex'))
}

export const logout = (nav) => async dispatch => {
  await storage.delete('access_token')
  dispatch(errorAuthLogin())

  dispatch(nav.navigate('GuestLogin'))
}