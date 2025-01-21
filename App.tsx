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
import PhoneScreen from './src/pages/Register/PhoneScreen';
import ConfirmNumberScreen from './src/pages/Register/ConfirmNumberScreen';
import UserInfoScreen from './src/pages/Register/UserInfoScreen';
import CreatePinScreen from './src/pages/Register/CreatePinScreen';
import ExchangeScreen from './src/pages/ExchangeScreen';


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
      {isFirstAccess ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="FirstAcess" component={FirstAcess} initialParams={{ onComplete: handleFirstAccessComplete }} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SetAlertsScreen" component={SetAlertsScreen} />
          <Stack.Screen name="ManagePortifolioScreen" component={ManagePortifolioScreen} />
          <Stack.Screen name="StaySecureScreen" component={StaySecureScreen} />
          <Stack.Screen name="PhoneScreen" component={PhoneScreen} />
          <Stack.Screen name="ConfirmNumberScreen" component={ConfirmNumberScreen} />
          <Stack.Screen name="UserInfoScreen" component={UserInfoScreen} />
          <Stack.Screen name="CreatePinScreen" component={CreatePinScreen} />
          <Stack.Screen name="PinScreen" component={PinScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CryptoScreen" component={CryptoScreen} />
          <Stack.Screen name="CryptoDetailsScreen" component={CryptoDetailsScreen} options={{ title: 'Detalhes da Moeda' }} />
          <Stack.Screen name="ExchangeScreen" component={ExchangeScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="PinScreen" component={PinScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CryptoScreen" component={CryptoScreen} />
          <Stack.Screen name="CryptoDetailsScreen" component={CryptoDetailsScreen} options={{ title: 'Detalhes da Moeda' }} />
          <Stack.Screen name="ExchangeScreen" component={ExchangeScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );  
};

export default App;