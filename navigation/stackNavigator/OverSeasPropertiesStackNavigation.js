import { TransitionPresets, createStackNavigator } from 'react-navigation-stack'

import Color from '../../constants/Colors'
import OverSeasProperties from '../../screen/overSeasProperties/OverSeasProperties'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'

const OverSeasPropertiesStackNavigator = createStackNavigator(
  {
    Dubai_Properties: {
      screen: OverSeasProperties,
    },
  },
  {
    mode: 'modal',
    defaultNavigationOptions: {
      gestureEnabled: true,
      cardOverlayEnabled: true,
      ...TransitionPresets.ModalPresentationIOS,
      headerTransparent: true,
    },
  }
)
const OverSeasPropertiesStackNavigation = createAppContainer(
  OverSeasPropertiesStackNavigator
)
export default OverSeasPropertiesStackNavigation
