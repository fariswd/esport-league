import React from 'react'
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screen/HomeScreen'
import ProfileScreen from '../screen/ProfileScreen'

const RootNavigation = StackNavigator({
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    }
  }, {
    initialRouteName: 'Home',
  }
)

export default RootNavigation
