import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image, Linking } from 'react-native';
import styles from './style';
import defaultstyles from '../../../global/defaultstyle';
import PhoneInput from 'react-native-phone-number-input';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProgressBar } from 'react-native-paper';
import { CountryCode } from 'react-native-country-picker-modal';

type RootStackParamList = {
  LoginScreen: undefined;
  ConfirmNumberScreen: { phoneNumber: string };
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'ConfirmNumberScreen'>;

const handleOpenTerms = async () => {
  const url = 'https://github.com/brunomztt/CriptoCompany';
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert('Error', 'Unable to open the URL.');
  }
};

const PhoneScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(false);
  const phoneInput = React.useRef<PhoneInput>(null);
  const navigation = useNavigation<NavigationProps>();

  const handleSendCode = () => {
    if (isValid) {
      Alert.alert('Success', `Code has been sent to ${phoneNumber}`, [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('ConfirmNumberScreen', { phoneNumber });
          },
        },
      ]);
    } else {
      Alert.alert('Error', 'Invalid phone number.');
    }
  };

  return (
    <View style={styles.container}>
      <ProgressBar progress={0.2} color="#23EBC3" style={defaultstyles.progressBar} />
      <Text style={styles.title}>Getting Started</Text>
      <PhoneInput
        ref={phoneInput}
        value={phoneNumber}
        defaultCode="BR"
        layout="first"
        onChangeText={(text) => setPhoneNumber(text)}
        onChangeFormattedText={(formattedText) => {
          const isValidNumber = phoneInput.current?.isValidNumber(formattedText);
          setIsValid(isValidNumber || false);
          setPhoneNumber(formattedText);
        }}
        countryPickerProps={{
          withFlagButton: true,
          renderFlagButton: ({ countryCode }: { countryCode: CountryCode }) => ( // Adicionei o tipo aqui
            <View style={styles.flagContainer}>
              <Image
                source={{
                  uri: `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`,
                }}
                style={styles.flagIcon}
              />
            </View>
          ),
        }}
        withDarkTheme={false}
        withShadow
        autoFocus
        containerStyle={styles.phoneInputContainer}
        textContainerStyle={styles.textContainer}
      />

      <TouchableOpacity
        style={[styles.button, !isValid && styles.buttonDisabled]}
        onPress={handleSendCode}
        disabled={!isValid}
      >
        <Text style={styles.buttonText}>Send Code</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.signInText}>
          Already have an account? <Text style={styles.signInLink}>Sign In</Text>
        </Text>
      </TouchableOpacity>
      <Text style={styles.termsText}>
        By creating an account you agree to our{' '}
        <Text style={styles.termsLink} onPress={handleOpenTerms}>
          Terms and Conditions
        </Text>
      </Text>
    </View>
  );
};
export default PhoneScreen;