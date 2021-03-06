import {
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  Platform,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'

import { Card } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
const ProjectType = ({ serviceLogo, onSelect, title }) => {
  const [rippleColor, setRippleColor] = useState(randomHexColor())
  const [rippleOverflow, setRippleOverflow] = useState(false)
  let TouchableCmp = TouchableOpacity

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback
  }
  return (
    <View
      style={{
        height: screenHeight / 2.2,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#004274')}
        onPress={onSelect}
        style={{
          justifyContent: 'space-between',
          justifyContent: 'space-around',

          alignItems: 'flex-start',
          backgroundColor: '#fff',
          flexDirection: 'row',
          height: screenHeight / 3,
          width: screenWidth,
        }}
      >
        <View
          style={{
            justifyContent: 'space-between',
            justifyContent: 'space-around',

            alignItems: 'flex-start',
            backgroundColor: '#fff',
            flexDirection: 'row',
            height: screenHeight / 3,
            width: screenWidth,
            elevation: 30,
          }}
        >
          <Image
            source={serviceLogo}
            style={{
              height: screenHeight / 3.2,
              width: screenWidth / 2,
              resizeMode: 'stretch',
              top: '-15%',
            }}
          />
          <View
            style={{
              width: screenWidth / 2.5,
              justifyContent: 'center',
              height: screenHeight / 3.2,
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 16, fontFamily: 'open-sans-bold' }}>
              <Ionicons name='podium-sharp' size={25} color='#00aeff' />
              {title}
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}
const randomHexColor = () => {
  return '#000000'.replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16)
  })
}
export default ProjectType
