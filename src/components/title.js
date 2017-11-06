import React from 'react'
import {Text} from 'react-native-elements'

export default function ({ children, fontSize = 16, color = '#777', type  = null, align = 'left', style }) {
  if (type === 'header') fontSize = 28
  else if (type === 'subheader') fontSize = 18

  const styles = {
    color,
    fontSize,
    textAlign: align,
    ...style
  }

  return <Text fontFamily={!type ? 'roboto' : 'roboto-mono-bold'} style={styles}>{children}</Text>
}