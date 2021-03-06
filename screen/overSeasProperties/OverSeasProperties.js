import { Avatar, Button, Card, Paragraph, Title } from 'react-native-paper'
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Text,
  View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Linking, ScrollView } from 'react-native'

import BuyerCategoryData from './../../data/BuyerCategoryData'
import Color from '../../constants/Colors'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import HeaderLogo from './../headerlogo/HeaderLogo'
import { Ionicons } from '@expo/vector-icons'
import PropertyTypes from '../../component/home/PropertyType'
import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const OverSeasProperties = (props) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            width: screenWidth,
            height: screenHeight / 3,
            backgroundColor: Color.primaryColor,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 120,
            }}
          >
            <Text style={{ fontSize: 24, color: '#fff', textAlign: 'center' }}>
              All Your Property Solutions At One Plateform
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            top: '-15%',
          }}
        >
          {/* <TabBar /> */}
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PropertyTypes
          title='Properties In Pakistan'
          serviceLogo={require('../../assets/AdamPropertiesImages/logos/commercial.png')}
          // webUrl=''
          onSelect={() => Linking.openURL('http://alhafeezproperties.com/')}
          //={() => {
          //   props.navigation.navigate({
          //     routeName: 'Property_Detail_Sale',
          //     params: {
          //       serId: itemData.item._id,
          //       serTitle: itemData.item.slug,
          //     },
          //   })
          // }}
        />
        <PropertyTypes
          title='Properties In Lahore'
          serviceLogo={require('../../assets/AdamPropertiesImages/logos/sale.png')}
          onSelect={() => Linking.openURL('http://alhafeezproperties.com/')}
          // onSelect={() => {
          // props.navigation.navigate({
          // routeName: 'Property_Detail_Sale',
          // params: {
          //   serId: itemData.item._id,
          //   serTitle: itemData.item.slug,
          // },
          // })
          //}}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PropertyTypes
          title='CPEC Investment'
          serviceLogo={require('../../assets/AdamPropertiesImages/logos/commercial.png')}
          onSelect={() => Linking.openURL('https://cpecinvestments.co.uk/')}
          // onSelect={() => {
          //   props.navigation.navigate({
          //     routeName: 'Property_Detail_Sale',
          //     params: {
          //       serId: itemData.item._id,
          //       serTitle: itemData.item.slug,
          //     },
          //   })
          // }}
        />
        <PropertyTypes
          title='Gawadar Project'
          serviceLogo={require('../../assets/AdamPropertiesImages/logos/sale.png')}
          onSelect={() => Linking.openURL('https://binqasimcity.org/')}
          // onSelect={() => {
          // props.navigation.navigate({
          // routeName: 'Property_Detail_Sale',
          // params: {
          //   serId: itemData.item._id,
          //   serTitle: itemData.item.slug,
          // },
          // })
          // }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PropertyTypes
          title='Properties In Dubai'
          serviceLogo={require('../../assets/AdamPropertiesImages/logos/commercial.png')}
          onSelect={() => Linking.openURL('https://almanzal.ae/')}
          // onSelect={() => {
          //   props.navigation.navigate({
          //     routeName: 'Property_Detail_Sale',
          //     params: {
          //       serId: itemData.item._id,
          //       serTitle: itemData.item.slug,
          //     },
          //   })
          // }}
        />
        <PropertyTypes
          title='Properties In UAE'
          serviceLogo={require('../../assets/AdamPropertiesImages/logos/sale.png')}
          onSelect={() => Linking.openURL('https://trusticon.ae/')}
          // onSelect={() => {
          // props.navigation.navigate({
          // routeName: 'Property_Detail_Sale',
          // params: {
          //   serId: itemData.item._id,
          //   serTitle: itemData.item.slug,
          // },
          // })
          // }}
        />
      </View>
    </ScrollView>
  )
}

OverSeasProperties.navigationOptions = (navigationData) => {
  return {
    headerTitle: () => <HeaderLogo />,
    // headerRight: () => (
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item
    //       title='compdetail'
    //       iconName='ios-add'
    //       onPress={() => {
    //         navigationData.navigation.navigate('Property_Form')
    //       }}
    //     />
    //   </HeaderButtons>
    // ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navigationData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
  }
}

export default OverSeasProperties
