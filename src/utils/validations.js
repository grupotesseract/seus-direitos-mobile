export const email = value => !value || !/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm.test(value)
  ? 'E-mail inválido!'
  : undefined

export const required = value => (value ? undefined : 'Campo obrigatório!')

export const confirm = (value, allValues, bola, name) => {
  const field = name.replace('_confirm', '')

  return allValues[field] === value ? undefined : 'Confirmação incorreta!'
}

export const min6 = value => value.length > 5 ? undefined : 'Este campo deve conter ao menos 6 caracteres!'
