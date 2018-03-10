import React from 'react'
import { Text, H1, H3 } from 'native-base'

export default function ({ text = '', color = '#777', type  = null, align = 'left', gutterBottom = false, style }) {
  const styles = {
    color,
    textAlign: align,
    marginBottom: gutterBottom ? 10 : 0,
    fontFamily: type === 'header' ? 'roboto-medium' : 'roboto',
    ...style
  }

  if (type === 'header') {
    return <H1 style={[styles, { color: '#6198D8' }]}>{text}</H1>
  }

  if (type === 'subheader') {
    return <H3 style={[styles, { fontSize: 18 }]}>{text}</H3>
  }

  return <Text style={styles}>{text}</Text>
}