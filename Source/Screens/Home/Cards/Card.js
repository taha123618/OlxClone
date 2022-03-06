import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import images from '../../images';

// for adjust the width for the cards
const {width} = Dimensions.get('window');
const Itemwidth = (width - 10 * 2) / 2;

const Card = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <ScrollView
      horizontal={true}
      // contentContainerStyle={{flexDirection:'row'}}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
        }}>
        <FlatList
          key={2}
          // numColumns={4}
          data={['', '', '', '', '', '', '', '', '', '', '', '', '', '']}
          renderItem={({index, item}) => (
            <View
              style={{
                backgroundColor: '#eee34d',
                width: Itemwidth - 10,
                marginTop: 10,
                marginRight: 10,
                height: 180,
                borderRadius: 7,
                boxShadow: '0px 0px 1px #eee',
              }}>
              <Image
                source={images.man}
                style={{width: 80, height: 80, marginBottom: 10, marginTop: 10}}
              />
              <View
                style={{
                  marginLeft: 10,
                }}>
                <Text>NFT Gloves</Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row-reverse',
                    margin: 5,
                    marginTop: -15,
                  }}
                  activeOpacity={0.8}
                  onPress={() => setShowPass(!showPass)}>
                  <AntDesign
                    name={showPass ? 'hearto' : 'heart'}
                    size={15}
                    color="red"
                  />
                </TouchableOpacity>
                <Text>RS 100</Text>
              </View>

              <View style={{flexDirection: 'row', marginLeft: 10}}>
                <Text>karachi</Text>
                <Text>10 DEC</Text>
              </View>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Card;
