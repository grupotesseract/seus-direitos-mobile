import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text, Container, Content } from 'native-base'

const styles = StyleSheet.create({
    img: {
        width: 150,
        resizeMode: Image.resizeMode.contain,
    },
    containerView: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        backgroundColor: '#006699',
        paddingHorizontal: 15
    },
    container: {
        width: '100%'
    }
})

export default function ({ noMargin = false, noTitle = false }) {
    return (
        <View style={ styles.containerView }>
            <Image source={require('../../assets/icons/app_icon_longo.png')} style={styles.img} />
        </View>
    )
}
