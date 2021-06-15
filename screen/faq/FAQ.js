import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Text, View } from 'react-native'

import HeaderButton from '../../component/headerbutton/HeaderButton'
import React from 'react'

const FAQ = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <View
      style={{
        flex: 1,
        maxWidth: '50%',
        margin: 9,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableNativeFeedback
        //  onPress={() => Linking.openURL('http://google.com')}
        onPress={() => {
          setRippleColor(randomHexColor())
          setRippleOverflow(!rippleOverflow)
        }}
        // onPress={onSelect}
        background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ImageBackground
          source={serviceLogo}
          style={{
            resizeMode: 'cover',
            height: 100,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              flex: 1,
              minWidth: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* <Card.Content> */}

      {/* <View
                style={{
                  height: 100,
                  width: '100%',
                  position: 'absolute',
                  backgroundColor: 'rgba(18,18,18,0.5)',
                }}
              />
              <Text
                style={{
                  fontSize: 14,
                  textAlign: 'center',
                  fontWeight: '700',
                  fontFamily: 'open-sans-bold',
                  color: '#fff',
                }}
                onPress={onSelect}
              >
                {title}
              </Text>
            </View>
            
          </View>
        </ImageBackground>
      </TouchableNativeFeedback>
    </View> */}

      <Text>FAQ</Text>
    </View>
  )
}

FAQ.navigationOptions = (navData) => {
  return {
    headerTitle: 'FAQ',
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

export default FAQ
