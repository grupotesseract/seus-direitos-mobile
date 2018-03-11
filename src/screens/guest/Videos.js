import React from 'react'
import {connect} from 'react-redux'
import { WebView, Dimensions, View, FlatList } from 'react-native'
import { Text, H3 } from 'native-base'
import {requestVideos} from "../../thunks/video"

const {width} = Dimensions.get('window')

class Videos extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1
    }

    this.requestMoreItems = this.requestMoreItems.bind(this)
  }

  renderItem ({item}) {
    return (
      <View style={{ flex: 1, flexDirection: 'column', borderBottomWidth: 1, borderBottomColor: '#eee' }}>
        <H3 style={{ fontFamily: 'roboto-medium', paddingVertical: 16, flex: 1, textAlign: 'center' }}>
          {item.title}
        </H3>
        <WebView style={{ height: 300 }} source={{ uri: item.url }} />
        <Text style={{ fontFamily: 'roboto', padding: 24, flex: 2, textAlign: 'center', color: '#777' }}>
          {item.description}
          </Text>
      </View>
    )
  }

  requestMoreItems () {
    if (!this.props.count || this.props.videos.length <= this.props.count) {
      this.setState({
        page: this.state.page++
      }, () => this.props.requestVideos({ page: this.state.page++ }))
    }
  }

  renderError () {
    return <H3 style={{ padding: 50, textAlign: 'center', color: 'red' }}>Erro ao ler a lista de videos.</H3>
  }

  getKey (item) {
    return item.id
  }

  render () {
    const {videos, error} = this.props

    if (error) return this.renderError()
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <FlatList
          data={videos}
          keyExtractor={this.getKey}
          horizontal={false}
          numColumns={width > 480 ? 2 : 1}
          renderItem={this.renderItem}
          onEndReached={this.requestMoreItems}
          onEndReachedThreshold={0}
          extraData={this.state}
        />
      </View>
    )
  }
}

Videos.navigationOptions = {
  title: "Lista de Vídeos",
  headerMode: 'screen',
  headerStyle: {
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: '#6198D8',
    borderBottomWidth: 0,
  },
  headerTintColor: 'white',
}

function mapStateToProps (state) {
  return {
    videos: state.video.list.data,
    fetching: state.video.list.fetching,
    error: state.video.list.error,
    count: state.video.list.count,
  }
}

export default connect(mapStateToProps, {requestVideos})(Videos)