import React from 'react'
import {
  Text,
  View,
  Button,
  Linking
} from 'react-native'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>This is Home Screen</Text>
        <Button
          title='This is button'
          // onPress={() => Linking.openURL('https://youtu.be/OEHgpz51M3U?t=4m16s')}
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    )
  }
}
