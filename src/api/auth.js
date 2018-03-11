import axios from '../utils/axios'

export const validateCredentials = (credentials) => {
  return axios().post('login', credentials)
    .then(res => res.data)
    .catch(err => err.response.data)
}

export const createUser = (data) => {
  return axios().post('register', data)
}

export const getCurrentUser = () => {
  return axios().get('user')
    .then(res => res.data)
    .catch(err => err.response.data)
}