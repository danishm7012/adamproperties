import Color from '../../constants/Colors'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native'
import React from 'react'

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={28}
      color={Platform.OS === 'android' ? '#fff' : '#fff'}
    />
  )
}

export default CustomHeaderButton
