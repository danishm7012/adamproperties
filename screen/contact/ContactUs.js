import {
  Alert,
  Button,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useState } from 'react'

import AllStyle from '../../AllStyle'
import Colors from '../../constants/Colors'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import HeaderLogo from '../headerlogo/HeaderLogo'
import SocialMediaIcon from '../../component/socialmediaIcon/SocialMediaIcon'

const ContactUs = () => {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [mobile, setMobile] = useState(null)
  const [message, setMessage] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  // const [isSubmitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const postContact = (
    name,
    mobile,
    email,
    message
    // nameClear,
    // mobileClear,
    // emailClear,
    // messageClear
  ) => {
    if (message != null && name != null && email != null && mobile != null) {
      fetch('https://auth-f5403-default-rtdb.firebaseio.com/contacts.json', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          mobile,
          email,
          message,
        }),
      })
        .then((response) => response.json())
        .then((responseData) => {
          if (responseData.name != null) {
            // refs[nameClear].setNativeProps({ text: '' })
            // refs[mobileClear].setNativeProps({ text: '' })
            // refs[emailClear].setNativeProps({ text: '' })
            // refs[messageClear].setNativeProps({ text: '' })
            setMobile(null)
            setEmail(null)
            setMessage(null)
            setName(null)
            setModalVisible(true)
          } else {
            Alert.alert(
              'Oops !',
              'Something went wrong',
              [
                {
                  text: 'OK',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
              ],
              { cancelable: false }
            )
          }
        })
        .done()
    } else {
      Alert.alert(
        'Oops !',
        'Press SUBMIT button after verify all the field you have entered !',
        [
          {
            text: 'OK',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        { cancelable: false }
      )
    }
  }
  const _togglePostCard = () => {
    setModalVisible(false)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <View style={AllStyle.contactUsImagesView}>
          <Image
            source={require('../../assets/contactimgs.gif')}
            style={AllStyle.contactUsImages}
          />
        </View> */}
        <View style={AllStyle.mainContactForm}>
          <View style={AllStyle.contactUsformMainHeading}>
            <Text style={AllStyle.contactUsformMainHeadingOuter}>
              {' '}
              Contact{' '}
              <Text style={AllStyle.contactUsformMainHeadingInner}>
                {' '}
                Us
              </Text>{' '}
            </Text>
          </View>
          {modalVisible ? (
            <View style={styles.centeredView}>
              <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.')
                  // setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                      {' '}
                      Thanks. We will get in touch with you as soon as possible
                    </Text>
                    <Pressable
                      onPress={() => _togglePostCard()}
                      style={[styles.button, styles.buttonClose]}
                    >
                      <Text style={styles.textStyle}>Done !</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              {/* <Pressable
                
                style={[styles.button, styles.buttonOpen]}
              >
                <Text style={styles.textStyle}>Done</Text>
              </Pressable> */}
            </View>
          ) : (
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1 }}>
                <TextInput
                  style={AllStyle.TextinputfieldcontactUs}
                  placeholder='Name'
                  onChangeText={(name) => setName(name)}
                  value={name}
                  //                ref={'nameClear'}
                  placeholderTextColor='#0f385a'
                />

                {/* {errors.name} */}

                <TextInput
                  style={AllStyle.TextinputfieldcontactUs}
                  placeholder='Email'
                  placeholderTextColor='#0f385a'
                  onChangeText={(useremail) => setEmail(useremail)}
                  value={email}
                  //              ref={'emailClear'}
                  textContentType='emailAddress'
                />
                {/* {errors.email} */}
                <TextInput
                  style={AllStyle.TextinputfieldcontactUs}
                  placeholder='Mobile'
                  placeholderTextColor='#0f385a'
                  onChangeText={(mobile) => setMobile(mobile)}
                  value={mobile}
                  keyboardType='numeric'
                  dataDetectorTypes='phoneNumber'
                  //            ref={'mobileClear'}
                />
                {/* {errors.subject} */}

                <TextInput
                  style={AllStyle.TextinputfieldcontactUs}
                  placeholder='Leave your Message Here !'
                  placeholderTextColor='#0f385a'
                  multiline={true}
                  numberOfLines={5}
                  onChangeText={(usermessage) => setMessage(usermessage)}
                  value={message}
                  //          ref={'messageClear'}
                />
              </View>
            </View>
          )}
          <Button
            style={{ paddingTop: StatusBar.currentHeight }}
            title='Submit'
            color={Colors.primaryColor}
            onPress={() =>
              postContact(
                name,
                mobile,
                email,
                message
                // 'nameClear',
                // 'mobileClear',
                // 'emailClear',
                // 'messageClear'
              )
            }
          />

          <View
            style={{
              paddingTop: StatusBar.currentHeight * 2.5,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SocialMediaIcon
              facebookSocial='https://www.facebook.com/trusticonae'
              twitterSocial='https://twitter.com/Trusticon1'
              linkedInSocial='https://www.linkedin.com/in/trust-icon-a5949020a/'
              instagramSocial='https://www.instagram.com/trusticon1/'
              websiteSocial='https://trusticon.ae/'
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

ContactUs.navigationOptions = (navData) => {
  return {
    headerTitle: () => <HeaderLogo />,
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export default ContactUs
