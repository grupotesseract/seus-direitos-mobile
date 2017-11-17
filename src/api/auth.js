import axios from '../utils/axios'

export const validateCredentials = (credentials) => {
  return axios.post('login', credentials)
}

export const createUser = (data) => {
  return axios.post('register', data)
}