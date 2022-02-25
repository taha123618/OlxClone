import React, {useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  Platform,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import DropdownComponent from './Dropdown/Dropdown';
import Browser from './BrowseCategories/Browser';
import Dropdown2 from './Dropdown/2Dropdown';
// import ReactNativeParallaxHeader from 'react-native-parallax-header';

import Cards from './Cards/Cards';
// import Card from './Cards/Card';

// const {height: SCREEN_HEIGHT} = Dimensions.get('window');
// const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
// const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
// const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
// const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;


// const renderContent = () => {
//   return <DropdownComponent />;
// };

export default function Home({navigation}) {
  // for status Bar
  useEffect(() => {
    const unsubscribe = navigation?.addListener?.('focus', () => {
      Platform.OS === 'android' && StatusBar.setTranslucent(true);
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('#fff')
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView>
      {/* <ReactNativeParallaxHeader
        renderContent={renderContent}
      /> */}
      <DropdownComponent />
      <Dropdown2 />
      <Browser />
      <Cards />
      {/* <Card /> */}
    </ScrollView>
  );
}
