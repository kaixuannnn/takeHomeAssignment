import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {navigationTheme} from './app/config/styles';
import {MainNavigator} from './app/helper/router';
import FlashMessage from 'react-native-flash-message';
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <MainNavigator />
      </NavigationContainer>
      <FlashMessage position="center" />
    </SafeAreaProvider>
  );
};

export default App;
