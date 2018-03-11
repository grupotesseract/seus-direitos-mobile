import React from 'react'
import { StyleSheet, Platform } from 'react-native'
import MainView from '../../components/main'
import { Container, Content, View, Button, Text, Toast, Icon } from 'native-base';

const styles = StyleSheet.create({
  mt: {
    marginVertical: 8
  },
  paddingH: {
    paddingHorizontal: 16
  },
  white: {
    color: 'white',
    textAlign: 'center',
  },
  icon: {
    color: 'green',
    fontSize: Platform.OS === 'ios' ? 50 : 35,
    marginRight: 5
  },
  font: {
    fontFamily: 'roboto-medium',
    fontSize: 18,
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: '#020F50',
    marginVertical: 8
  }
})

function MemberSindicalAuthorization (props) {
  const handlePress = () => {
    props.navigation.goBack()
    Toast.show({
      text: 'Contribuição Autorizada com sucesso!',
      buttonText: 'Fechar',
      position: 'top',
      type: 'success',
      duration: 4000
    })
  }

  return (
    <MainView>
      <Content style={[styles.paddingH, styles.mt]}>
        <View style={styles.item}>
          <Icon ios='ios-checkmark' android="md-checkmark" style={styles.icon} />
          <Text style={styles.font}>Seu reajuste salarial</Text>
        </View>
        <View style={styles.item}>
          <Icon ios='ios-checkmark' android="md-checkmark" style={styles.icon} />
          <Text style={styles.font}>Sua bolsa de estudos</Text>
        </View>
        <View style={styles.item}>
          <Icon ios='ios-checkmark' android="md-checkmark" style={styles.icon} />
          <Text style={styles.font} allowFontScaling={false}>Gratuidade na mensalidade de seus filhos</Text>
        </View>
        <View style={styles.item}>
          <Icon ios='ios-checkmark' android="md-checkmark" style={styles.icon} />
          <Text style={styles.font}>Manutenção do seu plano de saúde</Text>
        </View>

        <Button
          full
          primary
          onPress={handlePress}
          style={styles.btn}
        >
          <Text uppercase style={styles.white}>AUTORIZAR CONTRIBUIÇÃO</Text>
        </Button>
      </Content>
    </MainView>
  )
}

MemberSindicalAuthorization.navigationOptions = {
  headerMode: 'screen',
  title: 'Por quê contribuir?',
  headerStyle: {
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: '#6198D8',
    borderBottomWidth: 0,
  },
  headerTintColor: 'white',
}

export default MemberSindicalAuthorization