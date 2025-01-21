import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './style';

export default function StaySecureScreen({ navigation }: any) {
  const navigateToNext = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.topRedImg} source={require('../../assets/Top.png')}>
        <Image style={styles.headerImage} source={require('../../assets/StaySecure.png')} />
      </ImageBackground>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Stay Secure</Text>
        <Text style={styles.description}>Protect your data with our advanced security measures.</Text>
      </View>
      <TouchableOpacity 
        style={styles.registerButton} 
        onPress={() => navigateToNext('PhoneScreen')}
      >
        <Text style={styles.registerButtonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};
