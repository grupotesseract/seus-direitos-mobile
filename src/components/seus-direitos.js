import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import {Text} from 'native-base'

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
        alignItems: 'center',
        flex: 1,
    }
})

export default function ({ noMargin = false, noTitle = false }) {
    return (
        <View style={[styles.container, !noMargin && styles.margin]}>
            <Image source={require('../../assets/icons/logo_icon_white.png')} style={styles.img} />
        </View>
    )
}
