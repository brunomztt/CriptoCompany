import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import styles from './style';
export default function FirstAcess({ navigation }: any) {
    const singInButtonFunc = () => {
      navigation.navigate('LoginScreen');
    };
  

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Track Crypto Prices</Text>
            <Image source={require('../../assets/CryptoCreditCards.png')} />
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.getStartedButton}>
                    <Text style={styles.getStartedButtonText}>Get Started</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signInButton} onPress={singInButtonFunc}>
                    <Text style={styles.signInButtonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}