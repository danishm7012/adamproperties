import { Dimensions, Text, View } from 'react-native'

import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

function PropertyMessage({
  mainHeading,
  heading,
  headingTwo,
  detail,
  detailTwo,
}) {
  return (
    <View style={{ flex: 1, marginTop: 190 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 22,
            fontFamily: 'open-sans-bold',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          {mainHeading}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10,
        }}
      >
        <View
          style={{
            flexGrow: 1,
            width: screenWidth / 1.08,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            elevation: 40,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'open-sans-bold',
              color: '#121212',
              textAlign: 'center',
              paddingVertical: 18,
            }}
          >
            {heading}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'open-sans-bold',
              color: '#5e5e5e',
              textAlign: 'left',
              margin: 15,
            }}
          >
            {detail}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10,
        }}
      >
        <View
          style={{
            flexGrow: 1,
            // paddingTop: 20,
            width: screenWidth / 1.08,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            elevation: 40,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'open-sans-bold',
              color: '#121212',
              textAlign: 'center',
              paddingVertical: 18,
            }}
          >
            {headingTwo}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'open-sans-bold',
              color: '#5e5e5e',
              textAlign: 'left',
              margin: 15,
            }}
          >
            {detailTwo}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default PropertyMessage
