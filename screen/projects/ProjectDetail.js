import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'

import HeaderButton from '../../component/headerbutton/HeaderButton'
import ProjectAddress from '../../component/project/ProjectAddress'
import ProjectDescription from '../../component/project/ProjectDescription'
import ProjectDetailData from '../../data/ProjectDetail'
import ProjectDetailHeader from '../../component/project/ProjectDetailHeader'
import ProjectFeatures from '../../component/project/ProjectFeatures'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ProjectDetail = (props) => {
  const proid = props.navigation.getParam('proId')
  const project = ProjectDetailData.find((proids) => proids.id === proid)
  // const [homeServices, setServices] = React.useState({})
  // useEffect(() => {
  //   const fetchPackeges = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `http://digipremier.herokuapp.com/api/service/slug/${title}`
  //       )
  //       setServices(data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   fetchPackeges()
  // }, [])

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <ProjectDetailHeader
            headerimage={project.image}
            address={project.address}
            phnNumber={project.phoneNo}
            title={project.name}
          />
          <View style={{ marginBottom: 15 }} />

          <ProjectDescription description={project.description} />

          <View style={{ marginTop: 15 }} />
          <ProjectFeatures featuresArray={project.features} />
          <View style={{ marginTop: 10 }} />
          <ProjectAddress
            city={project.city}
            area={project.area}
            country={project.country}
            county={project.county}
            postal={project.postalcode}
          />

          <View style={{ marginTop: 25 }} />
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#235478',
              paddingVertical: 17,
            }}
            onPress={() => {
              props.navigation.navigate({
                routeName: 'Project_Form',
                params: {
                  protitle: project.name,
                },
              })
            }}
          >
            <View
              style={{
                flex: 1,
                bottom: 0,
                left: 0,
                right: 0,
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  fontFamily: 'open-sans-bold',
                }}
              >
                Book Now
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

ProjectDetail.navigationOptions = (navigationData) => {
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
export default ProjectDetail
