import axios from '../utils/axios'

export function toggle () {
  return axios().post('toggl')
    .then(res => res.data)
    .catch(err => err.response.data)
}

export function getSindicateBenefits (id) {
  return axios().get(`sindicatos/${id}/beneficios`)
    .then(res => res.data)
    .catch(err => err.response.data)
}