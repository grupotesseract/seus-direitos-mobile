import {
  AUTH_LOGIN_REJECTED,
  AUTH_LOGIN_FULFILLED,
  USER_SET_DATA,
  AUTH_REGISTER_FULFILLED,
  AUTH_REGISTER_REJECTED,
} from "../actions/types";

const INITIAL_STATE = {
  current: null,
  error: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_REGISTER_FULFILLED:
    case AUTH_LOGIN_FULFILLED: {
      return {
        ...state,
        ...INITIAL_STATE,
        current: action.payload,
      }
    }
    case AUTH_REGISTER_REJECTED:
    case AUTH_LOGIN_REJECTED: {
      return {
        ...state,
        ...INITIAL_STATE,
        error: action.payload,
      }
    }
    case USER_SET_DATA: {
      const data = action.payload

      return {
        ...state,
        current: {
          ...state.current,
          ...data
        }
      }
    }
    default:
      return state;
  }
}
