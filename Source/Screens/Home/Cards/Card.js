import React from 'react';
import {Text, ScrollView, TouchableOpacity, View, FlatList} from 'react-native';
import images from '../../images';

const cards = [
  {
    name: 'NFt Gloves',
    backgroundColor: 'green',
    // text : 'Rs 100',
    // text : 'karachi',
    fontSize: 40,
    images: images.man,
  },
  {
    name: 'Vechicles',
    backgroundColor: 'pink',
    images: images.man,
  },
];

const Card = () => {
  return (
    <ScrollView>
      <FlatList numColumns={2}  />
      {cards.map((cards, index) => {
        return (
          <View style={{flex: 1}}>
            <TouchableOpacity key={index}>
              <View
                style={{
                  backgroundColor: cards.backgroundColor,
                  margin: 10,
                  width: 80,
                  height: 80,
                  borderRadius: 5,
                  flexDirection: 'row',
                }}>
                {cards.images}
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'normal',
                    color: '#000',
                    textAlign: 'center',
                  }}>
                  {cards.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Card;
