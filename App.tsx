import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import codePush from 'react-native-code-push';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {
  
  useEffect(() => {
    // verificações anteriores
    SplashScreen.hide();
  }, []);

  
  
  
  return (
    <View>
      <Text style={{color: '#000000'}}> It's just a another test!</Text>
    </View>
  )
}

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  
})(App);
