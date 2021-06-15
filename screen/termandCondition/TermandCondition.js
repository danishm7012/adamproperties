import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Text, View } from 'react-native'

import CardComponent from './CardComponent'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import React from 'react'

const TermandCondition = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CardComponent />
    </View>
  )
}

TermandCondition.navigationOptions = (navData) => {
  return {
    headerTitle: 'TermandCondition',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
  }
}

export default TermandCondition
