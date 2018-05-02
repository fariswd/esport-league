import React from 'react'
import { DrawerNavigator } from 'react-navigation'

import Drawer from '../component/Drawer'
import RootNavigation from './RootNavigation'

export default DrawerNavigator({
    Root: { screen: RootNavigation },
  }, {
    contentComponent: props => <Drawer {...props} />,
    lockMode: "locked-closed",
  },
)
