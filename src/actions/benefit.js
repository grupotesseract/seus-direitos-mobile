import {
  SINDICATE_BENEFITS_REQUEST_FULFILLED,
  SINDICATE_BENEFITS_REQUEST_PENDING,
  SINDICATE_BENEFITS_REQUEST_REJECTED,
} from './types';

export const fetchSindicateBenefits = payload => {
  return {
    type: SINDICATE_BENEFITS_REQUEST_FULFILLED,
    payload
  }
}

export const loadSindicateBenefits = () => {
  return {
    type: SINDICATE_BENEFITS_REQUEST_PENDING
  }
}

export const errorSindicateBenefits = () => {
  return {
    type: SINDICATE_BENEFITS_REQUEST_REJECTED,
  }
}
