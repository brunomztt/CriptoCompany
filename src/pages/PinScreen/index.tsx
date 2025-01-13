import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const PinScreen = () => {
  const [pin, setPin] = useState('');

  const handleKeyPress = (value: string) => {
    if (pin.length < 4) {
      setPin(pin + value);
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your PIN</Text>
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
        {Array.from({ length: 9 }, (_, i) => i + 1).map((number) => (
          <TouchableOpacity
            key={number}
            style={styles.keyboardKey}
            onPress={() => handleKeyPress(number.toString())}
          >
            <Text style={styles.keyboardKeyText}>{number}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.keyboardKey} onPress={() => handleKeyPress('0')}>
          <Text style={styles.keyboardKeyText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keyboardKey} onPress={handleDelete}>
          <Text style={styles.keyboardKeyText}>⌫</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => setPin('')}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PinScreen;