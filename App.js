import React from 'react'
import { Provider } from 'react-redux'
import createStore from './utils/store'
import MainNavigator from './screens/MainNavigator'

const store = createStore()

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    )
  }
}

