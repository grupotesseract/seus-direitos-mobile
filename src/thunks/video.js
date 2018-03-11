import {loadVideos, errorVideos, fetchVideos} from "../actions/video";
import {getVideos} from '../api/video'

export const requestVideos = (data) => async dispatch => {
  dispatch(loadVideos())

  const response = await getVideos(data)

  if (!response.success) {
    return dispatch(errorVideos())
  }

  return dispatch(fetchVideos(response))
}
