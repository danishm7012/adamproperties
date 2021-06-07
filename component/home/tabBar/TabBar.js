import { Text, View } from 'react-native'

import AllStyle from '../../../AllStyle'
import { Button } from 'react-native-elements'
import Colors from '../../../constants/Colors'
import React from 'react'
import SearchBarsExpandable from '../../searchComponent/SearchBarsExpandable'
import SegmentedControlTab from 'react-native-segmented-control-tab'

function TabBar() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleSingleIndexSelect = (index) => {
    setSelectedIndex(index)
  }
  return (
    <View style={AllStyle.container}>
      {/* Simple Segmented Control*/}
      {/* <Text style={AllStyle.headerText}>Properties For</Text> */}

      <SegmentedControlTab
        values={['SELE', 'RENT', 'BUY']}
        selectedIndex={selectedIndex}
        tabStyle={AllStyle.tabStyleinner}
        activeTabStyle={AllStyle.activeTabStyleinner}
        // onTabPress={index => setSelectedIndex({ selectedIndex: index })}
        onTabPress={handleSingleIndexSelect}
        tabsContainerStyle={{
          height: 40,
          marginTop: 0,
          marginBottom: 10,
          backgroundColor: Colors.accentColor,
        }}
        tabTextStyle={{ fontWeight: '700' }}
      />

      {/* <View style={AllStyle.seperator} /> */}

      {selectedIndex === 0 && <SearchBarsExpandable />}

      {selectedIndex === 1 && <SearchBarsExpandable />}
      {selectedIndex === 2 && <SearchBarsExpandable />}

      <Button
        buttonStyle={{ backgroundColor: Colors.accentColor }}
        title='Search'
      />
      {/* <View style={AllStyle.seperator} /> */}
    </View>
  )
}

export default TabBar
