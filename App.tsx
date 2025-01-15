import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/pages/LoginScreen';
import PinScreen from './src/pages/PinScreen';
import FirstAcess from './src/pages/FirstAcess';
import SetAlertsScreen from './src/pages/SetAlertsScreen';
import ManagePortifolioScreen from './src/pages/ManagePortifolioScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstAcess" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FirstAcess" component={FirstAcess} />
        <Stack.Screen name="SetAlertsScreen" component={SetAlertsScreen} />
        <Stack.Screen name="ManagePortifolioScreen" component={ManagePortifolioScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="PinScreen" component={PinScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;