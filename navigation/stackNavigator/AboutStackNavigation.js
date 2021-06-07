import About from '../../screen/about/About'
import Color from '../../constants/Colors'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const AboutStackNavigator = createStackNavigator({
  About_Us: {
    screen: About,
    navigationOptions: {
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Color.primaryColor : Color.primaryColor,
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
        fontWeight: '200',
      },
      headerTintColor: '#fff',
    },
  },
})
const AboutStackNavigation = createAppContainer(AboutStackNavigator)
export default AboutStackNavigation
