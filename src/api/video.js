import axios from "../utils/axios";
import mockedVideos from './mocks/videos'

export const getVideos = ({ page, limit = 6 }) => {
  return new Promise((resolve) => {
    const from = (page*limit) - limit
    const to = page * limit

    resolve({
      success: true,
      data: mockedVideos.slice(from, to),
      count: mockedVideos.length
    })
  })

  return axios().get('videos', { params: data })
    .then(res => res.data)
    .catch(err => err.response)
}