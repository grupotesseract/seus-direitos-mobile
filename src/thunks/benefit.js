import {loadSindicateBenefits, errorSindicateBenefits, fetchSindicateBenefits} from "../actions/benefit";
import {getSindicateBenefits, toggle} from '../api/benefit'
import {setUserData} from "../actions/auth";

export const toggleContribution = (value) => dispatch => {
  toggle()

  dispatch(setUserData({ aceitou_contribuicao: !value }))
}

export const requestSindicateBenefits = (id) => async dispatch => {
  dispatch(loadSindicateBenefits())
  const response = await getSindicateBenefits(id)

  if (!response.data) {
    return dispatch(errorSindicateBenefits())
  }

  return dispatch(fetchSindicateBenefits(response.data))
}
