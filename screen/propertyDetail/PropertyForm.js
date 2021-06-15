import { Avatar, Button } from 'react-native-elements'
import { Dimensions, Picker, ScrollView, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useState } from 'react'

import HeaderButton from '../../component/headerbutton/HeaderButton'
import { Ionicons } from '@expo/vector-icons'
import PropertyMessage from '../../component/home/PropertyMessage'
import { TextInput } from 'react-native-paper'

//import { ScrollView } from 'react-native-gesture-handler'
let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const PropertyForm = (props) => {
  // const protitle = props.navigation.getParam('protitle')
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [mobile, setMobile] = useState(null)
  const [message, setMessage] = useState(null)
  const [selectedValue, setSelectedValue] = useState('I am a buyer')
  const [inquiry, setInquiry] = useState(null)
  const [selectedValueProperty, setSelectedValueProperty] = useState('')
  const [selectedValueCountry, setSelectedValueCountry] = useState('')
  const inquiryTitle = props.navigation.getParam('serTitle')
  const mainHeading = props.navigation.getParam('mainHeading')
  const heading = props.navigation.getParam('heading')
  const detail = props.navigation.getParam('detail')
  const headingTwo = props.navigation.getParam('headingTwo')
  const detailTwo = props.navigation.getParam('detailTwo')

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flexGrow: 1,
        width: screenWidth,
      }}
    >
      <View
        style={{
          width: screenWidth,
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#121212',
        }}
      >
        <PropertyMessage
          mainHeading={mainHeading}
          heading={heading}
          headingTwo={headingTwo}
          detail={detail}
          detailTwo={detailTwo}
        />

        <View
          style={{
            flexGrow: 1,
            backgroundColor: '#004274',
            marginTop: 80,
            elevation: 40,
            paddingBottom: 40,
            width: screenWidth,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Avatar
            size='large'
            source={require('../../assets/adamlogo.png')}
            rounded
            avatarStyle={{ resizeMode: 'contain' }}
            overlayContainerStyle={{ backgroundColor: 'white', top: '-53%' }}
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
            ADAM PROPERTIES
          </Text>

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
            }}
            theme={{
              colors: { primary: '#00aeff', underlineColor: 'transparent' },
            }}
            mode='outlined'
            label={`Inquiry Type ${inquiryTitle}`}
            value={inquiry}
            multiline={true}
            numberOfLines={1}
            disabled={true}
            onChangeText={(inq) => setInquiry(inq)}
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
              <Picker.Item label='I am..' value='i am' />
              <Picker.Item
                label='I am a Real Estate Agent'
                value='i am a Real Estate Agent'
              />
              <Picker.Item
                label='I am a Property Owner'
                value='i am a Property Owner'
              />
              <Picker.Item
                label='I am a Property landlord'
                value='i am a property landlord'
              />
            </Picker>
          </View>

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
              selectedValue={selectedValueProperty}
              style={{ height: screenHeight / 12, width: screenWidth / 1.2 }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValueProperty(itemValue)
              }
            >
              <Picker.Item label='Select Type' value='select type' />
              <Picker.Item label='Plots' value='plots' />
              <Picker.Item label='  -Agriculture' value='agriculture' />
              <Picker.Item label='  -Commercial' value='commercial' />
              <Picker.Item label='  -Industrial land' value='industrial' />
              <Picker.Item
                label='  -Residential Plots'
                value='residential plots'
              />
              <Picker.Item label='  -Agriculture' value='agriculture' />
              <Picker.Item
                label='New Project in UK'
                value='new Project in UK'
              />
              <Picker.Item label='  -Homes' value='homes' />
              <Picker.Item label='  -Appartment' value='appartment' />
              <Picker.Item label='  -Farm House' value='farm house' />
              <Picker.Item label='  -House' value='house' />
              <Picker.Item label='  -Lower Portion' value='agriculture' />
              <Picker.Item label='  -Pent House' value='pent House' />
              <Picker.Item label='Commercial' value='commercial' />
              <Picker.Item label='  -Buildings' value='building' />
              <Picker.Item label='  -Factory' value='factory' />
              <Picker.Item label='  -Office' value='office' />
              <Picker.Item label='  -Shop' value='shop' />
              <Picker.Item label='  -WareHouse' value='warehouse' />
            </Picker>
          </View>
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
              selectedValue={selectedValueCountry}
              style={{ height: screenHeight / 12, width: screenWidth / 1.2 }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValueCountry(itemValue)
              }
            >
              <Picker.Item label='Select Country' value='select country' />
              <Picker.Item label='UK' value='uk' />
              <Picker.Item label='UAE' value='uae' />
              <Picker.Item label='China' value='china' />
              <Picker.Item label='India' value='india' />
              <Picker.Item label='Turkey' value='turkey' />
              <Picker.Item label='Chile' value='chile' />
              <Picker.Item label='Pakistan' value='pakistan' />
            </Picker>
          </View>

          <TextInput
            style={{
              color: 'white',
              backgroundColor: '#fff',
              borderRadius: 5,
              width: screenWidth / 1.2,
            }}
            theme={{
              colors: { primary: '#00aeff', underlineColor: 'transparent' },
            }}
            mode='outlined'
            label={`Additional Detail`}
            value={message}
            multiline={true}
            numberOfLines={5}
            onChangeText={(msg) => setMessage(msg)}
          />

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

export default PropertyForm

PropertyForm.navigationOptions = (navigationData) => {
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
