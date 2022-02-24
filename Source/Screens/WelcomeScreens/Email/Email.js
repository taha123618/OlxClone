import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import images from '../../images';
import Entypo from 'react-native-vector-icons/Entypo';

const Email = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // for password eye
  const [showPass, setShowPass] = useState(false);
  return (
    <View style={{flex: 1, paddingHorizontal: 30}}>
      <Image
        source={images.man}
        style={{width: 100, height: 100, marginTop: 30}}
      />
      <Text
        style={{
          color: '#000',
          fontSize: 20,
          marginTop: 30,
        }}>
        Enter Your Email
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 1,
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          marginTop: 20,
          paddingHorizontal: 10,
          borderRadius:5
        }}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder=" Email"
          placeholderTextColor={'black'}
          // defaultValue="Email"
        />
      </View>
      <Text
        style={{
          color: '#000',
          fontSize: 20,
          marginTop: 30,
        }}>
        Enter Your Password
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 1,
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          marginTop: 20,
          paddingHorizontal: 10,
          borderRadius: 5,
        }}>
        <TextInput
          secureTextEntry={!showPass}
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={'black'}
          placeholder="Password"
          style={{flex: 1}}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setShowPass(!showPass)}>
          <Entypo
            name={showPass ? 'eye-with-line' : 'eye'}
            size={20}
            color={'black'}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Verification')}>
        <Text
          style={{
            marginTop: 10,
              textDecorationLine: 'underline',
              color: 'blue'
          }}>
          Forgot Your Password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('HomeTab')}
        style={{
          backgroundColor: 'green',
          borderRadius: 4,
          padding: 15,
          marginTop: 30,
        }}>
        <Text style={{color: '#fff', fontWeight: 'bold', textAlign: 'center'}}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Email;
