import axios from 'axios'
import storage from './storage'
import _get from 'lodash/get'

export default function () {
  const instance = axios.create({
    baseURL:'https://seusindicato.grupotesseract.com.br/api/',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  })

  instance.interceptors.request.use(async function(config){
    const token = await storage.load('access_token')
    if(token){
      config.headers.common['Authorization'] = `Bearer ${token}`
    }
    return config
  })

  // instance.interceptors.response.use(async function (response) {
  //   const newAccessToken = _get(response, 'headers.authorization')
  //   if (newAccessToken) {
  //     await storage.save('access_token', newAccessToken)
  //   }
  //
  //   return response
  // }, function (error) {
  //   if (error.response && error.response.status === 401) {
  //     storage.delete('access_token')
  //   }
  //
  //   console.log('REQUEST error', error);
  //   return Promise.reject(error)
  // })

  return instance
}
