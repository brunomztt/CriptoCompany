import React from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import styles from './style';
import 'react-native-gesture-handler';

export default function FirstAcess({ navigation }: any) {
    const getStartedButtonFunc = () => {
        navigation.navigate('SetAlertsScreen');
    };

    const signInButtonFunc = () => {
        navigation.navigate('LoginScreen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Track Crypto Prices</Text>
            <Image source={require('../../assets/CryptoCreditCards.png')} />
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.getStartedButton}
                    onPress={getStartedButtonFunc}
                >
                    <Text style={styles.getStartedButtonText}>Get Started</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={signInButtonFunc}
                >
                    <Text style={styles.signInButtonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
