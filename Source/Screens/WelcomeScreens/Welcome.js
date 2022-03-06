import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import images from '../images';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Welcome = (props) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingVertical: 30,
        paddingHorizontal: 30,
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.replace('TabNavaigation')}>
        <AntDesign name="close" size={20} color="#000" />
      </TouchableOpacity>

      {/* first View  */}
      <View style={{alignItems: 'center', marginTop: -70}}>
        <Image source={images.logo} style={{width: 200, height: 200}} />
        <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
          Welcome To OLX
        </Text>
        <Text>The trusted community of buyers and sellers</Text>
      </View>

      {/* second View */}
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{backgroundColor: '#454', padding: 10, margin: 10}}>
          <Text style={{color: '#fff'}}>Google sign</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{backgroundColor: 'blue', padding: 10, margin: 10}}>
          <Text style={{color: '#fff'}}>fb sign</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Email')}
          style={{backgroundColor: 'yellow', padding: 10, margin: 10}}>
          <Text style={{color: '#000'}}>continue with Email</Text>
          {/* <Email /> */}
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Phone')}
          style={{backgroundColor: '#efca3244', padding: 10, margin: 10}}>
          <Text style={{color: '#000'}}> continue with Phone </Text>
          {/* <Phone /> */}
        </TouchableOpacity>
      </View>

      {/* last View */}
      {/* copy right  */}
      <View
        style={{
          color: '#000',
          fontSize: 20,
          fontFamily: 'sans-serif-medium',
          alignItems: 'center',
        }}>
        <Text>If your continue , you are accepting</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={{textDecorationLine: 'underline'}}>
            OLX Terms and Condition
          </Text>
          <Text style={{textAlign: 'center'}}> and </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={{textDecorationLine: 'underline'}}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Welcome;
