import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import { Button, Text, H2 } from 'native-base'
import SeusDireitos from '../../components/seus-direitos'
import Title from '../../components/title'

class Wizard extends React.Component {
    constructor(props) {
        super(props)

        this.handlePress = this.handlePress.bind(this)
    }

    handlePress () {
        this.props.navigation.navigate('GuestWizardNext')
    }

    render () {
        const styles = StyleSheet.create({
            container: {
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1
            },
            btnNext: {
                backgroundColor: 'white',
                // // width: 200,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
                // paddingLeft: 15,
                // paddingRight: 15,
                // paddingTop: 20,
                // paddingBottom: 20,
                // display: 'flex'
            },
            btnNextText: {
                color: '#006699',
                fontSize: 26,
                display: 'flex'
            }
        })

        return (
            <ImageBackground style={styles.container} source={require('../../../assets/icons/begin_screen_bg.png')}>

                <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingBottom: 40 }}>
                    <View style={{ height: 200, alignItems: 'center', justifyContent: 'center' }}>
                        <SeusDireitos />
                    </View>
                    <View style={{justifyContent: 'flex-end', paddingBottom: 30, paddingRight: 60, paddingLeft: 60, flex: 1, flexDirection: 'column', width: '100%' }}>
                        {/* <Text style={{ fontSize: 18, textAlign: 'center', color: '#95989A' }}>
                            Um olhar mais humano e simples sobre as leis
                        </Text> */}
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Button style={styles.btnNext} onPress={this.handlePress}>
                            <Text uppercase style={styles.btnNextText}>Começar</Text>
                        </Button>
                    </View>
                </View>

            </ImageBackground>
        )
    }
}

Wizard.navigationOptions = {
    header: null
}

export default Wizard
