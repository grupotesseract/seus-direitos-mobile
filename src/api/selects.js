import axios from '../utils/axios'

export const getSindicates = () => {
  return axios().get('sindicatos')
    .then(res => {
      const {data: {data, success}} = res

      if (!success) {
        throw new Error()
      }

      return data.map(sindicate => {
        return {
          id: sindicate.id,
          name: sindicate.nome,
          cities: sindicate.cidades && sindicate.cidades.map(city => {
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
