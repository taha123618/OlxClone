import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import DropdownComponent from './Dropdown/Dropdown';
import Browser from './BrowseCategories/Browser';
import Dropdown2 from './Dropdown/2Dropdown';

import Cards from './Cards/Cards';
import Card from './Cards/Card';

export default function Home({navigation }) {
  // for status Bar
  useEffect(() => {
    const unsubscribe = navigation?.addListener?.('focus', () => {
      Platform.OS === 'android' && StatusBar.setTranslucent(true);
      StatusBar.setBarStyle('light-content');
      //   StatusBar.setBackgroundColor('black')
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView >
        <DropdownComponent />
        <Dropdown2 />
        <Browser />
        <Cards />
        {/* <Card /> */}
    </ScrollView>
  );
}
