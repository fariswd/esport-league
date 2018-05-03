import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Badge } from 'react-native-elements'

import MenuIcon from './MenuIcon'

export default function Header(props) {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      }}>
      <View style={{
        width: 310,
        height: 35,
        paddingHorizontal: 5,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: 'gray',
        backgroundColor: 'white',
        }}>
        <MenuIcon name='menu' size={25} color='#666' onPress={() => props.drawerOpen()} />
        <TouchableOpacity
          onPress={() => props.searchOpen()}
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <MenuIcon name='search' size={25} color='#666' onPress={() => props.searchOpen()} />
          <Text>Cari disini</Text>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'center'}}>
        <MenuIcon name='notifications' size={25} color='#666' onPress={() => props.notificationOpen()} />
        <View style={{position: 'absolute', right: 0, top: 0, borderRadius: 5, height: 10, width: 10, backgroundColor: '#666'}} />
      </View>
    </View>
  )
}
