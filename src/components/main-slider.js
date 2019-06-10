import React, { Component } from 'react';
import ImageSlider from 'react-native-image-slider';
import { View, Image, Dimensions } from 'react-native'

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
        const dimensions = Dimensions.get('window');
        return (
            <ImageSlider
                autoPlayWithInterval={3000}
                images={this.carregaPropagandas( this.props.propagandas )}
                customSlide={({ index, item, style, width }) => (
                    // It's important to put style here because it's got offset inside
                    <View key={index} style={[style]}>
                        <Image source={{ uri: item }} style={{height:(dimensions.width-40)/3, width: (dimensions.width-40), resizeMode: 'contain'}} />
                    </View>
                )}
            />
        )
    }
}

export default MainSlider;
