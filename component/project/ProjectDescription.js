import { Dimensions, ImageBackground, Text, View } from 'react-native'

import AllStyle from '../../AllStyle'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

function ProjectDescription({ description }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: screenWidth,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: screenWidth / 1.04,

            elevation: 20,
            backgroundColor: '#fff',
          }}
        >
          <View>
            <Text
              style={[{ marginRight: 8, fontSize: 16 }, AllStyle.Aboutheading]}
            >
              {' '}
              Description{' '}
            </Text>
            <Text style={[{ marginRight: 8 }, AllStyle.Aboutdetail]}>
              {description}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProjectDescription
