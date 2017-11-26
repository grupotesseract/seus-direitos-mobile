import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Title from './title'

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 100,
    resizeMode: Image.resizeMode.contain,
    marginBottom: 16
  },
  margin: {
    marginVertical: 16
  },
  container: {
    alignItems: 'center'
  }
})

export default function ({ noMargin = false, noTitle = false }) {
  return (
    <View style={[styles.container, !noMargin && styles.margin]}>
      <Image source={require('../../assets/icons/seus-direitos.png')} style={styles.img} />
      { !noTitle &&
        <Title
          type="subheader"
          align="center"
          color="#6198D8"
          text="CONVENÇÃO COLETIVA DE TRABALHO"
        />
      }
    </View>
  )
}