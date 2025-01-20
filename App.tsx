import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './src/pages/LoginScreen';
import PinScreen from './src/pages/PinScreen';
import FirstAcess from './src/pages/FirstAcess';
import SetAlertsScreen from './src/pages/SetAlertsScreen';
import ManagePortifolioScreen from './src/pages/ManagePortifolioScreen';
import StaySecureScreen from './src/pages/StaySecureScreen';
import HomeScreen from './src/pages/HomeScreen';
import CryptoScreen from './src/pages/CryptoScreen';
import CryptoDetailsScreen from './src/pages/CryptoDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  const [isFirstAccess, setIsFirstAccess] = useState<boolean | null>(null);

  useEffect(() => {
    const checkFirstAccess = async () => {
      try {
        const hasSeenFirstAccess = await AsyncStorage.getItem('hasSeenFirstAccess');
        if (hasSeenFirstAccess === null) {
          setIsFirstAccess(true);
        } else {
          setIsFirstAccess(false);
        }
      } catch (error) {
        console.error('Erro ao verificar o primeiro acesso', error);
      }
    };

    checkFirstAccess();
  }, []);

  const handleFirstAccessComplete = async () => {
    await AsyncStorage.setItem('hasSeenFirstAccess', 'true');
    setIsFirstAccess(false);
  };

  if (isFirstAccess === null) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isFirstAccess ? "FirstAcess" : "LoginScreen"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FirstAcess" component={FirstAcess} initialParams={{ onComplete: handleFirstAccessComplete }} />
        <Stack.Screen name="SetAlertsScreen" component={SetAlertsScreen} />
        <Stack.Screen name="ManagePortifolioScreen" component={ManagePortifolioScreen} />
        <Stack.Screen name="StaySecureScreen" component={StaySecureScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="PinScreen" component={PinScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CryptoScreen" component={CryptoScreen} />
        <Stack.Screen name="CryptoDetailsScreen" component={CryptoDetailsScreen} options={{ title: 'Detalhes da Moeda' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
