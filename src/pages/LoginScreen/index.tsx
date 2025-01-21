import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import defaultstyles from '../../global/defaultstyle';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please fill in both username and password');
      return;
    }

    try {
      const storedData = await AsyncStorage.getItem('userData');
      if (storedData) {
        const { username: storedUsername, password: storedPassword } = JSON.parse(storedData);
        if (username === storedUsername && password === storedPassword) {
          navigation.navigate('PinScreen');
        } else {
          Alert.alert('Error', 'Invalid username or password');
        }
      } else {
        Alert.alert('Error', 'No user data found');
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to verify user data.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.subtitle}>Sign in to your account</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={defaultstyles.buttonText}>
          <Image source={require('../../assets/VectorContinue.png')} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;