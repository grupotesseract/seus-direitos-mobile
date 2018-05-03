import React from 'react'
import {connect} from 'react-redux'
import { WebView, Dimensions, View, FlatList } from 'react-native'
import { Text, H3 } from 'native-base'
import {requestVideos} from "../../thunks/video"
import {STATUS_BAR_HEIGHT} from "../../utils/constants";

const {width} = Dimensions.get('window')

class Videos extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 0
    }

    this.requestMoreItems = this.requestMoreItems.bind(this)
  }

  renderItem ({item}) {
    return (
      <View style={{ flex: 1, flexDirection: 'column', borderBottomWidth: 1, borderBottomColor: '#eee' }}>
        <H3 style={{ fontFamily: 'roboto-medium', paddingVertical: 16, flex: 1, textAlign: 'center' }}>
          {item.titulo}
        </H3>
        <WebView style={{ height: 300 }} source={{ uri: 'https://www.youtube.com/embed/' + item.youtube_id }} />
        <Text style={{ fontFamily: 'roboto', padding: 24, flex: 2, textAlign: 'center', color: '#777' }}>
          {item.descricao}
          </Text>
      </View>
    )
  }

  componentDidMount() {
    this.props.requestVideos(this.state.page)
  }

  requestMoreItems () {
    if (this.props.hasMore) {
      this.props.requestVideos(this.state.page + 1)
      this.setState({
        page: this.state.page + 1
      })
    }
  }

  renderError () {
    return <H3 style={{ padding: 50, textAlign: 'center', color: 'red' }}>Erro ao ler a lista de videos.</H3>
  }

  renderNoVideos () {
    return <H3 style={{ padding: 24, textAlign: 'center' }}>Nenhum vídeo cadastrado.</H3>
  }

  getKey (item) {
    return `video-${item.id}`
  }

  render () {
    const {videos, hasMore, error} = this.props

    if (error) return this.renderError()
    if (!hasMore && !videos.length) return this.renderNoVideos()

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
          extraData={this.state.page}
        />
      </View>
    )
  }
}

Videos.navigationOptions = {
  title: "Lista de Vídeos",
  headerMode: 'screen',
  headerStyle: {
    marginTop: -STATUS_BAR_HEIGHT,
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
    hasMore: state.video.list.hasMore,
  }
}

export default connect(mapStateToProps, {requestVideos})(Videos)