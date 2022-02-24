import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import images from '../../images';
import Entypo from 'react-native-vector-icons/Entypo';
import CountryPicker from 'react-native-country-picker-modal';
import {ScrollView} from 'react-native-gesture-handler';

const Phone = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  // for password eye
  const [showPass, setShowPass] = useState(false);

  // for country code
  const [selectedcountry, setSelectedcountry] = useState({
    cca2: 'PK',
    callingCode: '92',
  });
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(false);

  const onSelect = country => {
    console.log('country ===> ', country);
    setSelectedcountry({
      callingCode: country?.callingCode[0],
      cca2: country?.cca2,
      image: country?.flag,
    });
  };

  return (
    <ScrollView>
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
          Enter Your Phone
        </Text>
        <Text
          style={{
            color: 'gray',
            fontSize: 15,
            marginTop: 10,
          }}>
          We Will Send a confirmation code to your phone
        </Text>

        {/* Selector of number  */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
          }}>
          {/* country view  */}
          <View
            style={{
              paddingRight: 10,
              flexDirection: 'row',
              borderRightWidth: 1,
            }}>
            <CountryPicker
              countryCode={selectedcountry.cca2}
              withCallingCode
              withAlphaFilter
              // withCloseButton
              withFlag
              withFilter
              onSelect={onSelect}
            />
            <Text style={{marginTop: 5, color: '#000'}}>
              {selectedcountry.callingCode}
            </Text>
          </View>

          <TextInput
            value={number}
            onChangeText={setNumber}
            placeholder=" Phone Number"
            placeholderTextColor={'black'}
            style={{
              flex: 1,
              height: 40,
              marginLeft: 10,
            }}
          />
        </View>

        <Text
          style={{
            color: '#000',
            marginTop: 20,
            fontSize: 20,
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
              color: 'blue',
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
          <Text
            style={{color: '#fff', fontWeight: 'bold', textAlign: 'center'}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Phone;
