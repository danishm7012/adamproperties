import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Dimensions, Platform } from 'react-native'
import { DrawerItems, createDrawerNavigator } from 'react-navigation-drawer'
import React, { useState } from 'react'

import AboutStackNavigation from '../stackNavigator/AboutStackNavigation'
import CareerStackNavigation from '../stackNavigator/CareerStackNavigation'
import Color from '../../constants/Colors'
import ContactUsStackNavigation from '../stackNavigator/ContactUsStackNavigation'
import FAQStackNavigation from '../stackNavigator/FAQStackNavigation'
import { Ionicons } from '@expo/vector-icons'
import OurCompaniesStackNavigation from '../stackNavigator/OurCompaniesStackNavigation'
import OverSeasPropertiesStackNavigation from '../stackNavigator/OverSeasPropertiesStackNavigation'
import PackegesStackNavigation from './../stackNavigator/PackegesStackNavigation'
import ProjectsStackNavigation from '../stackNavigator/ProjectsStackNavigation'
import PropertiesCategoryStackNavigation from '../stackNavigator/propertyStack/PropertiesCategoryStackNavigation'
import { ScrollView } from 'react-native-gesture-handler'
import TermandConditionStackNavigation from '../stackNavigator/TermandConditionStackNavigation'
import { TransitionPresets } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

const MainDrawerNavigator = createDrawerNavigator(
  {
    Properties_Category: {
      screen: PropertiesCategoryStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='home' size={25} color={Color.title} />
        ),

        drawerLabel: 'Home',
      },
    },
    Projec_ts: {
      screen: ProjectsStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='albums-sharp' size={25} color={Color.title} />
        ),
        drawerLabel: 'Projects',
      },
    },
    Ourseas_Properties: {
      screen: OverSeasPropertiesStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='business' size={25} color={Color.title} />
        ),
        drawerLabel: 'Ourseas Properties',
      },
    },
    Car_eer: {
      screen: CareerStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='create' size={25} color={Color.title} />
        ),
        drawerLabel: 'Career',
      },
    },

    Sign_In: {
      screen: PackegesStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='lock-closed' size={29} color={Color.title} />
        ),
        drawerLabel: 'SignIn',
      },
    },

    OurCompanies: {
      screen: OurCompaniesStackNavigation,
      navigationOptions: {
        drawerIcon: () => <Ionicons name='man' size={29} color={Color.title} />,
        drawerLabel: 'Our Companies',
      },
    },

    About: {
      screen: AboutStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons
            name='information-circle-sharp'
            size={29}
            color={Color.title}
          />
        ),
        drawerLabel: 'AboutUs',
      },
    },

    ContactUs: {
      screen: ContactUsStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='call-sharp' size={25} color={Color.title} />
        ),
        drawerLabel: 'ContactUs',
      },
    },

    TermCondition: {
      screen: TermandConditionStackNavigation,
      navigationOptions: {
        drawerIcon: () => (
          <Ionicons name='reader-sharp' size={25} color={Color.title} />
        ),
        drawerLabel: 'Term&Condition',
      },
    },

    FandQ: {
      screen: FAQStackNavigation,

      navigationOptions: {
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
        drawerIcon: () => (
          <Ionicons name='hand-left-sharp' size={25} color={Color.title} />
        ),
        drawerLabel: 'FAQ',
      },
    },
  },

  {
    contentComponent: (props) => {
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView
            style={{ flex: 1 }}
            forceInset={{ top: '', horizontal: 'never' }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: Color.logoBack,
                borderBottomRightRadius: 70,
                borderBottomLeftRadius: 50,
              }}
            >
              <View style={styles.drawerLogo}>
                <Image
                  style={{ flex: 0.9, width: '80%', resizeMode: 'contain' }}
                  source={require('../../assets/adamlogo.png')}
                />
              </View>
            </View>

            <DrawerItems {...props} />
          </SafeAreaView>
        </ScrollView>
      )
    },

    // drawerWidth: Dimensions.get('window').width * 1,
    drawerBackgroundColor: Color.drawerBack,
    // width: Dimensions.get('window').width * 2,
    contentOptions: {
      activeTintColor: Color.title,

      //  activeBackgroundColor : Color.accentColour,
      inactiveTintColor: Color.inactiveTitle,
      itemsContainerStyle: {
        marginVertical: 55,
      },

      labelStyle: {
        fontFamily: 'open-sans',
        fontSize: 18,
      },

      itemStyle: {
        marginVertical: 10,
      },
    },
  }
)
export default createAppContainer(MainDrawerNavigator)

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  drawerLogo: {
    flex: 1,
    height: 100,
    alignItems: 'center',
    marginTop: 120,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  cardContainer: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',

    fontWeight: '400',
    borderBottomColor: '#C0C0C0',
    backgroundColor: '#10d300',
    borderBottomWidth: 2,
    textTransform: 'uppercase',
    letterSpacing: 2,
    padding: 10,
  },
  body: {
    fontSize: 20,
    lineHeight: 20 * 1.9,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#C0C0C0',
    borderRadius: 15,
  },
  subCategoriesList: {
    marginTop: 10,
    marginBottom: 10,
  },
})
