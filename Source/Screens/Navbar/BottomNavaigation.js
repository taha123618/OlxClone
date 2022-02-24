import React from 'react';
import Home from '../Home/Home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// for Navigation
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import TopNavaigation from './TopNavaigation';

import Chats from '../Home/BottomScreens/Chats';
import Sell from '../Home/BottomScreens/Sell';
import MyAds from '../Home/BottomScreens/MyAds';
import Accounts from '../Home/BottomScreens/Accounts';
import Email from '../WelcomeScreens/Email/Email';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const HomeTabNavaigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="TopNavaigation"
        component={TopNavaigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chats"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Accounts"
        component={Home}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyAds"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sell"
        component={Home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Email"
        component={Email}
        options={{headerShown: false}}
      />
       {/* <Stack.Screen
        name="Motors"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Property"
        component={Home}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  )
};

const TabNavaigation = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomeTab"
      component={HomeTabNavaigation}
      options={{
        headerShown: false,
        title: 'Home',
        tabBarIcon: ({focused}) => (
          <AntDesign color="green" size={20} name={focused ? 'home' : 'home'} />
        ),
      }}
    />
    <Tab.Screen
      name="ChatsTab"
      component={Chats}
      options={{
        // headerShown: false,
        title: 'Chats',
        tabBarIcon: ({focused}) => (
          <AntDesign
            color="black"
            size={20}
            name={focused ? 'wechat' : 'wechat'}
          />
        ),
      }}
    />
    <Tab.Screen
      name="SellTab"
      component={Sell}
      options={{
        // headerShown: false,
        title: 'Sell',
        // tabBarVisible:true,
        tabBarIcon: ({focused}) => (
          <AntDesign
            color="black"
            size={20}
            name={focused ? 'enviroment' : 'enviromento'}
          />
        ),
      }}
    />
    <Tab.Screen
      name="MyAdsTab"
      component={MyAds}
      options={{
        // headerShown: false,
        title: 'MyAds',
        tabBarIcon: ({focused}) => (
          <AntDesign
            color="black"
            size={20}
            name={focused ? 'heart' : 'hearto'}
          />
        ),
      }}
    />
    <Tab.Screen
      name="AccountsTab"
      component={Accounts}
      options={{
        // headerShown: false,
        title: 'Accounts',
        tabBarIcon: ({focused}) => (
          <MaterialIcons
            color="black"
            size={20}
            name={focused ? 'account-circle' : 'account-circle'}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavaigation;
