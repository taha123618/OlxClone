import {Text, View, Dimensions, TextInput} from 'react-native';
import React from 'react';
import Svg, {Image} from 'react-native-svg';
import styles from './style';

const {width, height} = Dimensions.get('window');

const Register = () => {
  return (
    <View style={styles.container}>
      <View>
        <Svg height={height / 2} width={width}>
          <Image
            href={require('../../images/logo')}
            width={width}
            height={height}
            preserveAspectRatio="%MidMid slice"
          />
        </Svg>

        {/* close button  */}
        <View style={styles.closeButton}>
          <Text> X </Text>
        </View>

        {/* buttons  */}
        <View style={styles.bottonContainer}>
          {/* <View style={styles.button}>
            <Text style={styles.buttonText}> Login </Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText}> Register </Text>
          </View> */}
        </View>

        {/* Form  */}
        <View style={styles.form}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#000"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#000"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#000"
            style={styles.textInput}
          />
          <View style={styles.formButton}>
            <Text style={styles.buttonText}> Submit </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Register;
