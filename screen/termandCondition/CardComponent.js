import {
  Dimensions,
  Image,
  Platform,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

function CardComponent() {
  let TouchableCmp = TouchableOpacity

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback
  }

  return (
    <View
      style={{
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#004274')}
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
            source={require('../../assets/AdamPropertiesImages/projectsimages/DHARaya.jpeg')}
            style={{
              height: screenHeight / 3.2,
              width: screenWidth / 2,
              resizeMode: 'stretch',
              top: '-15%',
              borderWidth: 4,
              borderColor: '#004274',
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
              Pakistan Project
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

export default CardComponent
