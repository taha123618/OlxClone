import React from 'react';
import Home from '../Home/Home';
import Welcome from '../WelcomeScreens/Welcome';

// for Navigation
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

// import DrawerNavaigation from './DrawerNavaigation';
import TabNavaigation from './BottomNavaigation';
import Email from '../WelcomeScreens/Email/Email';
import Phone from '../WelcomeScreens/PhoneNo/Phone';
import ForgotPassword from '../WelcomeScreens/ForgetPass/ForgotPassword';
import Verification from '../WelcomeScreens/Verification/Verification';

const Stack = createStackNavigator();

const MainNavaigation = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="TabNavaigation"
        component={TabNavaigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Email"
        component={Email}
        // options={{headerShown: false}}
      />
        <Stack.Screen
          name="Phone"
          component={Phone}
          // options={{headerShown: false}}
        />
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{title: 'Login'}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeTab"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainNavaigation />
    </NavigationContainer>
  );
};

const NavBar = ({navigation}) => {
  // const { top, bottom } = useSafeAreaInsets();

  return <Navigation />;
};

export default NavBar;
