import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  LogBox,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useEffect } from 'react'

import Color from '../../constants/Colors'
import FadeInView from '../../component/fadeInAnimation/FadeInView'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import PropertyTypes from '../../component/home/PropertyType.js'
import { ScrollView } from 'react-native-gesture-handler'
import TabBar from '../../component/home/tabBar/TabBar'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const HEADER_MAX_HEIGHT = 200
const HEADER_MIN_HEIGHT = 60
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

const PropertiesCategory = (props) => {
  LogBox.ignoreLogs(['Animated.event', 'Your project is accessing'])
  //  const [homeServices, setServices] = React.useState([])
  // useEffect(() => {
  //   const fetchPackeges = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `https://digipremier.org/api/service/all`
  //       )
  //       setServices(data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   fetchPackeges()
  // }, [])
  const scrollY = new Animated.Value(0)
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 1],
    extrapolate: 'clamp',
    useNativeDriver: false,
  })

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            width: screenWidth,
            height: screenHeight / 1.4,
            backgroundColor: Color.primaryColor,
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FadeInView style={{ width: 250, height: 70 }}>
              <Image
                resizeMode={'cover'}
                source={require('../../assets/adamlogos.png')}
              />
            </FadeInView>

            <View
              style={{
                flex: 0.5,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{ fontSize: 42, color: '#fff', textAlign: 'center' }}
              >
                All Your Property Solutions At One Plateform
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            top: '-15%',
          }}
        >
          <TabBar />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PropertyTypes
          title='BUY'
          serviceLogo={require('../../assets/AdamPropertiesImages/logos/commercial.png')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Property_Form',
              params: {
                mainHeading: 'Residential Property for Sale',
                serTitle: 'Buyer',
                heading: 'Contact our team now!',
                detail:
                  'Buying & Selling the residential property is not an easy process. It is not just about buying, holding, leasing, and selling property. Truth be told, as a land financial backer, you need to design your income for residential properties upkeep. You can make the most of your alone-time while the children play in the play region close to the residential property. If you consider to purchase a permanent place on order to stay in the subsequent time, you should have some insight into selling the residential property. Hotels, restaurants, office spaces, strip malls, and various retailer shops are involved in day-to-day businesses worldwide.',
                headingTwo: 'Adam RESIDENTIAL PROPERTY FOR SALE',
                detailTwo:
                  'If you do, you ought to survey your costs and investment funds, and afterward, you sell your residential property.While many individuals figure out that they find great difficulty selling their residential property for sale all alone without getting any help from the real estate professionals, the truth of the matter is that recruiting a property guide can permanently save you from a tremendously tricky situation. Selling the residential property is not an easy process. It is not just about buying, holding, leasing, and selling property.Truth be told, as a land financial backer, you need to design your income for properties upkeep. Recruiting a property supervisor to tackle the issue is additionally not as simple as it sounds. As a likely proprietor, you need to design your spending plan to pay for the protection, charges, property contract assuming any, promoting costs, and different duty before effectively selling a property under your name.',
                // serTitle: itemData.item.slug,
              },
            })
          }}
        />
        <PropertyTypes
          title='SELL'
          serviceLogo={require('../../assets/AdamPropertiesImages/logos/commercial.png')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Property_Form',
              params: {
                mainHeading: 'Residential Property for Sale',
                serTitle: 'Seller',
                heading: 'Contact our team now!',
                detail:
                  'Buying & Selling the residential property is not an easy process. It is not just about buying, holding, leasing, and selling property. Truth be told, as a land financial backer, you need to design your income for residential properties upkeep. You can make the most of your alone-time while the children play in the play region close to the residential property. If you consider to purchase a permanent place on order to stay in the subsequent time, you should have some insight into selling the residential property. Hotels, restaurants, office spaces, strip malls, and various retailer shops are involved in day-to-day businesses worldwide.',
                headingTwo: 'Adam RESIDENTIAL PROPERTY FOR SALE',
                detailTwo:
                  'If you do, you ought to survey your costs and investment funds, and afterward, you sell your residential property.While many individuals figure out that they find great difficulty selling their residential property for sale all alone without getting any help from the real estate professionals, the truth of the matter is that recruiting a property guide can permanently save you from a tremendously tricky situation. Selling the residential property is not an easy process. It is not just about buying, holding, leasing, and selling property.Truth be told, as a land financial backer, you need to design your income for properties upkeep. Recruiting a property supervisor to tackle the issue is additionally not as simple as it sounds. As a likely proprietor, you need to design your spending plan to pay for the protection, charges, property contract assuming any, promoting costs, and different duty before effectively selling a property under your name.',
              },
            })
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PropertyTypes
          title='RENT'
          serviceLogo={require('../../assets/AdamPropertiesImages/logos/rent.png')}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Property_Detail_Rent',
              // params: {
              //   serId: itemData.item._id,
              //   serTitle: itemData.item.slug,
              // },
            })
          }}
        />
      </View>
      <Animated.View opacity={headerHeight} style={[styles.header]}>
        <View style={styles.bar}>
          <Text style={styles.title}>Home</Text>
        </View>
      </Animated.View>
    </ScrollView>
  )
  // }
  //   return (
  //     <>
  //       <View style={{ flex: 1, backgroundColor: '#eef3f9' }}>
  //         <FlatList
  //           data={PropertyType}
  //           keyExtractor={(item) => item.id}
  //           renderItem={renderItem}
  //           ListHeaderComponent={servicesHeader}
  //           scrollEventThrottle={16}
  //           showsVerticalScrollIndicator={false}
  //           onScroll={Animated.event([
  //             { nativeEvent: { contentOffset: { y: scrollY } } },
  //           ])}
  //           numColumns={2}
  //         />
  //         <Animated.View opacity={headerHeight} style={[styles.header]}>
  //           <View style={styles.bar}>
  //             <Text style={styles.title}>Home</Text>
  //           </View>
  //         </Animated.View>
  //       </View>
  //     </>
  //   )
}

PropertiesCategory.navigationOptions = (navData) => {
  return {
    headerTitle: ' ',
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          iconName='share-social-sharp'
          onPress={() => {
            Share.share({
              title: 'Paradisegoc App',
              message:
                'https://reactnative.dev/docs/share' +
                '\nHy! Happy to see you!',
            })
              .then((res) => console.log(res))
              .catch((error) => console.log(error))
          }}
        />
      </HeaderButtons>
    ),
  }
}
export default PropertiesCategory

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: Color.primaryColor,
    overflow: 'hidden',
  },
  bar: {
    marginTop: 28,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
    fontFamily: 'open-sans-bold',
  },
  scrollViewContent: {
    marginTop: 0,
  },
})
