import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

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
          <MenuIcon name='search' size={25} color='#666' onPress={() => console.log('kepencet bos')} />
          <Text>Cari disini</Text>
        </TouchableOpacity>
      </View>
      <MenuIcon name='home' size={25} color='#666' onPress={() => console.log('kepencet bos')} />
    </View>
  )
}
