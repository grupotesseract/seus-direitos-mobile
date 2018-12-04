import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import Slick from 'react-native-slick';


class MainSlider extends Component {
    constructor(props) {
        super(props);
    }

    carregaPropagandas = (propagandas) => {
        return propagandas.map((item, key) => {
            console.log(item.url);
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#9DD6EB' }}>
                <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>Hello Slick</Text>
                {/* <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://res.cloudinary.com/fernandes/image/upload/q_auto/propaganda_1543269331.jpeg' }} /> */ }
            </View>
        });
    }

    render() {
        const styles = {
            wrapper: {
                display: 'flex',
                width: '100%',
                backgroundColor: '#000',
            },
            slide1: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#9DD6EB'
            },
            slide2: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#97CAE5'
            },
            slide3: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#92BBD9'
            },
            text: {
                color: '#fff',
                fontSize: 30,
                fontWeight: 'bold'
            }
        }

        return (
            <Slick style={styles.wrapper} hideButtons>
                {this.props.propagandas.map((item, key) => {
                    return (
                        <View key={key} style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch', backgroundColor: '#000', height: 200 }}>
                            <Image style={{ flex: 1, width: null, height: null }} source={{ uri: item.url }} />
                        </View>
                    )
                })}
            </Slick>
        )
    }
}

export default MainSlider;
