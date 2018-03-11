import {
  AUTH_LOGIN_FULFILLED,
  AUTH_LOGIN_REJECTED,
  AUTH_REGISTER_FULFILLED,
  AUTH_REGISTER_REJECTED,
  USER_SET_DATA,
} from './types';

export const fetchAuthLogin = payload => {
  return {
    type: AUTH_LOGIN_FULFILLED,
    payload
  }
}

export const errorAuthLogin = () => {
  return {
    type: AUTH_LOGIN_REJECTED
  }
}

export const fetchAuthRegister = payload => {
  return {
    type: AUTH_REGISTER_FULFILLED,
    payload
  }
}


export const errorAuthRegister = (payload) => {
  return {
    type: AUTH_REGISTER_REJECTED,
    payload
  }
}

export const setUserData = payload => {
  return {
    type: USER_SET_DATA,
    payload
  }
}
