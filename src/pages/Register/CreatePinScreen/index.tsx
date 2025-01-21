import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './style';

const CreatePinScreen = ({ navigation }: any) => {
  const [pin, setPin] = useState('');

  const handleKeyPress = (value: string) => {
    if (pin.length < 4) {
      setPin(pin + value);
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  const handleReset = () => {
    setPin('');
  };

  const handleSetPin = () => {
    if (pin.length === 4) {
      Alert.alert('PIN Set', `Your PIN is confirmed`, [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('HomeScreen');
          },
        },
      ]);
    } else {
      Alert.alert('Error', 'Please enter a 4-digit PIN.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your PIN</Text>
      <Text style={styles.subtitle}>Create a four-digit passcode to secure your account</Text>

      <View style={styles.pinIndicatorContainer}>
        {Array.from({ length: 4 }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.pinIndicator,
              { backgroundColor: index < pin.length ? '#00E0C7' : '#E8F7F4' },
            ]}
          />
        ))}
      </View>

       <View style={styles.keyboardContainer}>
        <View style={styles.keyboardRow}>
          {[1, 2, 3].map((number) => (
            <TouchableOpacity
              key={number}
              style={styles.keyboardKey}
              onPress={() => handleKeyPress(number.toString())}
            >
              <Text style={styles.keyboardKeyText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.keyboardRow}>
          {[4, 5, 6].map((number) => (
            <TouchableOpacity
              key={number}
              style={styles.keyboardKey}
              onPress={() => handleKeyPress(number.toString())}
            >
              <Text style={styles.keyboardKeyText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.keyboardRow}>
          {[7, 8, 9].map((number) => (
            <TouchableOpacity
              key={number}
              style={styles.keyboardKey}
              onPress={() => handleKeyPress(number.toString())}
            >
              <Text style={styles.keyboardKeyText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.keyboardRow}>
          <View style={styles.keyboardKey} />
          <TouchableOpacity style={styles.keyboardKey} onPress={() => handleKeyPress('0')}>
            <Text style={styles.keyboardKeyText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyboardKey} onPress={handleDelete}>
            <Text style={styles.keyboardKeyText}>⌫</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={handleReset}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.setPinButton} onPress={handleSetPin}>
        <Text style={styles.setPinButtonText}>Set up PIN</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CreatePinScreen;
