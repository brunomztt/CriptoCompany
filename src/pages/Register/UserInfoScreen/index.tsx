import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
  Image,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import defaultstyles from '../../../global/defaultstyle';
import styles from './style';
import { ProgressBar } from 'react-native-paper';


export default function PersonalInformationScreen({ navigation }: any) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isAdult = (date: Date) => {
    const today = new Date();
    const age = today.getFullYear() - date.getFullYear();
    const monthDiff = today.getMonth() - date.getMonth();
    const dayDiff = today.getDate() - date.getDate();
    return age > 18 || (age === 18 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)));
  };

  const handleContinue = async () => {
    if (!firstName || !lastName || !dob || !username || !password) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (!isAdult(dob)) {
      Alert.alert('Error', 'You must be at least 18 years old.');
      return;
    }

    try {
      await AsyncStorage.setItem('userData', JSON.stringify({ username, password }));
      await AsyncStorage.setItem('firstName', firstName);
      navigation.navigate('CreatePinScreen');
    } catch (error) {
      Alert.alert('Error', 'Unable to save data.');
    }
  };

  return (
    <View style={styles.container}>
      <ProgressBar progress={0.8} color="#23EBC3" style={defaultstyles.progressBar} />
      <Text style={styles.title}>Personal information</Text>
      <Text style={styles.subtitle}>
        We ask for your personal information to verify your identity
      </Text>

      <TextInput
        style={styles.input}
        placeholder="First name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last name"
        value={lastName}
        onChangeText={setLastName}
      />

      <TouchableOpacity
        onPress={() => setShowPicker(true)}
        style={styles.input}>
        <Text>
          {dob ? dob.toLocaleDateString() : 'Select Date of Birth'}
        </Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={dob || new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          maximumDate={new Date()}
          onChange={(event, selectedDate) => {
            setShowPicker(false);
            if (selectedDate) setDob(selectedDate);
          }}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={defaultstyles.button}
        onPress={handleContinue}>
        <Text>
          <Image source={require('../../../assets/VectorContinue.png')} />
        </Text>
      </TouchableOpacity>
    </View>
  );
}