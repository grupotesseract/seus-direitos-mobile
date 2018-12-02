import {
  VIDEOS_REQUEST_FULFILLED,
  VIDEOS_REQUEST_PENDING,
  VIDEOS_REQUEST_REJECTED,
} from '../actions/types'

const INITIAL_STATE = {
    list: {
        data: [],
        fetching: false,
        error: null,
        hasMore: true,
    },
    featured: null,
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case VIDEOS_REQUEST_PENDING: {
            return {
                ...state,
                list: {
                    ...state.list,
                    fetching: true,
                    error: null,
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
                    hasMore: true,
                }
            }
        }
        case VIDEOS_REQUEST_FULFILLED: {
            return {
                ...state,
                list: {
                    data: [
                        ...state.list.data,
                        ...action.payload.data,
                    ],
                    fetching: false,
                    error: null,
                    hasMore: action.payload.hasMore,
                }
            }
        }
        default:
        return state
    }
}
