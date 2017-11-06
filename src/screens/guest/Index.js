import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import seusDireitosImage from '../../../assets/icons/seus-direitos.png'
import Video from '../../components/video'
import MainView from '../../components/main'
import Title from '../../components/title'
import Button from '../../components/button'

const styles = StyleSheet.create({
  img: {
    width: 80,
    height: 100,
    resizeMode: Image.resizeMode.contain
  },
  container: {
    padding: 16,
  },
  alignCenter: {
    alignItems: 'center'
  }
})

export default function () {
  return (
    <MainView>
      <View style={[styles.container, styles.alignCenter]}>
        <Image source={seusDireitosImage} style={styles.img} />
        <Title type="header" align="center" color="#404040">SEUS DIREITOS</Title>
        <Title type="subheader" color="#6198D8" style={{ marginVertical: 10 }}>CONVENÇÀO COLETIVA DE TRABALHO</Title>
        <Title>Não conhece nossa missão ?</Title>
        <Title>Assista nosso vídeo de apresentação</Title>
      </View>

      <Video uri='http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' />
      <View style={styles.container}>
        <Button type="accent" raised title="QUERO ME REGISTRAR" style={{ marginVertical: 10 }} />
        <Button type="primary" raised title="ACESSAR MINHA CONTA" />
      </View>
    </MainView>
  )
}
