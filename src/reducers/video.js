import {
  VIDEOS_REQUEST_FULFILLED,
  VIDEOS_REQUEST_PENDING,
  VIDEOS_REQUEST_REJECTED,
  VIDEO_UPDATE_FULFILLED,
} from '../actions/types'

const INITIAL_STATE = {
  list: {
    data: [],
    fetching: false,
    error: null,
    count: 0,
  },
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case VIDEOS_REQUEST_PENDING: {
      return {
        ...state,
        list: {
          ...state.list,
          fetching: true,
          error: 0
        }
      }
    }
    case VIDEOS_REQUEST_REJECTED: {
      return {
        ...state,
        list: {
          ...state.list,
          data: [],
          fetching: false,
          error: action.payload,
          count: null,
        }
      }
    }
    case VIDEOS_REQUEST_FULFILLED: {
      return {
        ...state,
        list: {
          ...state.list,
          data: [
            ...state.list.data,
            ...action.payload.data,
          ],
          count: action.payload.count,
          fetching: false,
          error: null,
        }
      }
    }
    default:
      return state
  }
}
