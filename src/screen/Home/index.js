import React from 'react'
import {
  Text,
  View,
  Button,
  Linking,
  StatusBar,
} from 'react-native'

import Header from './component/Header'
import ModalPopup from '../../component/ModalPopup'
import ListItems from '../../component/ListItems'

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
          notificationOpen={() => this.props.navigation.navigate('Notification')}
        />
        <ListItems navigation={this.props.navigation} />
        {/* <Button
          title='This is button'
          // onPress={() => Linking.openURL('https://youtu.be/OEHgpz51M3U?t=4m16s')}
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <ModalPopup /> */}
      </View>
    )
  }
}
