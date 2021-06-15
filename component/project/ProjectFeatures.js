import { Dimensions, ImageBackground, Text, View } from 'react-native'

import AllStyle from '../../AllStyle'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')
function ProjectFeatures({ featuresArray }) {
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
          <View style={{ flex: 1 }}>
            <Text
              style={[
                {
                  fontSize: 24,
                  // marginRight: 20,
                  textAlign: 'left',
                  color: '#000000',
                },
                AllStyle.Aboutheading,
              ]}
            >
              features
            </Text>

            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-start',
                marginLeft: 20,
                marginTop: 20,
              }}
            >
              {featuresArray.map((fea, index) => (
                <Text
                  style={[
                    { marginRight: 8, fontSize: 20, marginBottom: 9 },
                    AllStyle.Aboutdetail,
                  ]}
                  key={index}
                >
                  <Ionicons
                    name='checkmark-circle-outline'
                    size={29}
                    color='#00aeff'
                  />
                  {fea}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProjectFeatures
