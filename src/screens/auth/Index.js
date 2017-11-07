import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Title from '../../components/title'
import Video from '../../components/video'
import MainView from '../../components/main'
import { Container, Content, Button, Text } from 'native-base';
import hands from '../../../assets/icons/hands.png'
import news from '../../../assets/icons/news.png'
import talk from '../../../assets/icons/talk.png'
import vacation from '../../../assets/icons/vacation.png'

const styles = StyleSheet.create({
  mt: {
    marginVertical: 10
  },
  paddingH: {
    paddingHorizontal: 16
  },
  white: {
    color: 'white',
    textAlign: 'center',
  }
})

function AuthIndex (props) {
  return (
    <MainView>
      <View style={styles.mt}>
        <Title align="center" text="Lorem ipsum dolor sit amet" gutterBottom />
        <Video uri='http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' />
      </View>

      <Content style={[styles.paddingH, styles.mt]}>
        <Button
          full
          primary
          onPress={() => props.navigation.navigate('AuthSindicalAuthorization')}
        >
          <Text uppercase style={styles.white}>AUTORIZE SUA CONTRIBUIÇÃO SINDICAL</Text>
        </Button>

        <View style={{flex: 1, flexDirection: 'row', marginTop: 16 }}>
          <View style={{ flex: 1, borderColor: 'red', borderWidth: 1, borderTopLeftRadius: 8, alignItems: 'center' }}>
            <Image source={news} style={{ width: 150, height: 150, resizeMode: Image.resizeMode.contain }} />
          </View>
          <View style={{ flex: 1, borderColor: 'orange', borderWidth: 1, borderTopRightRadius: 8, alignItems: 'center' }}>
            <Image source={vacation} style={{ width: 150, height: 150, resizeMode: Image.resizeMode.contain }} />
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{ flex: 1, borderColor: 'purple', borderWidth: 1, borderBottomLeftRadius: 8, alignItems: 'center' }}>
            <Image source={talk} style={{ width: 150, height: 150, resizeMode: Image.resizeMode.contain }} />
          </View>
          <View style={{ flex: 1, borderColor: 'green', borderWidth: 1, borderBottomRightRadius: 8, alignItems: 'center' }}>
            <Image source={hands} style={{ width: 150, height: 150, resizeMode: Image.resizeMode.contain }} />
          </View>
        </View>
      </Content>
    </MainView>
  )
}

AuthIndex.navigationOptions = {
  header: null,
}

export default AuthIndex