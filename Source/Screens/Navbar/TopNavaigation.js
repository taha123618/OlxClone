import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../Home/Home';

import Mall from '../Home/TopScreens/Mall';
import Motors from '../Home/TopScreens/Motors';
import Property from '../Home/TopScreens/Property';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TopTab = createMaterialTopTabNavigator();

const TopNavaigation = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen
        name="HomeTab"
        component={Home}
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <AntDesign
              color="#3474f5"
              size={20}
              name={focused ? 'home' : 'home'}
            />
          ),
        }}
      />
      <TopTab.Screen
        name="MallTab"
        component={Mall}
        options={{
          headerShown: false,
          title: 'Mall',
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              color="black"
              size={20}
              name={focused ? 'store-mall-directory' : 'store-mall-directory'}
            />
          ),
        }}
      />
      <TopTab.Screen
        name="MotorsTab"
        component={Motors}
        options={{
          headerShown: false,
          title: 'Motors',
          tabBarIcon: ({focused}) => (
            <AntDesign
              color="black"
              size={20}
              name={focused ? 'car' : 'car'}
            />
          ),
        }}
      />
      <TopTab.Screen
        name="PropertyTab"
        component={Property}
        options={{
          headerShown: false,
          title: 'Property',
          tabBarIcon: ({focused}) => (
            <FontAwesome
              color="black"
              size={20}
              name={focused ? 'building' : 'building-o'}
            />
          ),
        }}
      />
    </TopTab.Navigator>
  );
};

export default TopNavaigation;
