import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: 'yellow',
    height: 55,
    alignContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.5,
  },
  bottonContainer: {
    justifyContent: 'center',
    height: height / 3,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: 'green',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    paddingLeft: 10,
  },
  form: {
    marginBottom: 70,
  },
  formButton: {
    backgroundColor: 'yellow',
    height: 55,
    alignContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.04,
    elevation: 5,
  },
  closeButton: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default styles;
