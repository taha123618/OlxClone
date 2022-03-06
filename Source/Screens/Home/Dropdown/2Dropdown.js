import React, {useState} from 'react';
import {View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
  {label: 'Item 9', value: '9'},
  {label: 'Item 10', value: '10'},
  {label: 'Item 11', value: ' 11'},
  {label: 'Item 12', value: '12'},
  {label: 'Item 13', value: '13'},
];

const Dropdown2 = (props) => {
  const [value, setValue] = useState('')

  return (
    <View style={{flex: 1 , 
    // backgroundColor:'#fff'
    }}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}z
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={props.placeholder}
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
        setValue(item.value);
        }}
        renderLeftIcon={() => (
          <Ionicons
            style={styles.icon}
            color="black"
            name ={'search'}
            size={25}
          />
        )}
        renderRightIcon={props.renderRightIcon}
      />
    </View>
  );
};

export default Dropdown2;

