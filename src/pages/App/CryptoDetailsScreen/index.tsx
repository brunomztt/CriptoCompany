import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SvgXml } from 'react-native-svg';
import styles from './style';

const heartOutlineSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" fill="#DC143C"></path>
</svg>
`;

const heartFilledSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" fill="#ffffff"></path>
</svg>
`;

const renderDetailText = (label: string, value: string, index: number) => {
  const backgroundColor = index % 2 === 0 ? '#F9FAFF' : '#FFFFFF';
  return (
    <View style={[styles.detailTextContainer, { backgroundColor }]}>
      <Text style={[styles.detailLabel]}>{label}</Text>
      <Text style={[styles.detailValue]}>{value}</Text>
    </View>
  );
};


const CryptoDetailsScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { cryptoId, cryptoName, cryptoIcon, cryptoPrice } = route.params;
  const [cryptoDetails, setCryptoDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    fetchCryptoDetails();
    checkIfFavorite();
  }, []);

  const fetchCryptoDetails = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${cryptoId}`
      );
      const data = await response.json();

      setCryptoDetails({
        marketCap: data.market_data.market_cap.brl,
        range24h: data.market_data.price_change_percentage_24h,
        range7d: data.market_data.price_change_percentage_7d,
        allTimeHigh: data.market_data.ath.brl,
        allTimeLow: data.market_data.atl.brl,
      });
    } catch (error) {
      console.error('Erro ao buscar detalhes:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkIfFavorite = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      if (favorites) {
        const favoritesArray = JSON.parse(favorites);
        setIsFavorite(favoritesArray.includes(cryptoId));
      }
    } catch (error) {
      console.error('Erro ao verificar favoritos:', error);
    }
  };

  const toggleFavorite = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      let favoritesArray = favorites ? JSON.parse(favorites) : [];

      if (isFavorite) {
        favoritesArray = favoritesArray.filter((id: string) => id !== cryptoId);
        setIsFavorite(false);
        Alert.alert(`${cryptoName} removed from bookmarks.`);
      } else {
        favoritesArray.push(cryptoId);
        setIsFavorite(true);
        Alert.alert(`${cryptoName} added to bookmarks.`);
      }      

      await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    } catch (error) {
      console.error('Erro ao salvar favoritos:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.navbaritens}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}><Image source={require('../../assets/Whiteback.png')} /></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleFavorite}>
            <SvgXml
              xml={isFavorite ? heartFilledSvg : heartOutlineSvg}
              width={24}
              height={24}
            />
          </TouchableOpacity>
        </View>
      </View>
    
      <View style={styles.header}>
          <Image source={{ uri: cryptoIcon }} style={styles.cryptoLogo} />
          <Text style={styles.cryptoName}>{cryptoName}</Text>
          <Text style={styles.cryptoName}>R$ {cryptoPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#6200EE" style={styles.loading} />
      ) : (
        <View style={styles.detailsContainer}>
          <Text style={styles.historicalTitle}>{cryptoName} Historical Price</Text>
          {renderDetailText('Market Cap:', `R$ ${cryptoDetails.marketCap.toLocaleString('pt-BR')}`, 0)}
          {renderDetailText('24h Range:', `${cryptoDetails.range24h.toFixed(2)}%`, 1)}
          {renderDetailText('7d Range:', `${cryptoDetails.range7d.toFixed(2)}%`, 2)}
          {renderDetailText('All Time High:', `R$ ${cryptoDetails.allTimeHigh.toLocaleString('pt-BR')}`, 3)}
          {renderDetailText('All Time Low:', `R$ ${cryptoDetails.allTimeLow.toLocaleString('pt-BR')}`, 4)}
        </View>
      )}
    </View>
  );
};

export default CryptoDetailsScreen;
