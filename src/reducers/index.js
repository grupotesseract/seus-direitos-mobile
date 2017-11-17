import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import {AUTH_FAILED} from '../actions/types'

export default combineReducers({
  form: formReducer.plugin({
    loginForm: (state, action) => {
      switch(action.type) {
        case AUTH_FAILED: {
          return {
            ...state,
            fields: {
              ...state.fields,
              password: {
                ...state.fields.password,
                touched: false,
              }
            },
            values: {
              ...state.values,
              password: undefined,
            },
            registeredFields: {
              ...state.registeredFields,
              password: undefined,
            }
          }
        }
        default:
          return state
      }
    }
  })
});