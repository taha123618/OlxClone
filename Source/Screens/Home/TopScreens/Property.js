import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Switch,
} from 'react-native';
import React, {useState, useCallback} from 'react';

import Cards from '../Cards/Cards';
import DropdownComponent from '../Dropdown/Dropdown';
import Dropdown2 from '../Dropdown/2Dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import RangeSlider from 'rn-range-slider';
// import images from '../../images';
import MultiToggleSwitch from 'react-native-multi-toggle-switch';

const Property = ({props}) => {
  // const renderThumb = useCallback(() => <Thumb />, []);
  // const renderRail = useCallback(() => <Rail />, []);
  // const renderRailSelected = useCallback(() => <RailSelected />, []);
  // const renderLabel = useCallback(value => <Label text={value} />, []);
  // const renderNotch = useCallback(() => <Notch />, []);
  // const handleValueChange = useCallback((low, high) => {
  //   setLow(low);
  //   setHigh(high);
  // }, []);

  const [click, setClick] = useState();
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
              // backgroundColor: 'lightblue',
              borderRadius: 20,
              padding: 10,
              width: 130,
            }}>
            {/* toggle  */}
            {/* <TouchableOpacity activeOpacity={0.8}>
              <Text style={{color: '#000', fontWeight: 'bold'}}>Sales</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              // onPress={() => setClick(click  , !style={{backgroundColor: '#fff'}}>)}
            >
              <Text style={{color: '#000', fontWeight: 'bold', marginLeft: 40}}>
                Rent
              </Text>
            </TouchableOpacity> */}

            <MultiToggleSwitch >
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
            </MultiToggleSwitch>

            {/* <Switch
              trackColor={{false: '#767577', true: 'sales'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#fff'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              Text={isEnabled ? 'Sales' : 'Rent'}
              value={isEnabled}
            /> */}
          </View>

          {/* 2 */}
          <View>
            <DropdownComponent />
            <Dropdown2 />
          </View>

          {/* 3 */}
          <View>
            {/* search filter  */}
            {/* <RangeSlider
              // style={styles.slider}
              style={{width: 160, height: 80}}
              gravity={'center'}
              min={0}
              max={100}
              step={1}
              selectionColor="#3df"
              blankColor="#f618"
              floatingLabel
              // renderThumb={renderThumb}
              // renderRail={renderRail}
              // renderRailSelected={renderRailSelected}
              // renderLabel={renderLabel}
              // renderNotch={renderNotch}
              // onValueChanged={handleValueChange}
            /> */}
          </View>

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
         <Cards />
      </ImageBackground>
    </ScrollView>
  );
};

export default Property;
