import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
  TextInput,
  Button,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import styles from './style';

const ExchangeScreen = () => {
  const [favoriteCryptos, setFavoriteCryptos] = useState<any[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState<any>(null);
  const [targetPrice, setTargetPrice] = useState<string>('');
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      fetchFavoriteCryptos();
    }, [])
  );

  const fetchFavoriteCryptos = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      if (favorites) {
        const favoriteIds = JSON.parse(favorites);
        if (Array.isArray(favoriteIds) && favoriteIds.length > 0) {
          const response = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&ids=${favoriteIds.join(",")}`
          );
          const data = response.data.map((item: any) => ({
            id: item.id,
            name: item.name,
            price: item.current_price,
            iconUrl: item.image,
          }));
          setFavoriteCryptos(data);
        }
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to load your favorite cryptocurrencies.');
    }
  };

  const setAlertForCrypto = async (cryptoId: string, targetPrice: number) => {
    try {
      const alerts = await AsyncStorage.getItem('alerts');
      const parsedAlerts = alerts ? JSON.parse(alerts) : {};
      parsedAlerts[cryptoId] = targetPrice;
      await AsyncStorage.setItem('alerts', JSON.stringify(parsedAlerts));
      Alert.alert('Alert Set', `You will be notified when it reaches R$${targetPrice}`);
    } catch {
      Alert.alert('Error', 'Unable to save the alert.');
    }
  };

  const handleSetAlert = (crypto: any) => {
    setSelectedCrypto(crypto);
    setModalVisible(true);
  };

  const handleSaveAlert = () => {
    if (!targetPrice || isNaN(Number(targetPrice)) || Number(targetPrice) <= 0) {
      Alert.alert('Invalid Value', 'Please enter a valid number greater than zero.');
      return;
    }
    if (selectedCrypto?.id) {
      setAlertForCrypto(selectedCrypto.id, Number(targetPrice));
      setModalVisible(false);
      setTargetPrice('');
    } else {
      Alert.alert('Error', 'The cryptocurrency ID is invalid.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}><Image source={require('../../../assets/Blackback.png')} /></Text>
        </TouchableOpacity>
        <Text style={styles.title}>Exchange</Text>
      </View>
      <ScrollView contentContainerStyle={styles.cryptoList}>
        <View style={styles.gridContainer}>
          {favoriteCryptos.length > 0 ? (
            favoriteCryptos.map((crypto) => (
              <TouchableOpacity
                key={crypto.id}
                style={styles.cryptoCard}
                onPress={() => handleSetAlert(crypto)}
              >
                <Image source={{ uri: crypto.iconUrl }} style={styles.cryptoImage} />
                <Text style={styles.cryptoPrice}>R$ {crypto.price.toFixed(2)}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noFavoritesText}>
              Add cryptocurrencies to your favorites in the HomeScreen.
            </Text>
          )}
        </View>
      </ScrollView>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Set Alert for {selectedCrypto?.name}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter value (R$)"
              keyboardType="numeric"
              value={targetPrice}
              onChangeText={setTargetPrice}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={[styles.modalButton, styles.cancelButton]}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSaveAlert}
                style={[styles.modalButton, styles.saveButton]}
              >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ExchangeScreen;
