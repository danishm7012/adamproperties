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

import BuyerCategoryData from './../../data/BuyerCategoryData'
import Color from '../../constants/Colors'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import HeaderLogo from './../headerlogo/HeaderLogo'
import { Ionicons } from '@expo/vector-icons'
import PropertyTypes from '../../component/home/PropertyType'
import React from 'react'
import { ScrollView } from 'react-native'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const CoOperator = (props) => {
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
          title='FACTORY'
          serviceLogo={require('../../assets/AdamPropertiesImages/logos/commercial.png')}
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
          title='PETROLPUMP'
          serviceLogo={require('../../assets/AdamPropertiesImages/logos/sale.png')}
          onSelect={() => {
            // props.navigation.navigate({
            // routeName: 'Property_Detail_Sale',
            // params: {
            //   serId: itemData.item._id,
            //   serTitle: itemData.item.slug,
            // },
            // })
          }}
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
          title='WAREHOUSE'
          serviceLogo={require('../../assets/AdamPropertiesImages/logos/commercial.png')}
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
          title='HOSPITAL'
          serviceLogo={require('../../assets/AdamPropertiesImages/logos/sale.png')}
          onSelect={() => {
            // props.navigation.navigate({
            // routeName: 'Property_Detail_Sale',
            // params: {
            //   serId: itemData.item._id,
            //   serTitle: itemData.item.slug,
            // },
            // })
          }}
        />
      </View>
    </ScrollView>
  )
}

CoOperator.navigationOptions = (navigationData) => {
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
          title='Back Button'
          iconName='arrow-back'
          onPress={() => {
            navigationData.navigation.goBack()
          }}
        />
      </HeaderButtons>
    ),
  }
}

export default CoOperator
