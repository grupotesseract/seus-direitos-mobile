import React from 'react'
import {Button} from 'react-native-elements'

export default function (props) {

  if (props.type === 'primary') {
    return <Button
      {...props}
      raised
      fontSize={16}
      fontFamily="roboto-mono-bold"
      color="white"
      backgroundColor="#6198D8"
      containerViewStyle={{ shadowColor: 'transparent' }}
      buttonStyle={{ borderRadius: 2, borderWidth: 1, borderColor: '#6198D8' }}
    />
  }

  return <Button
    {...props}
    raised
    fontSize={16}
    fontFamily="roboto-mono-bold"
    color="#6198D8"
    backgroundColor="white"
    containerViewStyle={{ shadowColor: 'transparent' }}
    buttonStyle={{ borderRadius: 2, borderWidth: 1, borderColor: '#6198D8' }}
  />
}