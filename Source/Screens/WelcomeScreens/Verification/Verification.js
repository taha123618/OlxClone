import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import React, {useState} from 'react';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

// for animation
// const {Value, Text: AnimatedText} = Animated;

const CELL_COUNT = 4;

const Verification = ({navigation}) => {
  // for box in CELL_COUNT
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  // // for animation
  // const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
  // const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
  // const animateCell = ({hasValue, index, isFocused}) => {
  //   Animated.parallel([
  //     Animated.timing(animationsColor[index], {
  //       useNativeDriver: false,
  //       toValue: isFocused ? 1 : 0,
  //       duration: 250,
  //     }),
  //     Animated.spring(animationsScale[index], {
  //       useNativeDriver: false,
  //       toValue: hasValue ? 0 : 1,
  //       duration: hasValue ? 300 : 250,
  //     }),
  //   ]).start();
  // };

  // const AnimatedExample = () => {
  //   const [value, setValue] = useState('');
  //   const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  //   const [props, getCellOnLayoutHandler] = useClearByFocusCell({
  //     value,
  //     setValue,
  //   });

  //   const renderCell = ({index, symbol, isFocused}) => {
  //     const hasValue = Boolean(symbol);
  //     const animatedCellStyle = {
  //       backgroundColor: hasValue
  // ? animationsScale[index].interpolate({
  //             inputRange: [0, 1],
  //             outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
  //           })
  //         : animationsColor[index].interpolate({
  //             inputRange: [0, 1],
  //             outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
  //           }),
  //       borderRadius: animationsScale[index].interpolate({
  //         inputRange: [0, 1],
  //         outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
  //       }),
  //       transform: [
  //         {
  //           scale: animationsScale[index].interpolate({
  //             inputRange: [0, 1],
  //             outputRange: [0.2, 1],
  //           }),
  //         },
  //       ],
  //     };

  //     // Run animation on next event loop tik
  //     // Because we need first return new style prop and then animate this value
  //     setTimeout(() => {
  //       animateCell({hasValue, index, isFocused});
  //     }, 0);

  //   return (
  //     <AnimatedText
  //       key={index}
  //       style={[styles.cell, animatedCellStyle]}
  //       onLayout={getCellOnLayoutHandler(index)}>
  //       {symbol || (isFocused ? <Cursor /> : null)}
  //     </AnimatedText>
  //   );
  // };

  return (
    <View style={{flex: 1, paddingHorizontal: 30, paddingVertical: 30}}>
      {/* fir view  */}
      <View style={{margin: 40}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 40,
            color: '#000',
            fontStyle: 'normal',
          }}>
          Welcome Back
        </Text>
        <Text style={{marginTop: 20}}>Enter the 4-digit code we send to</Text>
        {/* <Text>{Email.name}</Text> */}
        <Text style={{color: '#000', fontWeight: 'bold'}}>
          tahaahmedanees2@gmail.com
        </Text>
      </View>

      {/* Second View  */}
      <View style={{margin: 40}}>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        {/* for animation  */}
        {/* <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      /> */}
      </View>

      {/* Third View  */}
      <View style={{margin: 40}}>
        <Text
          style={{textDecorationLine: 'underline', textTransform: 'uppercase'}}>
          Resend Code By Email
        </Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={{color: 'blue'}}>(Try again in 52s) </Text>
        </TouchableOpacity>
      </View>

      {/* Fourth View  */}
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'green',
          padding: 20,
          // margin: 40,
          paddingHorizontal: 40,
          borderRadius: 30,
          hoverColor: 'red',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
            Verify
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 5},
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#000',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});

export default Verification;
