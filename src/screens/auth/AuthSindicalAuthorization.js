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

function AuthSindicalAuthorization (props) {
  return (
    <MainView>
      <View style={styles.mt}>
        <Video uri='http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' />
      </View>

      <Content style={[styles.paddingH, styles.mt]}>
        <Button
          full
          primary
          onPress={() => props.navigation.navigate('Login')}
        >
          <Text uppercase style={styles.white}>AUTORIZAR CONTRIBUIÇÃO</Text>
        </Button>
      </Content>
    </MainView>
  )
}

AuthSindicalAuthorization.navigationOptions = {
  headerMode: 'screen',
  title: 'Por quê contribuir?',
  headerStyle: {
    padding: 0,
    backgroundColor: 'white',
    borderBottomWidth: 0,
  }
}

export default AuthSindicalAuthorization