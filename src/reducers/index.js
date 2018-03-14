import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import auth from './auth'
import video from './video'
import benefit from './benefit'

export default combineReducers({
  form,
  auth,
  video,
  benefit,
});