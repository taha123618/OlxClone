import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Switch,
  TextInput,
} from 'react-native';
import React, {useState, useCallback} from 'react';

import Cards from '../Cards/Cards';
import DropdownComponent from '../Dropdown/Dropdown';
import Dropdown2 from '../Dropdown/2Dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RangeSlider from 'rn-range-slider';
import MultiToggleSwitch from 'react-native-multi-toggle-switch';

import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from '../Dropdown/styles';

const Property = props => {
  // const [click, setClick] = useState();
  // const [low, setLow] = useState(0);
  // const [high, setHigh] = useState(0);
  // const handleValueChange = useCallback((low, high) => {
  //   setLow(low);
  //   setHigh(high);
  // }, []);

  // const [isEnabled, setIsEnabled] = useState(false);

  // const toggleSwitch = () =>
  // setIsEnabled(previousState => !previousState);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={require('../../../assets/images/city.jpg')}
        imageStyle={{width: 500, height: 370, backfaceVisibility: 'visible'}}
        style={{flex: 1}}>
        <View style={{flex: 1, paddingHorizontal: 30, paddingVertical: 30}}>
          {/* 1 */}
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'lightblue',
              borderRadius: 20,
              padding: 10,
              marginHorizontal: 20,
              width: 150,
            }}>
            {/* toggle  */}
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={{color: '#000', 
              fontWeight: 'bold',
              marginEnd:50
            
            }}>Sales</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              // onPress={() => setClick(click  , !style={{backgroundColor: '#fff'}}>)}
            >
              <Text
                style={{color: '#000', fontWeight: 'bold'}}>
                Rent
              </Text>
            </TouchableOpacity>

            {/* <MultiToggleSwitch >
              <MultiToggleSwitch.Item itemsContainer='green'
                onPress={() => console.log('Facebook tapped!')} 
                primaryColor='#eee'>
                <Text style={{color: '#000', fontWeight: 'bold'}}>Sales</Text>
              </MultiToggleSwitch.Item>
              <MultiToggleSwitch.Item
                onPress={() => console.log('where tapped!')}
                primaryColor={'#eee'}>
                <Text style={{color: '#000', fontWeight: 'bold'}}>Rent</Text>
              </MultiToggleSwitch.Item>
            </MultiToggleSwitch> */}
          </View>

          {/* 2 */}
          <View>
            <DropdownComponent
              style={{}}
              placeholder="land and plotes"
              renderLeftIcon={() => (
                <Ionicons
                  style={styles.icon}
                  color="black"
                  name={'archive-sharp'}
                  size={25}
                />
              )}
            />
            <Dropdown2 />
          </View>

          {/* 3 */}

          {/* <RangeSlider
            style={{width: 160, height: 80}}
            gravity={'center'}
            min={200}
            max={1000}
            step={20}
            selectionColor="#3df"
            blankColor="#f618"
            onValueChanged={(low, high, fromUser) => {
              // this.setState({rangeLow: low, rangeHigh: high})
            }}
          /> */}
          {/* <View style={{width: 100, height: 100, backgroundColor: '#000'}}> */}
          {/* search filter  */}
          {/* <RangeSlider
              style={{width: 160, height: 80}}
              min={0}
              max={100}
              step={1}
              selectionColor="#3df"
              blankColor="#f618"
              renderThumb={() => (
                <View style={{backgroundColor:'green'}}>

                </View>
              )}
              renderRail={() => (
                <View style={{flex:1,backgroundColor:'red'}}>

                </View>
              )}
              renderRailSelected={() => (
                <View style={{flex:1, backgroundColor:'yellow'}}>

                </View>
              )}
              onValueChanged={handleValueChange}
            /> */}
          {/* </View> */}

          {/* 4 */}
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                justifyContent: 'center',
                backgroundColor: 'blue',
                padding: 10,
                marginHorizontal: 20,
              }}>
              <AntDesign name={'search1'} size={15} color="#fff" />
              <Text
                style={{
                  color: '#fff',
                  textTransform: 'uppercase',
                  marginLeft: 10,
                }}>
                SEARCh
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <Cards />
    </ScrollView>
  );
};

export default Property;
