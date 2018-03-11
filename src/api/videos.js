import axios from "../utils/axios";
import mockedVideos from './mocks/videos'
import util from 'util'

export const getVideos = (data = null) => {

  return util.promisify((data) => {
    const {page = 0, limit = 5} = data

    mockedVideos.slice(page)
  })

  return axios.get('videos', { params: data })
}