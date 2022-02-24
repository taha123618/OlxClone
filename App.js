import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import NavBar from './Source/Screens/Navbar/Navbar';

const App = () => {
  // for splash screen
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <NavBar />;
};

export default App;
