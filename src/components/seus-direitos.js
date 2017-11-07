import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Title from './title'

const styles = StyleSheet.create({
  img: {
    width: 80,
    height: 100,
    resizeMode: Image.resizeMode.contain,
  },
  margin: {
    marginVertical: 16
  },
  container: {
    alignItems: 'center'
  }
})

export default function ({ noMargin = false }) {
  return (
    <View style={[styles.container, !noMargin && styles.margin]}>
      <Image source={require('../../assets/icons/seus-direitos.png')} style={styles.img} />
      <Title
        type="header"
        align="center"
        color="#404040"
        text="SEUS DIREITOS"
        gutterBottom
      />
      <Title
        type="subheader"
        align="center"
        color="#6198D8"
        text="CONVENÇÀO COLETIVA DE TRABALHO"
      />
    </View>
  )
}