import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, TextInput, Alert, Modal, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CryptoScreen = ({ navigation }: { navigation: any }) => {
  const [cryptoData, setCryptoData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cryptoToDelete, setCryptoToDelete] = useState<any>(null);

//CHange later
  const symbolToIdMap: { [key: string]: string } = {
    'eth': 'ethereum',
    'btc': 'bitcoin',
    'ltc': 'litecoin',
    'xrp': 'ripple',
    'USDT': 'tether',
  };

  useEffect(() => {
    const loadCryptos = async () => {
      try {
        const storedCryptos = await AsyncStorage.getItem('cryptoData');
        if (storedCryptos) {
          setCryptoData(JSON.parse(storedCryptos));
        }
        setLoading(false);
      } catch (error) {
        console.error('Error loading cryptos from AsyncStorage:', error);
        setLoading(false);
      }
    };

    loadCryptos();
  }, []);

  const fetchCryptoData = async (query: string) => {
    const formattedQuery = query.trim().toLowerCase();
    let cryptoId = symbolToIdMap[formattedQuery] || formattedQuery;

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&ids=${cryptoId}`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        const formattedData = {
          id: data[0].id,
          name: data[0].name,
          price: data[0].current_price,
          symbol: data[0].symbol.toUpperCase(),
          iconUrl: data[0].image,
        };

        const isCryptoExists = cryptoData.some(crypto => crypto.symbol === formattedData.symbol);

        if (isCryptoExists) {
          Alert.alert('Crypto already added', 'This crypto has already been added to your list.');
        } else {
          setSearchResults([formattedData]);
        }
      } else {
        Alert.alert('Crypto not found', 'Check your search and try again.');
      }
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  };

  const handleSearchCrypto = async () => {
    if (!searchQuery) return;
    fetchCryptoData(searchQuery);
  };

  const handleAddCrypto = async (crypto: any) => {
    const updatedCryptoData = [...cryptoData, crypto];

    try {
      await AsyncStorage.setItem('cryptoData', JSON.stringify(updatedCryptoData));
      setCryptoData(updatedCryptoData);
      setSearchQuery('');
      setSearchResults([]);
    } catch (error) {
      console.error('Error saving crypto to AsyncStorage:', error);
    }
  };

  const handleDeleteCrypto = async () => {
    if (!cryptoToDelete) return;

    const updatedCryptoData = cryptoData.filter(crypto => crypto.id !== cryptoToDelete.id);

    try {
      await AsyncStorage.setItem('cryptoData', JSON.stringify(updatedCryptoData));
      setCryptoData(updatedCryptoData);
      setIsModalVisible(false);
      setCryptoToDelete(null);
    } catch (error) {
      console.error('Error deleting crypto from AsyncStorage:', error);
    }
  };

  const renderCryptoItem = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity
        style={styles.cryptoItem}
        onPress={() =>
          navigation.navigate('CryptoDetailsScreen', {
            cryptoId: item.id,
            cryptoName: item.name,
            cryptoIcon: item.iconUrl,
            cryptoPrice: item.price,
            cryptoSymbol: item.symbol,
          })
        }
        onLongPress={() => {
          setCryptoToDelete(item);
          setIsModalVisible(true);
        }}
      >
        <View>
          <Image source={{ uri: item.iconUrl }} style={styles.cryptoIcon} />
        </View>
        <View style={styles.cryptoInfo}>
          <Text style={styles.cryptoName}>
            {item.name} ({item.symbol})
          </Text>
        </View>
        <Text style={styles.cryptoPrice}>
          ≈ R$ {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}><Image source={require('../../../assets/Blackback.png')} /></Text>
        </TouchableOpacity>
        <Text style={styles.title}>Tokens</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#6200EE" style={styles.loading} />
      ) : (
        <FlatList
          data={cryptoData}
          keyExtractor={(item) => item.id}
          renderItem={renderCryptoItem}
          contentContainerStyle={styles.cryptoList}
        />
      )}

      <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a new crypto"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View>
        <TouchableOpacity onPress={handleSearchCrypto}>
          <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>
      </View>

      </View>

      {searchResults.length > 0 && (
        <View style={styles.searchResultsContainer}>
          {searchResults.map((crypto) => (
            <TouchableOpacity
              key={crypto.id}
              style={styles.cryptoItem}
              onPress={() => handleAddCrypto(crypto)}
            >
              <View>
                <Image source={{ uri: crypto.iconUrl }} style={styles.cryptoIcon} />
              </View>
              <View style={styles.cryptoInfo}>
                <Text style={styles.cryptoName}>
                  {crypto.name} ({crypto.symbol})
                </Text>
              </View>
              <Text style={styles.cryptoPrice}>
                ≈ R$ {crypto.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Delete Crypto</Text>
              <Text style={styles.modalMessage}>
                Are you sure you want to delete {cryptoToDelete?.name} ({cryptoToDelete?.symbol})?
              </Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity onPress={() => setIsModalVisible(false)} style={styles.modalButtonCancel}>
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDeleteCrypto} style={styles.modalButtonDelete}>
                  <Text style={styles.modalButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default CryptoScreen;