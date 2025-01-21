import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './style';
import { ProgressBar } from 'react-native-paper';
import defaultstyles from '../../../global/defaultstyle';

const ConfirmNumberScreen = ({ route, navigation }: any) => {
  const { phoneNumber } = route.params;
  const lastThreeDigits = phoneNumber.slice(-3);
  
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);

  const inputRefs = [useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null)];

  const handleChangeText = (text: string, index: number) => {
    const newCode = code.split('');
    newCode[index] = text;
    setCode(newCode.join(''));

    if (text && inputRefs[index + 1]) {
      inputRefs[index + 1].current?.focus();
    }

    if (newCode.join('') === '0000') {
      navigation.navigate('UserInfoScreen');
    }
  };

  const handleResendCode = () => {
    Alert.alert('Código reenviado!', 'Enviamos um novo código para o seu número.');
  };

  return (
    <View style={styles.container}>
      <ProgressBar progress={0.4} color="#23EBC3" style={defaultstyles.progressBar} />
      <Text style={styles.title}>Enter 4-digit code</Text>
      <Text style={styles.subtitle}>We’ve sent the code to ****{lastThreeDigits}</Text>
      <View style={styles.codeInputContainer}>
        {[...Array(4)].map((_, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            style={[
              styles.codeInput,
              error && styles.errorInput,
            ]}
            keyboardType="numeric"
            maxLength={1}
            value={code[index] || ''}
            onChangeText={(text) => handleChangeText(text, index)}
          />
        ))}
      </View>
      {error && <Text style={styles.errorText}>Code incorrect. Try again.</Text>}
      <TouchableOpacity style={styles.resendButton} onPress={handleResendCode}>
        <Text style={styles.resendText}>Resend</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmNumberScreen;