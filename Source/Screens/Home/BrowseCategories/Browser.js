import React from 'react';
import {Text, ScrollView, TouchableOpacity, View} from 'react-native';
import categories from './categories';

const Browser = () => {
  return (
    <ScrollView
      // key={'scrollView'}
      horizontal={true}
      contentContainerStyle={{marginBottom: 15}}
      showsHorizontalScrollIndicator={false}>
      {/* <View style={{flexDirection:'row'}}>
        <Text>Broswer categories</Text>
        <Text >see All</Text>
        </View> */}
      {categories.map((category, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              width: 100,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <View
              style={{
                backgroundColor: category.backgroundColor,
                width: 70,
                height: 70,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {category.icon}
            </View>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                fontWeight: 'normal',
                color: '#000',
                textAlign: 'center',
              }}
              numberOfLines={2}>
              {category.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Browser;
