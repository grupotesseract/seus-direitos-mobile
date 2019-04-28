import {loadVideos, errorVideos, fetchVideos} from "../actions/video";
import {getVideos} from '../api/video'

export const requestVideos = (page = 0) => async dispatch => {
  dispatch(loadVideos())
  const req = {
    offset: page * 3,
    limit: 3
  }

  const response = await getVideos(req)

  if (!response.data) {
    return dispatch(errorVideos())
  }

  const data = {
    ...response,
    hasMore: Boolean(response.data.length)
  }

  return dispatch(fetchVideos(data))
}
