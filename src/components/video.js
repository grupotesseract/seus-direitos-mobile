import React from 'react'
import {TouchableHighlight, Image, View} from 'react-native'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import {Video as ExpoVideo} from 'expo'
import { SCREEN_WIDTH } from '../utils/constants'
import playButton from '../../assets/icons/play-button.png'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: SCREEN_WIDTH,
    height: 200
  },
  playBtn: {
    zIndex: 2,
    position: 'absolute',
    width: 100,
    height: 100
  }
})

class Video extends React.Component {
  state = {
    play: false
  }

  render() {
    const { uri } = this.props
    const { play } = this.state

    return (
      <TouchableHighlight onPress={() => this.setState({ play: !play })}>
        <View style={styles.container}>
          { !play && <Image source={playButton} style={styles.playBtn} /> }
          <ExpoVideo
            source={{ uri }}
            rate={1.0}
            volume={1.0}
            muted={false}
            resizeMode="cover"
            repeat
            shouldPlay={play}
            style={styles.video}
          />
        </View>
      </TouchableHighlight>
    )
  }
}

Video.defaultProps = {
  play: false
}
Video.propTypes = {
  uri: PropTypes.string.isRequired,
  play: PropTypes.bool.isRequired,
}

export default Video
