import {
  Dimensions,
  FlatList,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import Color from '../../constants/Colors'
import CompaniesData from '../../data/CompaniesData'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import HeaderLogo from '../headerlogo/HeaderLogo'
import PropertyType from '../../component/home/PropertyType.js'
import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const OurCompanies = (props) => {
  const listSection = () => {
    return (
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
    )
  }
  const renderItem = (itemData) => {
    return (
      <PropertyType
        title={itemData.item.title}
        serviceLogo={itemData.item.image}
        onSelect={() => {
          Linking.openURL(itemData.item.webURI)
        }}
      />
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={CompaniesData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={listSection}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </View>
  )
}

OurCompanies.navigationOptions = (navigationData) => {
  return {
    headerTitle: () => <HeaderLogo />,
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

export default OurCompanies
