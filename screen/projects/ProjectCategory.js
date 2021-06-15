import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import Color from '../../constants/Colors'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import HeaderLogo from '../headerlogo/HeaderLogo'
import { ImageBackground } from 'react-native'
import PakistanProjectData from '../../data/PakistanProjectData'
import ProjectDetailData from '../../data/ProjectDetail'
import ProjectType from '../../component/project/ProjectType'
import React from 'react'

let { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const ProjectCategory = (props) => {
  const sertitle = props.navigation.getParam('serTitle')
  const uaeImage = props.navigation.getParam('uaeImage')
  const displayedSubCompanies = ProjectDetailData.filter(
    (project) => project.category === sertitle
  )

  const listSection = () => {
    return (
      <View
        style={{
          width: screenWidth,
          height: screenHeight / 3,
          backgroundColor: Color.primaryColor,
          marginBottom: 40,
        }}
      >
        <ImageBackground
          source={uaeImage}
          resizeMode='stretch'
          style={{
            width: screenWidth,
            height: screenHeight / 3,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 80,
          }}
        >
          <View
            style={{
              backgroundColor: 'rgba(18,18,18,0.4)',
              position: 'absolute',
              width: screenWidth,
              height: screenHeight / 3,
            }}
          />
          <Text style={{ fontSize: 24, color: '#fff', textAlign: 'center' }}>
            Some Of The Best Real Estate {sertitle}
          </Text>
        </ImageBackground>
      </View>
    )
  }
  const renderItem = (itemData) => {
    return (
      <ProjectType
        title={itemData.item.name}
        serviceLogo={itemData.item.image}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'Project_Detail',
            params: {
              proId: itemData.item.id,
            },
          })
        }}
      />
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={displayedSubCompanies}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={listSection}
        showsVerticalScrollIndicator={false}
        numColumns={1}
      />
    </View>
  )
}

ProjectCategory.navigationOptions = (navigationData) => {
  return {
    headerTitle: () => <HeaderLogo />,
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

export default ProjectCategory
