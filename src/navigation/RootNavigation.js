import React from 'react'
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screen/Home'
import ProfileScreen from '../screen/Profile'
import SearchScreen from '../screen/Search'
import DetailScreen from '../screen/Detail'
import NotificationScreen from '../screen/Notification'
import WebViewScreen from '../screen/WebView'

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
    Detail: {
      screen: DetailScreen,
    },
    Notification: {
      screen: NotificationScreen,
    },
    WebView: {
      screen: WebViewScreen,
    },
  }, {
    initialRouteName: 'Home',
  }
)

export default RootNavigation
