import React from 'react'
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screen/Home'
import ProfileScreen from '../screen/Profile'
import SearchScreen from '../screen/Search'

const RootNavigation = StackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: { header: null },
    },
    Profile: {
      screen: ProfileScreen,
    },
    Search: {
      screen: SearchScreen,
    },
  }, {
    initialRouteName: 'Home',
  }
)

export default RootNavigation
