import { Dimensions, Image, SafeAreaView, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import AllStyle from '../../AllStyle'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import SocialMediaIcon from '../../component/socialmediaIcon/SocialMediaIcon'
import SwiperComponent from '../../component/swiper/SwiperImages.js'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const About = (props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={AllStyle.aboutMainClass}>
          <View style={{ height: screenHeight / 3 }}>
            <SwiperComponent />
          </View>
          <View style={{}}>
            <SocialMediaIcon
              facebookSocial='https://www.facebook.com/AdamProperties.Co.Uk/'
              twitterSocial='https://twitter.com/properties_adam'
              linkedInSocial='https://www.linkedin.com/company/adamproperties/'
              instagramSocial='https://www.instagram.com/adamproperties/'
              websiteSocial='https://www.adamproperties.co.uk/'
            />
          </View>
          <View style={{}}>
            <Text
              style={[
                { textDecorationLine: 'underline' },
                AllStyle.Aboutheading,
              ]}
            >
              Local Real Estate Chapter:
            </Text>
          </View>

          <View style={{ margin: 7 }}>
            <Text style={AllStyle.Aboutdetail}>
              Local Real Estate Chapter comprised of all types of properties
              like Sale, Purchase, Rent, Property Management and Real Estate
              Projects Marketing in Pakistan! Newage Marketing Global secures
              project contracts for global launching.
            </Text>
          </View>

          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#00aeff' />
              Bin Qasim City - Gwadar
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#00aeff' />
              SQ Mall 99 - Lahore
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#00aeff' />
              Zameen Aurum - Lahore
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#00aeff' />
              Dream Gardens - Lahore
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#00aeff' />
              DHA Raya - Lahore
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#00aeff' />
              New Metro City - Jhelum
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#00aeff' />
              Lavish Mall - Islamabad
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#00aeff' />
              Mivida Housing Project - Islamabad
            </Text>
          </View>

          <View style={{}}>
            <Text style={AllStyle.Aboutheading}>
              International Real Estate Chapter:
            </Text>
          </View>

          <View style={{ margin: 7 }}>
            <Text style={AllStyle.Aboutdetail}>
              Under this segment, Adam Properties International engaged in Real
              Estate Marketing, Property Buying, Selling, Rent, Property
              Management Services Globally like UAE, UK, Europe, USA and Canada.
              Adam Properties International providing state of the art services
              to its global clientage regarding buying, selling, letting
              facilities to the clients. We are launching projects in the Gulf,
              Europe, USA and Canada.
            </Text>
          </View>

          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#00aeff' />
              Paramount Towers
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#00aeff' />
              Nashama
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#00aeff' />
              Habtoor City
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#00aeff' />
              Sky Courts
            </Text>
            <Text
              style={[
                { fontFamily: 'open-sans-bold', textAlign: 'center' },
                AllStyle.Aboutdetail,
              ]}
            >
              <Ionicons name='star-sharp' size={25} color='#00aeff' />
              Ajman City
            </Text>
          </View>
          <View style={{}}>
            <Text style={AllStyle.Aboutdetail}>
              and other UK, USA and Canada projects. The projects and properties
              are residential, commercial, flats and business centers with the
              best locations.
            </Text>
          </View>

          <View style={{}}>
            <Text style={AllStyle.Aboutheading}>Our Vision</Text>
          </View>

          <View style={{ margin: 7 }}>
            <Text style={AllStyle.Aboutdetail}>
              The central aspect is facilitating clients’ purchasing, selling,
              rent and property management services in all major cities of
              Pakistan and Globally. The goal is to help overseas Pakistanis buy
              and sell their properties in Pakistan and abroad with complete
              documentation and protection. It would reduce the hassle of
              property purchasing as you can visit the offices located in these
              countries.
            </Text>
          </View>

          <View style={{}}>
            <Text style={AllStyle.Aboutheading}>Our Mission</Text>
          </View>

          <View style={{ margin: 7 }}>
            <Text style={AllStyle.Aboutdetail}>
              Adam Properties aims to provide ease to the clients to buy, sell,
              rent, property management services and all other related
              expertise. It also facilitates the overseas owners everywhere to
              sell their properties in Pakistan at very fair prices with
              comprehensive support to complete the documentation like NOC, NDC,
              Banking and Legal Services under one window operations. We extend
              our service in all major cities. It functions in all the main
              cities of Pakistan and other international destinations like Gulf,
              Europe, USA and Canada. We have experienced property management
              resources that offer very reasonable rates against excellent
              services.
            </Text>
          </View>

          <View style={{}}>
            <Text style={AllStyle.Aboutheading}>Meet Us in UK</Text>
          </View>
          <View style={{ margin: 7 }}>
            <Text style={AllStyle.Aboutdetail}>
              3rd Floor, 244 Edgware Road, London W2 1DS, UK.
            </Text>
            <Text style={AllStyle.Aboutdetail}>WhatsApp: +44 7391 758 721</Text>
          </View>

          <View style={{}}>
            <Text style={AllStyle.Aboutheading}>Meet Us in UAE</Text>
          </View>
          <View style={{ margin: 7 }}>
            <Text style={AllStyle.Aboutdetail}>
              Park Lane Plaza, 12th Floor, Office No. 1213, Down Town, Dubai
              UAE. P.O. BOX 415253
            </Text>
            <Text style={AllStyle.Aboutdetail}>Landline +971 45891215</Text>
            <Text style={AllStyle.Aboutdetail}>Mobile: +971 58 1439463</Text>
            <Text style={AllStyle.Aboutdetail}>WhatsApp: +971 54 5277366</Text>
          </View>

          <View style={{}}>
            <Text style={AllStyle.Aboutheading}>Meet Us in Pakistan</Text>
          </View>
          <View style={{ margin: 7 }}>
            <Text style={AllStyle.Aboutdetail}>
              Lahore Office: Office No.18, Naqi Arcade, 71-The Mall Road,
              Lahore, Pakistan.
            </Text>
            <Text style={AllStyle.Aboutdetail}>
              Land Line : +92 423 2801559
            </Text>
            <Text style={AllStyle.Aboutdetail}>Call :+92 300 0448272</Text>
            <Text style={AllStyle.Aboutdetail}>Email: info@almanzal.ae</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

About.navigationOptions = (navData) => {
  return {
    headerTitle: 'About',
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

export default About
