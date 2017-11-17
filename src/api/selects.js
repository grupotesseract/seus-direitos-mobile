import axios from '../utils/axios'

export const getSindicates = () => {
  return axios.get('sindicatos')
    .then(res => {
      const {data: {success, data}} = res

      if (!success) {
        throw new Error()
      }

      return data.data.map(sindicate => {
        return {
          id: sindicate.id,
          name: sindicate.nome,
          cities: sindicate.cidades.map(city => {
            return {
              id: city.id,
              name: `${city.nome} (${city.sigla_estado})`,
            }
          })
        }
      })
    })
    .catch(err => {
      return []
    })
}
