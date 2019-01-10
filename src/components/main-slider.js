import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import ImageSlider from 'react-native-image-slider';


class MainSlider extends Component {
    constructor(props) {
        super(props);
    }

    carregaPropagandas = (propagandas) => {
        return propagandas.map((item, key) => {
            return item.url
        });
    }

    render() {
        const styles = {
            wrapper: {
                display: 'flex',
                width: '100%',
                backgroundColor: 'transparent',
                height: 150
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
            <ImageSlider
                loopBothSides
                autoPlayWithInterval={3000}
                images={this.carregaPropagandas( this.props.propagandas )}
            />
        )
    }
}

export default MainSlider;
