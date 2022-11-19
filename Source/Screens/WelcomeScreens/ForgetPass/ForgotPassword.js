import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const ForgotPassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  // for password eye
  const [showPass, setShowPass] = useState(false);

  return (
    <View style={{flex: 1, paddingHorizontal: 30, paddingVertical: 30}}>
      {/* fir view  */}
      <View style={{margin: 30}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
            color: '#000',
            fontStyle: 'normal',
          }}>
          Create a password
        </Text>
        <Text style={{marginTop: 20, fontSize: 15}}>
          You can creating a password for taha@gamil.com. This will help you
          Login faster next time.
        </Text>
      </View>

      {/* second View  */}

      {/* first  */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 1,
          height: 40,
          marginTop: 20,
          paddingHorizontal: 10,
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 5,
        }}>
        <TextInput
          secureTextEntry={!showPass}
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={'black'}
          placeholder="Password"
          style={{flex: 1, marginLeft: 10}}
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

      {/* Second  */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 1,
          height: 40,
          marginTop: 20,
          paddingHorizontal: 10,
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 5,
        }}>
        <TextInput
          secureTextEntry={!showPass}
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={'black'}
          placeholder="Confirm Password"
          style={{flex: 1, marginLeft: 10}}
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

      {/* third View  */}
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
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
