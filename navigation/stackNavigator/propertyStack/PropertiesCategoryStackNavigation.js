import { Image, StyleSheet } from 'react-native'
import { TransitionPresets, createStackNavigator } from 'react-navigation-stack'

import CoOperator from '../../../screen/propertyDetail/CoOperator'
import Color from '../../../constants/Colors'
import Login from '../../../screen/loginSignup/Login'
import { Platform } from 'react-native'
import PropertiesCategory from '../../../screen/home/PropertiesCategory'
import PropertiesTopTabStackNavigation from '../../topnavigation/PropertiesTopTabNavigation'
import PropertyDetailRent from '../../../screen/propertyDetail/PropertyDetail'
import PropertyDetailSale from '../../../screen/propertyDetail/PropertyDetailSale'
import PropertyForm from '../../../screen/propertyDetail/PropertyForm'
import React from 'react'
import SignUp from '../../../screen/loginSignup/SignUp'
import { createAppContainer } from 'react-navigation'

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}

const PropertiesStackNavigator = createStackNavigator(
  {
    Propert_ies: {
      screen: PropertiesCategory,
    },
    Login_Screen: {
      screen: Login,
    },
    Sign_Up: {
      screen: SignUp,
    },
    Co_Operator: {
      screen: CoOperator,
    },
    Property_Detail_Rent: {
      screen: PropertyDetailRent,
    },
    Property_Detail_Sale: {
      screen: PropertyDetailSale,
    },
    Property_Form: {
      screen: PropertyForm,
    },
  },
  {
    mode: 'modal',
    defaultNavigationOptions: {
      gestureEnabled: true,
      cardOverlayEnabled: true,
      ...TransitionPresets.ModalPresentationIOS,
      headerTransparent: true,
      //     headerTitleAlign:'center',

      //     // headerBackground:(
      //     //   <Image
      //     //   style={StyleSheet.absoluteFill}
      //     //   source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
      //     // />
      //     // ),
      //     headerStyle:{
      //   backgroundColor: Platform.OS==='android' ? '#fff' : '#fff',
      //   height: 100,

      // },
      //     headerTitleStyle:{
      //       fontFamily: "open-sans-bold",
      //         fontWeight: "200"
      //     },
      //       headerTintColor: 'white'
    },
  }
)
const PropertiesCategoryStackNavigation = createAppContainer(
  PropertiesStackNavigator
)
export default PropertiesCategoryStackNavigation
