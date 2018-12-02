import axios from "../utils/axios";
import mockedVideos from './mocks/videos'

export const getVideos = (data) => {
  return axios().get('home', { params: data })
    .then(res => res.data)
    .catch(err => err.response)
}

export const getFeaturedVideo = () => {
  return axios().get('home')
    .then(res => res.data)
    .catch(err => err.response)
}
