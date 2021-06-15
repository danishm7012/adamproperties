import { Avatar, Button } from 'react-native-elements'
import { Dimensions, Picker, ScrollView, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useState } from 'react'

import HeaderButton from '../../component/headerbutton/HeaderButton'
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native-paper'

//import { ScrollView } from 'react-native-gesture-handler'
let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const Projectbookform = (props) => {
  const protitle = props.navigation.getParam('protitle')
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [mobile, setMobile] = useState(null)
  const [message, setMessage] = useState(null)
  const [selectedValue, setSelectedValue] = useState('I am a buyer')
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        height: screenHeight,
        width: screenWidth,
      }}
    >
      <View
        style={{
          width: screenWidth,
          height: screenHeight,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#121212',
        }}
      >
        <View
          style={{
            height: screenHeight / 1.3,
            backgroundColor: '#004274',
            marginTop: 80,
            elevation: 40,
            width: screenWidth,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Avatar
            size='large'
            icon={{
              name: 'building-o',
              color: '#00aeff',
              type: 'font-awesome',
            }}
            rounded
            overlayContainerStyle={{ backgroundColor: 'white', top: '-73%' }}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              textAlign: 'center',
              fontFamily: 'open-sans-bold',
            }}
          >
            <Ionicons name='podium-sharp' size={25} color='#00aeff' />
            {protitle}
          </Text>
          {/* <Text>Quiz</Text> */}
          <TextInput
            style={{
              color: 'white',
              backgroundColor: '#fff',
              borderRadius: 5,
              width: screenWidth / 1.2,
              height: screenHeight / 12,
            }}
            theme={{
              colors: { primary: '#00aeff', underlineColor: 'transparent' },
            }}
            mode='outlined'
            label='Name'
            value={name}
            onChangeText={(nam) => setName(nam)}
          />
          <TextInput
            style={{
              color: 'white',
              backgroundColor: '#fff',
              borderRadius: 5,
              width: screenWidth / 1.2,
              height: screenHeight / 12,
            }}
            theme={{
              colors: { primary: '#00aeff', underlineColor: 'transparent' },
            }}
            mode='outlined'
            label='Mobile'
            value={mobile}
            onChangeText={(mob) => setMobile(mob)}
          />
          <TextInput
            style={{
              color: 'white',
              backgroundColor: '#fff',
              borderRadius: 5,
              width: screenWidth / 1.2,
              height: screenHeight / 12,
            }}
            theme={{
              colors: { primary: '#00aeff', underlineColor: 'transparent' },
            }}
            mode='outlined'
            label='Email'
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            style={{
              color: 'white',
              backgroundColor: '#fff',
              borderRadius: 5,
              width: screenWidth / 1.2,
              height: screenHeight / 9,
            }}
            theme={{
              colors: { primary: '#00aeff', underlineColor: 'transparent' },
            }}
            mode='outlined'
            label={`I am intrested in ${protitle} Property`}
            value={message}
            multiline={true}
            numberOfLines={3}
            onChangeText={(msg) => setMessage(msg)}
          />
          <View
            style={{
              borderWidth: 0.5,
              marginTop: 8,
              backgroundColor: '#fff',
              width: screenWidth / 1.2,
              height: screenHeight / 12,
            }}
          >
            <Picker
              selectedValue={selectedValue}
              style={{ height: screenHeight / 12, width: screenWidth / 1.2 }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label='I am a buyer' value='i am a buyer' />
              <Picker.Item label='I am a tennant' value='i am a tennant' />
              <Picker.Item label='I am an Agent' value='i am an agent' />
              <Picker.Item label='Other' value='other' />
            </Picker>
          </View>
          <Button
            title='Inquiry Now'
            buttonStyle={{ backgroundColor: '#00aeff' }}
            containerStyle={{ paddingTop: 10, width: screenWidth / 1.2 }}
            type='solid'
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default Projectbookform

Projectbookform.navigationOptions = (navigationData) => {
  return {
    headerTitle: ' ',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Back Button'
          iconName='arrow-back'
          onPress={() => {
            navigationData.navigation.goBack()
          }}
        />
      </HeaderButtons>
    ),
  }
}
