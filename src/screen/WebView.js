import React from 'react'
import { WebView } from 'react-native'

export default class WebViewScreen extends React.Component {
  render() {
    const {
      matchId,
      type,
    } = this.props.navigation.state.params
    switch (type) {
      case 'opendota':
        return (
          <WebView
            source={{uri: `https://www.opendota.com/matches/${matchId}/overview`}}
          />
        )
      case 'dotabuff':
        return (
          <WebView
            source={{uri: `https://www.dotabuff.com/matches/${matchId}`}}
          />
        )
      default:
        return null
    }
  }
}
