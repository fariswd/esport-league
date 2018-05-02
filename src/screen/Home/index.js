import React from 'react'
import {
  Text,
  View,
  Button,
  Linking,
  StatusBar,
} from 'react-native'

import Header from './component/Header'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <StatusBar
          barStyle="default"
          // translucent
        />
        <Header
          drawerOpen={() => this.props.navigation.navigate('DrawerOpen')}
          searchOpen={() => this.props.navigation.navigate('Search')}
        />
        <Button
          title='This is button'
          // onPress={() => Linking.openURL('https://youtu.be/OEHgpz51M3U?t=4m16s')}
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    )
  }
}
