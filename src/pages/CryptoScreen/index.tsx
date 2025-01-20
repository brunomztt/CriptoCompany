import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './style';

const cryptoIds = [
  'bitcoin',
  'ethereum',
  'tether',
  'binancecoin',
  'ripple',
  'cardano',
  'polkadot',
];

const cryptoColors: { [key: string]: string } = {
  bitcoin: '#F7931A',
  ethereum: '#3C3C3D',
  tether: '#26A17B',
  binancecoin: '#F0B90B',
  ripple: '#346AA9',
  cardano: '#0033AD',
  solana: '#9945FF',
  polkadot: '#E6007A',
};

// Adicionando as siglas das criptomoedas
const cryptoSymbols: { [key: string]: string } = {
  bitcoin: 'BTC',
  ethereum: 'ETH',
  tether: 'USDT',
  binancecoin: 'BNB',
  ripple: 'XRP',
  cardano: 'ADA',
  polkadot: 'DOT',
};

const CryptoScreen = ({ navigation }: { navigation: any }) => {
  const [cryptoData, setCryptoData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCryptoData();
  }, []);

  const fetchCryptoData = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&ids=${cryptoIds.join(
          ','
        )}`
      );
      const data = await response.json();

      const formattedData = data.map((item: any) => ({
        id: item.id,
        name: item.name,
        price: item.current_price,
        iconUrl: item.image,
      }));

      setCryptoData(formattedData);
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderCryptoItem = ({ item }: { item: any }) => {
    const backgroundColor = cryptoColors[item.id] || '#ddd';
    const symbol = cryptoSymbols[item.id];

    return (
      <TouchableOpacity
        style={[styles.cryptoItem]}
        onPress={() =>
          navigation.navigate('CryptoDetailsScreen', {
            cryptoId: item.id,
            cryptoName: item.name,
            cryptoIcon: item.iconUrl,
            cryptoPrice: item.price,
          })
        }
      >
        <View>
          <Image source={{ uri: item.iconUrl }} style={styles.cryptoIcon} />
        </View>
        <View style={styles.cryptoInfo}>
          <Text
            style={[
              styles.cryptoName,
              { color: backgroundColor, fontFamily: 'DM Sans' },
            ]}
          >
            {item.name} ({symbol})
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
          <Text style={styles.backButton}><Image source={require('../../assets/Blackback.png')} /></Text>
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
    </View>
  );
};

export default CryptoScreen;
