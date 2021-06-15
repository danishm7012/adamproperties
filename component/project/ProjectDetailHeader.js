import { Dimensions, ImageBackground, Text, View } from 'react-native'

import AllStyle from '../../AllStyle'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

function ProjectDetailHeader({ phnNumber, headerimage, address, title }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={AllStyle.aboutSwiper}>
        {/* <SwiperComponent /> */}
        <ImageBackground
          style={{
            resizeMode: 'stretch',
            height: screenHeight / 3,
            width: screenWidth,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={headerimage}
        >
          <View
            style={{
              flex: 1,
              width: '100%',
              height: screenHeight / 3,
              position: 'absolute',
              backgroundColor: 'rgba(18,18,18,0.4)',
            }}
          />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 12, color: '#fff', textAlign: 'center' }}>
              <Ionicons name='phone-portrait-sharp' size={29} color='#fff' />
              {phnNumber}
            </Text>
            <Text style={{ fontSize: 12, color: '#fff', textAlign: 'center' }}>
              <Ionicons name='location-outline' size={29} color='#fff' />
              {address}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          width: screenWidth,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            // flex: 1,
            width: screenWidth / 1.04,
            height: screenHeight / 11,
            // marginHorizontal: 10,
            elevation: 20,
            backgroundColor: '#fff',
            // justifyContent: 'center',
            // alignItems: 'center',
          }}
        >
          <View
            style={{
              width: screenWidth / 1.1,
              justifyContent: 'center',

              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <Ionicons
              name='albums-outline'
              size={29}
              color='#00aeff'
              style={{ marginTop: 8 }}
            />

            <Text
              style={[
                { fontSize: 24, textAlign: 'center', color: '#000000' },
                AllStyle.Aboutheading,
              ]}
            >
              {title}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProjectDetailHeader
