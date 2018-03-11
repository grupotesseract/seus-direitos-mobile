import {
  VIDEOS_REQUEST_FULFILLED,
  VIDEOS_REQUEST_PENDING,
  VIDEOS_REQUEST_REJECTED,
} from './types';

export const fetchVideos = payload => {
  return {
    type: VIDEOS_REQUEST_FULFILLED,
    payload
  }
}

export const loadVideos = () => {
  return {
    type: VIDEOS_REQUEST_PENDING
  }
}

export const errorVideos = () => {
  return {
    type: VIDEOS_REQUEST_REJECTED,
  }
}
