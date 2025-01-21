import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

const ExchangeScreen = () => {
  const [favoriteCryptos, setFavoriteCryptos] = useState<any[]>([]);
  const [cryptoData, setCryptoData] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      fetchFavoriteCryptos();
    }, [])
  );
  const fetchFavoriteCryptos = async () => {
    try {
      setLoading(true);
      const favorites = await AsyncStorage.getItem('favorites');
      if (favorites) {
        const favoriteIds = JSON.parse(favorites);
        if (favoriteIds.length > 0) {
          const response = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&ids=${favoriteIds.join(
              ','
            )}`
          );
          const data = response.data.map((item: any) => ({
            id: item.id,
            name: item.name,
            price: item.current_price,
            iconUrl: item.image,
            amount: '',
            pricePaid: '',
          }));
          setFavoriteCryptos(data);
          setCryptoData(
            data.reduce((acc: any, item: any) => {
              acc[item.id] = { amount: '', pricePaid: '' };
              return acc;
            }, {})
          );
        }
      }
    } catch (error) {
      console.error('Erro ao buscar moedas favoritas:', error);
      Alert.alert('Erro', 'Não foi possível carregar suas moedas favoritas.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (id: string, field: string, value: string) => {
    setCryptoData((prev: any) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
  };

  const calculateProfitLoss = (amount: number, pricePaid: number, currentPrice: number) => {
    const totalValue = amount * currentPrice;
    const profitLoss = totalValue - amount * pricePaid;
    return { totalValue, profitLoss };
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Exchange</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#6200EE" />
      ) : favoriteCryptos.length > 0 ? (
        favoriteCryptos.map((crypto) => {
          const { totalValue, profitLoss } = calculateProfitLoss(
            parseFloat(cryptoData[crypto.id]?.amount || '0'),
            parseFloat(cryptoData[crypto.id]?.pricePaid || '0'),
            crypto.price
          );

          return (
            <View key={crypto.id} style={styles.cryptoCard}>
              <Text style={styles.cryptoTitle}>{crypto.name}</Text>
              <Text style={styles.cryptoPrice}>1 {crypto.name} = R$ {crypto.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</Text>
              <TextInput
                style={styles.input}
                placeholder="Quantidade"
                keyboardType="numeric"
                value={cryptoData[crypto.id]?.amount || ''}
                onChangeText={(value) => handleInputChange(crypto.id, 'amount', value)}
              />
              <TextInput
                style={styles.input}
                placeholder="Preço pago"
                keyboardType="numeric"
                value={cryptoData[crypto.id]?.pricePaid || ''}
                onChangeText={(value) => handleInputChange(crypto.id, 'pricePaid', value)}
              />
              <Text style={styles.result}>
                Valor Atual: R$ {totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}{'\n'}
                Lucro/Prejuízo: R$ {profitLoss.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </Text>
            </View>
          );
        })
      ) : (
        <Text style={styles.noFavoritesText}>Adicione criptomoedas aos favoritos na HomeScreen.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cryptoCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  cryptoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cryptoPrice: {
    fontSize: 14,
    color: 'green',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  result: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  noFavoritesText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
});

export default ExchangeScreen;