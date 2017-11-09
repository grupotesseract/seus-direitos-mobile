import React from 'react'
import { Text, H1, H3 } from 'native-base'

export default function ({ text = '', color = '#777', type  = null, align = 'left', gutterBottom = false, style }) {
  const styles = {
    color,
    textAlign: align,
    marginBottom: gutterBottom ? 10 : 0,
    fontFamily: !type ? 'roboto' : 'roboto-mono-bold',
    ...style
  }

  if (type === 'header') {
    return <H1 style={styles}>{text}</H1>
  }

  if (type === 'subheader') {
    return <H3 style={[styles, { fontSize: 18 }]}>{text}</H3>
  }

  return <Text style={styles}>{text}</Text>
}