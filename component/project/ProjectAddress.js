import { Dimensions, Text, View } from 'react-native'

import AllStyle from '../../AllStyle'
import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

function ProjectAddress({ postal, county, country, area, city }) {
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 10,
        elevation: 20,
        backgroundColor: '#fff',
      }}
    >
      <View>
        <Text style={[{ marginRight: 8, fontSize: 16 }, AllStyle.Aboutheading]}>
          {' '}
          Address{' '}
        </Text>
      </View>
      <View style={{ borderWidth: 0.5, marginTop: 9 }} />

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginHorizontal: 30,
          marginTop: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Text>City</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Text>{city}</Text>
        </View>
      </View>
      <View style={{ borderWidth: 0.5, marginTop: 9 }} />

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginHorizontal: 30,

          marginTop: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Text>State/County</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Text>{county}</Text>
        </View>
      </View>
      <View style={{ borderWidth: 0.5, marginTop: 9 }} />

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginHorizontal: 30,

          marginTop: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Text>Zip/Postal Code</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Text>{postal}</Text>
        </View>
      </View>
      <View style={{ borderWidth: 0.5, marginTop: 9 }} />

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginHorizontal: 30,

          marginTop: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Text>Area</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Text>{area}</Text>
        </View>
      </View>
      <View style={{ borderWidth: 0.5, marginTop: 9 }} />

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginHorizontal: 30,

          marginTop: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Text>Country</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Text>{country}</Text>
        </View>
      </View>
      <View style={{ paddingBottom: 10 }} />
    </View>
  )
}

export default ProjectAddress
