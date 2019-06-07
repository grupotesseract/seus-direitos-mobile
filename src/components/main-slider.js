import React, { Component } from 'react';
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
        return (
            <ImageSlider
                autoPlayWithInterval={3000}
                images={this.carregaPropagandas( this.props.propagandas )}
            />
        )
    }
}

export default MainSlider;
