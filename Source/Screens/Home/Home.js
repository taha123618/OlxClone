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

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from '../Home/Dropdown/styles';

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

export default function Home({navigation, props}) {
  // for status Bar
  useEffect(() => {
    const unsubscribe = navigation?.addListener?.('focus', () => {
      Platform.OS === 'android' && StatusBar.setTranslucent(true);
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('#fff');
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView>
      {/* <ReactNativeParallaxHeader
        renderContent={renderContent}
      /> */}
      <DropdownComponent
        placeholder="karachi Sindh"
        renderLeftIcon={() => (
          <Ionicons
            style={styles.icon}
            color="black"
            name={'ios-location-outline'}
            size={25}
          />
        )}
      />
      <Dropdown2
        placeholder="Find Cars, Mobile Phones and more"
        renderRightIcon={() => (
          <Entypo style={styles.icon} color="black" name={'bell'} size={25} />
        )}
      />
      <Browser />
      <Cards numColumns={2} backgroundColor={'lightgreen'}/>
      {/* <Card /> */}
    </ScrollView>
  );
}
