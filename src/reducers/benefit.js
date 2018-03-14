import {
  SINDICATE_BENEFITS_REQUEST_FULFILLED,
  SINDICATE_BENEFITS_REQUEST_PENDING,
  SINDICATE_BENEFITS_REQUEST_REJECTED,
} from '../actions/types'

const INITIAL_STATE = {
  list: {
    data: [],
    fetching: false,
    error: null,
  },
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SINDICATE_BENEFITS_REQUEST_PENDING: {
      return {
        ...state,
        list: {
          ...state.list,
          fetching: true,
          error: null,
        }
      }
    }
    case SINDICATE_BENEFITS_REQUEST_REJECTED: {
      return {
        ...state,
        list: {
          ...state.list,
          data: [],
          fetching: false,
          error: action.payload,
        }
      }
    }
    case SINDICATE_BENEFITS_REQUEST_FULFILLED: {
      return {
        ...state,
        list: {
          ...state.list,
          data: action.payload,
          fetching: false,
          error: null,
        }
      }
    }
    default:
      return state
  }
}
