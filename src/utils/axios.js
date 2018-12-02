import axios from 'axios'
import storage from './storage'
import _get from 'lodash/get'

export default function () {
    const instance = axios.create({
        // baseURL:'https://www.seusindicato.com.br/api/',
        baseURL:'https://seusindicato.grupotesseract.com.br/api',
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

  return instance
}
