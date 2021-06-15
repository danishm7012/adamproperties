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

const PropertyDetailSale = (props) => {
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
          title='Residential'
          serviceLogo={require('../../assets/AdamPropertiesImages/logos/commercial.png')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Property_Form',
              params: {
                mainHeading: 'Residential Property for Sale',
                serTitle: 'Residential',
                heading: 'Contact our team now!',
                detail:
                  'Buying & Selling the residential property is not an easy process. It is not just about buying, holding, leasing, and selling property. Truth be told, as a land financial backer, you need to design your income for residential properties upkeep. You can make the most of your alone-time while the children play in the play region close to the residential property. If you consider to purchase a permanent place on order to stay in the subsequent time, you should have some insight into selling the residential property. Hotels, restaurants, office spaces, strip malls, and various retailer shops are involved in day-to-day businesses worldwide.',
                headingTwo: 'Adam RESIDENTIAL PROPERTY FOR SALE',
                detailTwo:
                  'If you do, you ought to survey your costs and investment funds, and afterward, you sell your residential property.While many individuals figure out that they find great difficulty selling their residential property for sale all alone without getting any help from the real estate professionals, the truth of the matter is that recruiting a property guide can permanently save you from a tremendously tricky situation. Selling the residential property is not an easy process. It is not just about buying, holding, leasing, and selling property.Truth be told, as a land financial backer, you need to design your income for properties upkeep. Recruiting a property supervisor to tackle the issue is additionally not as simple as it sounds. As a likely proprietor, you need to design your spending plan to pay for the protection, charges, property contract assuming any, promoting costs, and different duty before effectively selling a property under your name.',
              },
            })
          }}
        />
        <PropertyTypes
          title='COMMERCIAL'
          serviceLogo={require('../../assets/AdamPropertiesImages/logos/commercial.png')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Property_Form',
              params: {
                mainHeading: 'Residential Property for Sale',
                serTitle: 'COMMERCIAL',
                heading: 'Contact our team now!',
                detail:
                  'Buying & Selling the residential property is not an easy process. It is not just about buying, holding, leasing, and selling property. Truth be told, as a land financial backer, you need to design your income for residential properties upkeep. You can make the most of your alone-time while the children play in the play region close to the residential property. If you consider to purchase a permanent place on order to stay in the subsequent time, you should have some insight into selling the residential property. Hotels, restaurants, office spaces, strip malls, and various retailer shops are involved in day-to-day businesses worldwide.',
                headingTwo: 'Adam RESIDENTIAL PROPERTY FOR SALE',
                detailTwo:
                  'If you do, you ought to survey your costs and investment funds, and afterward, you sell your residential property.While many individuals figure out that they find great difficulty selling their residential property for sale all alone without getting any help from the real estate professionals, the truth of the matter is that recruiting a property guide can permanently save you from a tremendously tricky situation. Selling the residential property is not an easy process. It is not just about buying, holding, leasing, and selling property.Truth be told, as a land financial backer, you need to design your income for properties upkeep. Recruiting a property supervisor to tackle the issue is additionally not as simple as it sounds. As a likely proprietor, you need to design your spending plan to pay for the protection, charges, property contract assuming any, promoting costs, and different duty before effectively selling a property under your name.',
              },
            })
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
          title='CO-Operator'
          serviceLogo={require('../../assets/AdamPropertiesImages/logos/commercial.png')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Co_Operator',
              //     params: {
              //       serId: itemData.item._id,
              //       serTitle: itemData.item.slug,
              //     },
            })
          }}
        />
        <PropertyTypes
          title='Agriculture'
          serviceLogo={require('../../assets/AdamPropertiesImages/logos/sale.png')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Property_Form',
              params: {
                mainHeading: 'Residential Property for Sale',
                serTitle: 'Agriculture',
                heading: 'Contact our team now!',
                detail:
                  'Buying & Selling the residential property is not an easy process. It is not just about buying, holding, leasing, and selling property. Truth be told, as a land financial backer, you need to design your income for residential properties upkeep. You can make the most of your alone-time while the children play in the play region close to the residential property. If you consider to purchase a permanent place on order to stay in the subsequent time, you should have some insight into selling the residential property. Hotels, restaurants, office spaces, strip malls, and various retailer shops are involved in day-to-day businesses worldwide.',
                headingTwo: 'Adam RESIDENTIAL PROPERTY FOR SALE',
                detailTwo:
                  'If you do, you ought to survey your costs and investment funds, and afterward, you sell your residential property.While many individuals figure out that they find great difficulty selling their residential property for sale all alone without getting any help from the real estate professionals, the truth of the matter is that recruiting a property guide can permanently save you from a tremendously tricky situation. Selling the residential property is not an easy process. It is not just about buying, holding, leasing, and selling property.Truth be told, as a land financial backer, you need to design your income for properties upkeep. Recruiting a property supervisor to tackle the issue is additionally not as simple as it sounds. As a likely proprietor, you need to design your spending plan to pay for the protection, charges, property contract assuming any, promoting costs, and different duty before effectively selling a property under your name.',
              },
            })
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
          title='Development'
          serviceLogo={require('../../assets/AdamPropertiesImages/logos/rent.png')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Property_Form',
              params: {
                mainHeading: 'Residential Property for Sale',
                serTitle: 'Agriculture',
                heading: 'Contact our team now!',
                detail:
                  'Buying & Selling the residential property is not an easy process. It is not just about buying, holding, leasing, and selling property. Truth be told, as a land financial backer, you need to design your income for residential properties upkeep. You can make the most of your alone-time while the children play in the play region close to the residential property. If you consider to purchase a permanent place on order to stay in the subsequent time, you should have some insight into selling the residential property. Hotels, restaurants, office spaces, strip malls, and various retailer shops are involved in day-to-day businesses worldwide.',
                headingTwo: 'Adam RESIDENTIAL PROPERTY FOR SALE',
                detailTwo:
                  'If you do, you ought to survey your costs and investment funds, and afterward, you sell your residential property.While many individuals figure out that they find great difficulty selling their residential property for sale all alone without getting any help from the real estate professionals, the truth of the matter is that recruiting a property guide can permanently save you from a tremendously tricky situation. Selling the residential property is not an easy process. It is not just about buying, holding, leasing, and selling property.Truth be told, as a land financial backer, you need to design your income for properties upkeep. Recruiting a property supervisor to tackle the issue is additionally not as simple as it sounds. As a likely proprietor, you need to design your spending plan to pay for the protection, charges, property contract assuming any, promoting costs, and different duty before effectively selling a property under your name.',
              },
            })
          }}
        />
      </View>
    </ScrollView>
  )
}

PropertyDetailSale.navigationOptions = (navigationData) => {
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

export default PropertyDetailSale
