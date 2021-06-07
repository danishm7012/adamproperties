import { TransitionPresets, createStackNavigator } from 'react-navigation-stack'

import Color from '../../constants/Colors'
import OurCompanies from '../../screen/ourCompanies/OurCompanies'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'

const OurCompaniesStackNavigator = createStackNavigator(
  {
    Our_Companies: {
      screen: OurCompanies,
    },
  },
  {
    mode: 'modal',
    defaultNavigationOptions: {
      gestureEnabled: true,
      cardOverlayEnabled: true,
      ...TransitionPresets.ModalPresentationIOS,
      //  headerTransparent: true,
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Color.primaryColor : Color.primaryColor,
      },
    },
  }
)
const OurCompaniesStackNavigation = createAppContainer(
  OurCompaniesStackNavigator
)
export default OurCompaniesStackNavigation
