import React from 'react'
import { DrawerNavigator } from 'react-navigation'

import HomeScreen from '../screen/HomeScreen'
import ProfileScreen from '../screen/ProfileScreen'
import Drawer from '../component/Drawer'
import RootNavigation from './RootNavigation'

export default DrawerNavigator({
    Home: {
      screen: RootNavigation,
    },
    Profile: {
      screen: ProfileScreen,
    }
  },{
    contentComponent: props => <Drawer {...props} />,
    lockMode: "locked-closed",
  },
)
